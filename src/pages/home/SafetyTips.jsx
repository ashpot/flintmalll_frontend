import React from 'react'
import Navbar from '../../components/layout/Navbar';
import { H1 } from './TermsOfService';
import { P } from './TermsOfService';
import { UL } from './TermsOfService';

// OL for numbered lists
const OL = ({ children }) => (
  <ol className="list-decimal list-inside space-y-2 mb-6 ml-4 sm:text-lg text-base ">
    {children}
  </ol>
);

const SafetyTips = () => {
  return (
    <div>
        <title>Flintmall - Safety Tips</title>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-12">
        <h1 className="sm:text-6xl text-5xl font-bold text-[#1E1E1E] sm:mb-10 mb-7">Safety Tips</h1>
        <P>
            At Flintmall, we are committed to providing a secure marketplace. While we monitor listings, 
            your safety also depends on following these essential "Golden Rules".
        </P>

        <H1>For Buyers: Shop Smart</H1>
        <UL>
            <li><b>Meet in Public:</b> Always arrange to meet the seller in a well-lit, busy public place. 
            Good examples include shopping malls, gas stations, or fast-food restaurants. 
            Never meet in a private home or a secluded area.
            </li>
            <li>   
                <b>Inspect Before You Pay:</b> Never send money before seeing the item. Check the quality, 
                authenticity, and functionality of the product. Once you are satisfied, 
                you can proceed with payment.
            </li>
            <li>
                <b>Avoid "Too Good to Be True" Deals:</b> If a high-end smartphone or luxury bag is 
                being sold for 70% less than the market price, it is likely a scam or a faulty item.
            </li>
            <li>
                <b>Do Not Pay for "Delivery" Upfront:</b> Scammers often ask for a small "commitment fee" or "delivery fee" 
                before bringing the item. Refuse this. A genuine seller will meet you or use a verified escrow service.
            </li>
            <li>
                <b>Check Seller Ratings:</b> Look at the seller's profile age and reviews from 
                other buyers on Flintmall before reaching out.
            </li>
        </UL>

        <H1>For Sellers: Sell Securely</H1>
        <UL>
            <li><b>Verify Payment:</b> Before handing over your item, ensure you have received the funds. 
                If receiving a bank transfer, confirm the credit alert via your official bank app—do not rely solely on an 
                SMS notification, as these can be faked.
            </li>
            <li>   
                <b>Keep Communicaton On Flintmall:</b> Use our in-app chat for as long as possible. 
                This creates a record of your conversation should any dispute arise.
            </li>
            <li>   
                <b>Protect Your Privacy:</b> Avoid sharing sensitive personal information, 
                such as your home address or bank login details, with potential buyers.
            </li>
            
        </UL>
        <H1>Red Flags to Watch For</H1>
        <P>Be extra cautious if a user:</P>
        <OL>
            <li><b>Insists on moving the chat to WhatsApp or Telegram</b> immediately.
            </li>
            <li>   
                <b>Claims to be out of town</b> and asks you to pay a third party.
            </li>
            <li>   
                <b>Pressure you</b> to make a quick decision or payment.
            </li>
            <li>   
                <b>Asks for your OTP</b> (One-Time Password) or any banking passwords.
            </li>
        </OL>

        <P>
            <b>Your safety is our priority</b>. At Flintmall, we work tirelessly to keep our marketplace secure, 
            but your vigilance is the best defense against fraud. By following these simple guidelines, you help 
            us maintain a thriving, honest community for everyone. Stay alert, shop smart, and enjoy the best deals on Flintmall!
        </P>
        </main>
    </div>
  )
}

export default SafetyTips;
