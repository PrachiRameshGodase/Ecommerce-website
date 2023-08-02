import React from 'react';
import './About.css';
import image2 from "../../assests7/final.jpg"

const About = () => {
  return (

    <>
     <div className="about-container">
      <div className="about-image">
        <img src={image2} alt="Online Shopping" />
      </div>
      <div className="about-content">
        <h2 className='animateText'>Welcome to Online Shopping!</h2>
        <p>
          We believe in providing you with a delightful shopping experience and a wide range of high-quality products to choose from. Our online platform brings together the best in women's clothing, men's clothing, footwear, and sweet dishes, ensuring that you find something perfect for every occasion. We also have a dedicated kid's section to cater to our little customers' needs.
        </p>
        <p>
          Our journey began with a passion for offering unique and stylish products that reflect the latest trends while maintaining exceptional quality. We understand that clothing and accessories are more than just items; they represent individuality and personal style. That's why we curate our collection meticulously, ensuring that every piece meets our high standards and exceeds your expectations.
        </p>
        <p>
          We are proud to offer a diverse range of products that cater to different tastes and preferences. From trendy dresses and comfortable activewear to stylish suits and accessories for men, our clothing section is designed to keep you looking your best. Our footwear collection combines fashion and comfort, ensuring that you step out in style wherever you go. And for those moments of indulgence, our sweet dishes will satisfy your cravings with their irresistible flavors.
        </p>
        <p>
          Don't just take our word for it; here's what some of our happy customers have to say:
        </p>
        <blockquote className="customer-testimonial">
          "Customer Testimonial" - Rutu Patil
        </blockquote>
        <p>
          We would love for you to explore our product pages and discover the perfect items that suit your style and needs. Whether you're looking for an elegant dress, a comfortable pair of shoes, or a delicious treat, we have something for everyone.
        </p>
        <p>
          If you have any questions or need assistance, please don't hesitate to reach out to us. You can contact us, and we'll be more than happy to help.
        </p>
        <p>
          Thank you for choosing Online Shopping. Happy shopping!
        </p>
      </div>
    </div>
    

      
    </>
  );
};

export default About;
