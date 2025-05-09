import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SortMenu({ onSelect }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (value) => {
        setSelectedItem(value);
        onSelect(value);
    };

    return (
        <div className="mt-1.5 sm:-mt-cstm md:-mt-midsh text-right">
            <Menu as="div" className="inline-block text-left">
                <div>
                    <Menu.Button className="flex text-black font-nhg font-medium sm:text-xxs sm:text-black sm:font-nhg sm:font-medium focus:outline-none pt-0 sm:pt-3 md:pt-[6px]">
                        SORT <ChevronDownIcon className="h-4" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="bg-bebe absolute mt-2 right-0 w-56 origin-top-right divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-black">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleItemClick('DATE, NEW TO OLD')}
                                        className={`${
                                            active || selectedItem === 'DATE, NEW TO OLD'
                                                ? 'bg-grayBkg text-white'
                                                : 'text-black'
                                        } group flex w-full items-center rounded-none px-2 py-2 text-xxs font-nhg font-medium`}
                                    >
                                        DATE, NEW TO OLD
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleItemClick('DATE, OLD TO NEW')}
                                        className={`${
                                            active || selectedItem === 'DATE, OLD TO NEW'
                                                ? 'bg-grayBkg text-white'
                                                : 'text-black'
                                        } group flex w-full items-center rounded-none px-2 py-2 text-xxs font-nhg font-medium`}
                                    >
                                        DATE, OLD TO NEW
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleItemClick('PRICE, LOW TO HIGH')}
                                        className={`${
                                            active || selectedItem === 'PRICE, LOW TO HIGH'
                                                ? 'bg-grayBkg text-white'
                                                : 'text-black'
                                        } group flex w-full items-center rounded-none px-2 py-2 text-xxs font-nhg font-medium`}
                                    >
                                        PRICE, LOW TO HIGH
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleItemClick('PRICE, HIGH TO LOW')}
                                        className={`${
                                            active || selectedItem === 'PRICE, HIGH TO LOW'
                                                ? 'bg-grayBkg text-white'
                                                : 'text-black'
                                        } group flex w-full items-center rounded-none px-2 py-2 text-xxs font-nhg font-medium`}
                                    >
                                        PRICE, HIGH TO LOW
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
