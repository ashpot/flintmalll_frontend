import React from 'react';
import Navbar from '../../components/layout/Navbar';

// for paragraphs
export const P = ({ children }) => (
  <p className="text-lg font-semibold mb-6 leading-relaxed">{children}</p>
);

// headings
export const H1 = ({ children }) => (
  <h1 className=" text-4xl sm:text-3xl font-bold mt-12 mb-6 text-[#1E1E1E]">{children}</h1>
);

// disc lists
export const UL = ({ children }) => (
  <ul className="list-disc list-inside space-y-2 mb-6 ml-4 sm:text-lg text-base">
    {children}
  </ul>
);

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen text-[#1E1E1E]">
      <title>Flintmall - Terms of Service</title>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-12">
        <h1 className="sm:text-6xl text-5xl font-bold text-[#1E1E1E] sm:mb-10 mb-7">Terms Of Service</h1>
        <p className="sm:text-lg text-base font-medium mb-5">
          <b>Last Updated:</b> October, 2025
        </p>
        
        <P>
            Welcome to Flintmall. Please Read Carefully These Terms of Service ("Terms") constitute a 
            legally binding agreement between you and Flintmall. By creating an account, clicking 
            "I Agree," or simply browsing our marketplace, you acknowledge that you have read, understood, 
            and consented to be bound by these rules. If you do not agree to these Terms, you must 
            immediately discontinue use of the platform. These Terms govern your access to the Flintmall 
            website, mobile application, and all related services provided by us.
        </P>
        <H1>1. Acceptance of Terms</H1>
        <P>
            By accessing or using Flintmall, you agree to comply with and be bound by these Terms of Service.
             Flintmall is a platform that facilitates transactions between third-party sellers ("Sellers") 
             and buyers ("Buyers"). Flintmall itself is not the seller of most items listed on the site.
        </P>

        <H1>2. Eligibility and Account Responsibilities</H1>
        <UL>
            <li><b>Age:</b> You must be at least 18 years old to create an account.</li>
            <li>   
                <b>Account Accuracy:</b> You are responsible for providing accurate information 
                and maintaining the security of your login credentials.
            </li>
            <li>
                <b>Prohibited Content:</b> Users may not use Flintmall for fraudulent activities, 
                    money laundering, or the sale of prohibited items.
            </li>
        </UL>

        <H1>3. The Marketplace Mechanism</H1>
        <P>
            <b>Important Note:</b> Flintmall acts as a venue. We do not own, inspect, or guarantee the items 
            listed by third-party Sellers.
        </P>
        <UL>
            <li><b>No Warranty:</b> We do not guarantee the quality, safety, or legality of the items advertised.</li>
            <li>
                <b>Interaction:</b> Any contract for sale is directly between the Buyer and the Seller. 
                Flintmall is not a party to that contract.
            </li>
        </UL>

        <H1>4. Rules for Sellers</H1>
        <P>
            Sellers on Flintmall agree to:
        </P>
        <UL>
            <li>Provide honest and accurate descriptions and images of products.</li>
            <li>Ensure they have the legal right to sell the listed items.</li>
            <li>Maintain updated pricing and stock levels.</li>
            <li>Sellers shall not list illegal drugs, weapons, counterfeit goods, or regulated items 
                prohibited by local law.</li>
        </UL>

        <H1>5. Rules for Buyers</H1>
        <P>
            Buyers on Flintmall agree to:
        </P>
        <UL>
            <li>Perform due diligence before making a purchase.</li>
            <li>Pay for items purchased through the platform’s approved methods.</li>
            <li>Avoid "off-platform" transactions that circumvent Flintmall’s security measures.</li>
        </UL>

        <H1>6. Fees and Payment</H1>
        
        <UL>
            <li><b>No Warranty:</b> We do not guarantee the quality, safety, or legality of the items advertised.</li>
            <li>
                <b>Payments:</b> If Flintmall provides a payment gateway, funds are held according to our 
                Escrow Policy (if applicable) to ensure both parties fulfill their obligations.
            </li>
        </UL>

        <H1>7. Intellectual Property</H1>
        <P>
            All content on the platform, including logos, design, and software, is the property of Flintmall.
             Users grant Flintmall a non-exclusive license to use, host, and display the content 
             (images/descriptions) they upload for marketing purposes.
        </P>

        <H1>8. Termination of Service</H1>
        <P>
           We reserve the right to suspend or terminate any account that violates these terms, 
           engages in suspicious behavior, or harms the integrity of the Flintmall community.
        </P>

        <H1>9. Governing Law</H1>
        <P>
            These terms are governed by the laws of the jurisdiction in which Flintmall is registered. 
            Any disputes shall be resolved through binding arbitration or in local courts.
        </P>
        </main>
    </div>
  )
}

export default TermsOfService;
