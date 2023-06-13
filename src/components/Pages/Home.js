import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assests6/9-98563_ecommerce-website-development-ecommerce-website-banner-design-hd.png"
import image2 from "../../assests6/images3.jpg"
// import image3 from "../../assests6/Mobile-Banner_Loved-gifting_Banner-700x910.webp"

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item style={{width:"900px"}}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption> */}
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* </Carousel.Caption>
      </Carousel.Item> */}
      
    </Carousel>
  );
}

export default Home;