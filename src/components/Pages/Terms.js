import React from 'react'
import classes from "./Privacy.module.css"

function Terms() {
  return (
    <div style={{marginTop:"40px"}}>
       <div className="container mx-auto py-8 ">
      <h1 className={`text-3xl font-bold mb-4 ${classes.animateText} ml-[34%]`}>Terms and Conditions</h1>
      <p className="mb-4">
        Please read these terms and conditions carefully before using our website ("Site") and engaging in any transactions. These terms and conditions govern your access to and use of the Site, as well as the purchase and use of any products or services provided . By using our Site, you agree to be bound by these terms and conditions.
      </p>

      <h2 className="text-2xl font-bold mb-2">1. Website Use</h2>
      <p className="mb-4">
        You may use our Site for lawful purposes only. You are prohibited from engaging in any activity that may disrupt or interfere with the proper functioning of the Site or infringe upon the rights of others. You must not attempt to gain unauthorized access to any part of the Site, including its databases, servers, or other connected systems.
      </p>

      <h2 className="text-2xl font-bold mb-2">2. Product Information and Pricing</h2>
      <p className="mb-4">
        We strive to provide accurate and up-to-date product information on our Site. However, we do not warrant that the product descriptions, images, pricing, or other content on the Site are error-free, complete, or current. We reserve the right to modify or update any information on the Site without prior notice. In the event of a pricing error or discrepancy, we reserve the right to cancel any orders placed for products listed at an incorrect price.
      </p>

      <h2 className="text-2xl font-bold mb-2">3. Ordering and Payment</h2>
      <p className="mb-2">
        By placing an order through our Site, you are making an offer to purchase products or services subject to these terms and conditions. All orders are subject to acceptance and availability. We reserve the right to reject or cancel any orders for any reason, including but not limited to the unavailability of products, errors in pricing or product information, or suspicion of fraudulent activity.
      </p>
      <p className="mb-4">
        Payment for the products or services ordered through our Site must be made using the available payment methods specified on the Site. You agree to provide accurate and complete payment information and authorize us to charge the specified amount for your order.
      </p>

      <h2 className="text-2xl font-bold mb-2">4. Shipping and Delivery</h2>
      <p className="mb-4">
        We will make every effort to deliver your products within the estimated delivery times. However, we are not responsible for any delays or issues arising from third-party shipping carriers. Any shipping and delivery dates provided on our Site are approximate and subject to change.
      </p>

      <h2 className="text-2xl font-bold mb-2">5. Returns and Refunds</h2>
      <p className="mb-4">
        We want you to be completely satisfied with your purchase. If you are not satisfied with a product for any reason, you may return it within [number of days] from the date of delivery for a full refund or exchange. Please refer to our Returns Policy for detailed information on the return process and eligibility criteria.
      </p>

      <h2 className="text-2xl font-bold mb-2">6. Privacy Policy</h2>
      <p className="mb-4">
        Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information when you use our Site and engage in transactions.
      </p>
    </div>
    </div>
  )
}

export default Terms
