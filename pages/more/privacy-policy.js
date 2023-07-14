import React from 'react'
import {useRouter} from "next/router";
import NewFooter from "../../components/NewFooter";

export default function PrivacyPolicy() {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };
    return (
        <>
            <div className="bg-bebe text-black text-transform: uppercase min-h-screen flex flex-col items-center">
                <div className="flex justify-center flex-col items-center font-nhg text-xxs sm:text-sm font-medium flex-1">
                    <div className="h-16 w-2/3  mt-8 mb-4">
                        <button className="flex flex-col items-end border border-black p-2"
                                onClick={handleGoBack}>
                            BACK
                        </button>
                    </div>

                    <div className="w-2/3 flex-1 pb-8">
                        <h1 className="mb-4 underline">PRIVACY POLICY:</h1>

                        <p>
                            Gray Era Privacy Policy. <br />
                            Last updated: 7/10/2023
                        </p>
                        <div className="h-4"></div>
                        <h2 className="underline">Changes to This Privacy Policy</h2>
                        <div className="h-4"></div>

                        <p>
                            We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the &quot;Last updated&quot; date and take any other steps required by applicable law.
                        </p>
                        <div className="h-4"></div>

                        <h2 className="underline">How We Collect and Use Your Personal Information</h2>
                        <div className="h-4"></div>

                        <p>
                            To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
                        </p>
                        <div className="h-4"></div>

                        <h3 className="underline">What Personal Information We Collect</h3>
                        <div className="h-4"></div>

                        <p>
                            The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term &quot;personal information&quot;, we are referring to information that identifies, relates to, describes, or can be associated with you. The following sections describe the categories and specific types of personal information we collect.
                        </p>
                        <div className="h-4"></div>

                        <h4 className="underline">Information We Collect Directly from You</h4>
                        <div className="h-4"></div>

                        <p>
                            Information that you directly submit to us through our Services may include:
                        </p>

                        <ul>
                            <li>Basic contact details including your name, address, phone number, email.</li>
                            <li>Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.</li>
                            <li>Account information including your username, password, security questions.</li>
                            <li>Shopping information including the items you view, put in your cart, or add to your wishlist.</li>
                            <li>
                                Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.
                            </li>
                        </ul>

                        <div className="h-4"></div>

                        <p>
                            Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.
                        </p>
                        <div className="h-4"></div>

                        <h4 className="underline">Information We Collect through Cookies</h4>
                        <div className="h-4"></div>

                        <p>
                            We also automatically collect certain information about your interaction with the Services (&quot;Usage Data&quot;). To do this, we may use cookies, pixels, and similar technologies (&quot;Cookies&quot;). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address, and other information regarding your interaction with the Services.
                        </p>
                        <div className="h-4"></div>

                        <h4 className="underline">Information We Obtain from Third Parties</h4>
                        <div className="h-4"></div>

                        <p>
                            Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:
                        </p>

                        <ul>
                            <li>Companies who support our Site and Services, such as Shopify.</li>
                            <li>Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.</li>
                            <li>
                                When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.
                            </li>
                        </ul>

                        <div className="h-4"></div>
                        <p>
                            Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party&apos;s policies or practices. For more information, see the section below, Third Party Websites and Links.
                        </p>
                        <div className="h-4"></div>

                        <h2 className="underline">How We Use Your Personal Information</h2>
                        <div className="h-4"></div>

                        <p>
                            <strong>Providing Products and Services:</strong> We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, send notifications related to your account, purchases, returns, exchanges, or other transactions, create and manage your account, arrange for shipping, facilitate returns and exchanges, and enable you to post reviews.
                        </p>

                        <p>
                            <strong>Marketing and Advertising:</strong> We use your personal information for marketing and promotional purposes, such as sending marketing, advertising, and promotional communications by email, text message, or postal mail, and showing you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.
                        </p>

                        <p>
                            <strong>Security and Fraud Prevention:</strong> We use your personal information to detect, investigate, or take action regarding possible fraudulent, illegal, or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.
                        </p>

                        <h2 className="underline">Communication and Customer Support:</h2>
                        <div className="h-4"></div>

                        <p>
                            We use your personal information to provide customer support and
                        </p>
                        <p>
                            <strong>Communicating with You:</strong> We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests to be responsive to you, provide effective services, and maintain our business relationship with you.
                        </p>
                        <div className="h-4"></div>

                        <h2 className="underline">Cookies</h2>
                        <div className="h-4"></div>

                        <p>
                            Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use related to powering our store with Shopify, see <a href="https://www.shopify.com/legal/cookies" target="_blank" rel="noopener noreferrer">https://www.shopify.com/legal/cookies</a>. We use Cookies to power and improve our Site and Services, run analytics, and better understand user interaction with the Services (in our legitimate interests to administer, improve, and optimize the Services). We may also permit third parties and service providers to use Cookies on our Site to better tailor the services, products, and advertising on our Site and other websites.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.
                        </p>
                        <div className="h-4"></div>

                        <h2 className="underline">How We Disclose Personal Information</h2>
                        <div className="h-4"></div>

                        <p>
                            In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:
                        </p>
                        <div className="h-4"></div>

                        <p>
                            With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment, and shipping).
                        </p>
                        <p>
                            With business and marketing partners, including Shopify, to provide services and advertise to you. Our business and marketing partners will use your information in accordance with their own privacy notices.
                        </p>
                        <p>
                            When you direct, request us, or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations, with your consent.
                        </p>
                        <p>
                            With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.
                        </p>
                        <p>
                            In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations, to respond to subpoenas, search warrants, and similar requests, to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
                        </p>

                        <div className="h-4"> </div>

                        <p>
                            We have, in the past 12 months, disclosed the following categories of personal information and sensitive personal information (denoted by *) about users for the purposes set out above in &quot;How we Collect and Use your Personal Information&quot; and How we Disclose Personal Information:
                        </p>
                        <div className="h-4"> </div>

                        <p>
                            <strong>Category:</strong>
                        </p>

                        <p>Identifiers such as basic contact details and certain order and account information</p>
                        <p>Commercial information such as order information, shopping information, and customer support information</p>
                        <p>Internet or other similar network activity, such as Usage Data</p>

                        <div className="h-4"> </div>

                        <p>
                            <strong>Categories of Recipients:</strong>
                        </p>

                        <p>Vendors and third parties who perform services on our behalf (such as Internet service providers, payment processors, fulfillment partners, customer support partners, and data analytics providers)</p>
                        <p>Business and marketing partners</p>
                        <p>Affiliates</p>
                        <div className="h-4"> </div>

                        <p>We do not use or disclose sensitive personal information for the purposes of inferring characteristics about you.</p>
                        <div className="h-4"> </div>

                        <p>We have &quot;sold&quot; and &quot;shared&quot; (as those terms are defined in applicable law) personal information over the preceding 12 months for the purpose of engaging in advertising and marketing activities, as follows.</p>
                        <div className="h-4"> </div>

                        <p><strong>Category of Personal Information:</strong></p>
                        <p>Identifiers such as basic contact details and certain order and account information</p>
                        <p>Commercial information such as records of products or services purchased and shopping information</p>
                        <p>Internet or other similar network activity, such as Usage Data</p>

                        <div className="h-4"> </div>

                        <p><strong>Categories of Recipients:</strong></p>
                        <p>Business and marketing partners</p>

                        <p><strong>User Generated Content:</strong> The Services may enable you to post product reviews and other user-generated content. If you choose to submit user-generated content to any public area of the Services, this content will be public and accessible by anyone. We do not control who will have access to the information that you choose to make available to others, and cannot ensure that parties who have access to such information will respect your privacy or keep it secure. We are not responsible for the privacy or security of any information that you make publicly available, or for the accuracy, use, or misuse of any information that you disclose or receive from third parties.</p>
                        <div className="h-4"> </div>

                        <p><strong>Third Party Websites and Links:</strong> Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms, may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.</p>
                        <div className="h-4"> </div>

                        <p><strong>Children&apos;s Data:</strong> The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us to request that it be deleted.</p>
                        <div className="h-4"></div>

                        <p><strong>Security and Retention of Your Information:</strong> Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee &quot;perfect security.&quot; In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us. How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, provide the Services, comply with legal obligations, resolve disputes, or enforce other applicable contracts and policies.</p>
                        <div className="h-4"> </div>

                        <p><strong>Your Rights and Choices:</strong> Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances, and in certain cases, we may decline your request as permitted by law.</p>
                        <div className="h-4"> </div>

                        <p><strong>Right to Access / Know:</strong> You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.</p>
                        <div className="h-4"> </div>

                        <p><strong>Right to Delete:</strong> You may have a right to request that we delete personal information we maintain about you.</p>
                        <div className="h-4"></div>

                        <p><strong>Right to Correct:</strong> You may have a right to request that we correct inaccurate personal information we maintain about you.</p>
                        <div className="h-4"></div>

                        <p><strong>Right of Portability:</strong> You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</p>
                        <div className="h-4"></div>

                        <p><strong>Right to Opt out of Sale or Sharing or Targeted Advertising:</strong> You may have a right to direct us not to &quot;sell&quot; or &quot;share&quot; your personal information or to opt out of the processing of your personal information for purposes considered to be &quot;targeted advertising&quot;, as defined in applicable privacy laws.</p>
                        <div className="h-4"></div>

                        <p><strong>Right to Limit and/or Opt out of Use and Disclosure of Sensitive Personal Information:</strong> You may have a right to direct us to limit our use and/or disclosure of sensitive personal information to only what is necessary to perform the Services or provide the goods reasonably expected by an average individual.</p>
                        <div className="h-4"></div>

                        <p><strong>Restriction of Processing:</strong> You may have the right to ask us to stop or restrict our processing of personal information.</p>
                        <div className="h-4"></div>

                        <p>
                            <strong>Withdrawal of Consent:</strong> Where we rely on consent to process your personal information, you may have the right to withdraw this consent.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            <strong>Appeal:</strong> You may have a right to appeal our decision if we decline to process your request.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            <strong>Managing Communication Preferences:</strong> We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity before providing a substantive response to the request. You may designate an authorized agent to make requests on your behalf to exercise your rights.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            We use Shopify&apos;s ad services such as Shopify Audiences to help personalize the advertising you see on third-party websites. To restrict Shopify merchants that use these ad services from using your personal information for such services, visit <a href="https://privacy.shopify.com/en" target="_blank" rel="noopener noreferrer">https://privacy.shopify.com/en</a>.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            <strong>Complaints:</strong> If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, you may have the right to appeal our decision by contacting us or lodge your complaint with your local data protection authority.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            <strong>International Users:</strong> Please note that we may transfer, store, and process your personal information outside the country you live in, including the United States. Your personal information is also processed by staff and third-party service providers and partners in these countries. If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission&apos;s Standard Contractual Clauses or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.
                        </p>
                        <div className="h-4"></div>

                        <p>
                            <strong>Contact:</strong> Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, email us at <a href="mailto:info@grayeravintage@gmail.com">info@grayeravintage@gmail.com</a>.
                        </p>


                    </div>
                </div>
            </div>
            <NewFooter/>
        </>
    );
}
