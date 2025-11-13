import React from 'react';
import Navbar from '../../components/layout/Navbar';

// H1 for main section titles
const H1 = ({ children }) => (
  <h1 className="text-4xl font-bold mt-12 mb-6 text-[#1E1E1E]">{children}</h1>
);

// H2 for sub-section titles 
const H2 = ({ children }) => (
  <h2 className="text-2xl font-bold mt-8 mb-4 ">{children}</h2>
);

// P for all paragraphs
const P = ({ children }) => (
  <p className="text-lg font-bold mb-6 leading-relaxed">{children}</p>
);

// UL for bullet-point lists
const UL = ({ children }) => (
  <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-lg">
    {children}
  </ul>
);

// OL for numbered lists
const OL = ({ children }) => (
  <ol className="list-decimal list-inside space-y-2 mb-6 ml-4 text-lg ">
    {children}
  </ol>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen text-[#1E1E1E]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <h1 className="text-6xl font-bold text-[#1E1E1E] mb-10">Privacy Policy</h1>
        <p className="text-lg font-medium mb-5">
          Last Updated: October, 2025
        </p>

        <P>
          Thank you for choosing to use Flintmall – our Multi-Vendor eCommerce
          Platform (“we”, “our”, or “us”). This Privacy Policy explains how we
          collect, use, disclose, and protect your information when you use our
          website, mobile applications, and related services (collectively, the
          “Platform”).
        </P>
        <P>
          By using our Platform, you agree to the terms described in this policy.
        </P>

        <H1>1. Information We Collect</H1>
        <P>
          We collect different types of information to provide and improve our
          services to you:
        </P>

        <H2>A. Personal Information</H2>
        <P>
          When you create an account, post a product, or make a purchase, we may
          collect:
        </P>
        <UL>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business or shop name</li>
          <li>Profile photo</li>
          <li>Location or address</li>
          <li>Payment and billing details (where applicable)</li>
        </UL>

        <H2>B. Automatically Collected Information</H2>
        <P>When you use our app or website, we automatically collect:</P>
        <UL>
          <li>Device information (e.g., model, OS version, device ID)</li>
          <li>IP address and approximate location</li>
          <li>App usage data and interaction logs</li>
          <li>Crash reports, diagnostics, and performance data</li>
        </UL>

        <H2>C. Optional Information</H2>
        <P>You may also choose to provide:</P>
        <UL>
          <li>Product photos and descriptions</li>
          <li>Reviews and feedback</li>
          <li>Chat messages with vendors or customers</li>
        </UL>

        <H1>2. How We Use Your Information</H1>
        <P>We use your information to:</P>
        <OL>
          <li>Create and manage your user or vendor account.</li>
          <li>Enable you to list, browse, buy, or sell products.</li>
          <li>Facilitate payments and process transactions securely.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Send notifications about orders, listings, and promotions.</li>
          <li>Improve the performance, security, and user experience of our Platform.</li>
          <li>Comply with legal obligations and prevent fraudulent activities.</li>
        </OL>

        <H1>3. Sharing of Information</H1>
        <P>
          We <strong>do not sell</strong> your personal data.
        </P>
        <P>
          However, we may share information in the following cases:
        </P>
        <UL>
          <li>
            <strong>With vendors or buyers:</strong> When you interact on the Platform (e.g.,
            chat, orders, inquiries).
          </li>
          <li>
            <strong>With service providers:</strong> For hosting, analytics, payment
            processing, and communication.
          </li>
          <li>
            <strong>For legal reasons:</strong> To comply with laws, court orders, or protect
            our legal rights.
          </li>
          <li>
            <strong>During business transfers:</strong> In case of a merger, acquisition, or
            restructuring.
          </li>
        </UL>

        <H1>4. Data Security</H1>
        <P>
          We use administrative, technical, and physical safeguards to protect
          your data from unauthorized access, disclosure, alteration, or
          destruction.
        </P>
        <P>
          However, please note that no method of transmission over the Internet
          or electronic storage is completely secure.
        </P>

        <H1>5. Data Retention</H1>
        <P>We retain your information only for as long as necessary to:</P>
        <UL>
          <li>Provide our services,</li>
          <li>Comply with legal obligations, and</li>
          <li>Resolve disputes.</li>
        </UL>
        <P>
          When data is no longer needed, it will be securely deleted or
          anonymized.
        </P>

        <H1>6. Your Rights and Choices</H1>
        <P>Depending on your location, you may have rights to:</P>
        <UL>
          <li>Access and update your personal information</li>
          <li>Request deletion of your account or data</li>
          <li>Withdraw consent for specific data uses</li>
          <li>Opt out of marketing communications</li>
        </UL>
        <P>
          You can manage these options in your account settings or by
          contacting us.
        </P>

        <H1>7. Children's Privacy</H1>
        <P>
          Our services are intended for users aged <strong>18 years and above</strong>.
        </P>
        <P>We do not knowingly collect information from children.</P>
        <P>
          If we discover that a child has provided personal data, we will
          delete it promptly.
        </P>

        <H1>8. Third-Party Services</H1>
        <P>
          Our Platform may contain links or integrations with third-party
          services (e.g., payment gateways, social media logins).
        </P>
        <P>We are not responsible for the privacy practices of these third parties.</P>
        <P>
          Please review their privacy policies before sharing personal data with
          them.
        </P>

        <H1>9. International Data Transfers</H1>
        <P>
          Your information may be processed and stored in countries other than
          your own.
        </P>
        <P>
          By using our Platform, you consent to such transfers in accordance
          with this Privacy Policy.
        </P>

        <H1>10. Updates to This Policy</H1>
        <P>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or legal requirements.
        </P>
        <P>
          Updates will be posted here with a revised “Last Updated” date.
        </P>
        <P>We encourage you to review this page periodically.</P>

        <H1>11. Contact Us</H1>
        <P>
          If you have any questions, complaints, or requests regarding this
          Privacy Policy, please contact us at:
        </P>

        <P>
          [Your Company / Developer Name]
          <br />
          Email: [your@email.com]
          <br />
          Phone: [your phone number]
          <br />
          Address: [optional business address]
        </P>
        
      </main>
    </div>
  );
};

export default PrivacyPolicy;