//components/Cart/index.jsx
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart} from "../../context/CartContext";
import {formatter} from "../../utils/helpers";
import Image from "next/image";
import Checkout from "../Checkout"

export default function Cart({open, setOpen}) {
    const { cart, removeFromCart, calculateSubtotal } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    // Function to handle opening/closing the checkout
    const handleCheckoutToggle = () => {
        setIsCheckoutOpen(!isCheckoutOpen);
    };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden font-nhg transform-text: uppercase">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md z-50">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-bebe shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-md font-medium text-black">
                                                    SHOPPING BAG
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    {cart.length > 0 ? (
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {cart.map((product) => {
                                                                const mainImage = product.images.edges[0]?.node;
                                                                return (
                                                                    <li key={product.id} className="flex py-6">
                                                                        <div className="h-24 w-18 flex-shrink-0 overflow-hidden  border border-gray-200">
                                                                            {/* Product image */}
                                                                            <div className="relative h-full w-full">
                                                                                <Image
                                                                                    src={mainImage.url}
                                                                                    alt={product.title}
                                                                                    layout="fill"
                                                                                    objectFit="contain"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div
                                                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                                                    {/* Product details */}
                                                                                    <div className="ml-4 flex-grow">
                                                                                        <h2 className="text-sm title-font font-medium mb-1">{product.title}</h2>
                                                                                        <p className="text-gray-500">{formatter.format(product.priceRange.minVariantPrice.amount)}</p>
                                                                                    </div>
                                                                                </div>
                                                                                {/*<p className="mt-1 text-sm text-gray-500">{product.color}</p>*/}
                                                                            </div>
                                                                            <div
                                                                                className="flex flex-1 items-end justify-between text-sm">
                                                                                <p className="pl-4 text-gray-500">Qty {product.quantity}</p>

                                                                                <div className="flex">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="font-medium text-black hover:text-gray-700 text-decoration-line: underline"
                                                                                        onClick={() => removeFromCart(product.id)}
                                                                                    >
                                                                                        REMOVE
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                        ) : (
                                                            <div className="text-center py-6">
                                                                <h2 className="font-medium text-black">
                                                                    YOUR CART IS EMPTY.
                                                                </h2>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-2 sm:px-6">
                                            <div className="py-2 flex justify-between text-base font-medium text-gray-900">
                                                <p>ESTIMATED TOTAL</p>
                                                <p>{formatter.format(calculateSubtotal())}</p>
                                            </div>
                                            <div className="mt-2">
                                                <Checkout open={isCheckoutOpen} setOpen={setIsCheckoutOpen} />
                                            </div>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
