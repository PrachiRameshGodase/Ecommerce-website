import React from 'react';
import classes from "./Privacy.module.css"

function Privacy() {
  return (
    <div className="mt-10 mb-8 " style={{marginTop:"80px",marginLeft:"10%",marginRight:"10%"}}>
      <div className="mb-6">
        <h3 style={{marginLeft:"40%",marginBottom:"20px"}} className={classes.animateText}> Read Carefully!</h3>
        <p className="text-lg">
          The Privacy Policy describes how Ecom collects, uses, and discloses personal information when you use our e-commerce website. By accessing or using the Website, you consent to the collection, use, and disclosure of your personal information as described in this Policy.
        </p>
      </div>

      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-2">Information We Collect</h6>
        <p>
          - When you create an account, place an order, or contact us, we may collect personal information such as your name, email address, postal address, phone number, and payment information.
          - We may also collect personal information from third-party platforms if you choose to connect your account with such platforms.
        </p>
      </div>

      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-2">Use of Information</h6>
        <p>
          We may use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside">
          <li>To process and fulfill your orders, including shipping and delivery.</li>
          <li>To communicate with you about your orders, inquiries, or customer service requests.</li>
          <li>To personalize and improve your experience on the Website.</li>
          <li>To send you promotional emails, newsletters, or marketing communications (you may opt out at any time).</li>
          <li>To detect and prevent fraudulent or unauthorized activities.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-2">Data Security</h6>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-2">International Data Transfer</h6>
        <p>
          Your personal information may be transferred to and processed in countries other than your own. By using the Website, you consent to the transfer of your personal information to these countries, which may have data protection laws that differ from your country.
        </p>
      </div>

      <div>
        <h6 className="text-xl font-semibold mb-2">Contact Us</h6>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us.
        </p>
      </div>

      <div className="mt-6">
        <p>
          Please note that the above privacy policy template is provided for informational purposes only and should not be considered as legal advice. It is important to consult with a legal professional to ensure compliance with applicable privacy laws and regulations and to tailor the privacy policy to your specific business requirements and circumstances.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
