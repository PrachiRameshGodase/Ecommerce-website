
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Alert } from "react-bootstrap";



export default function Home() {
 
return (
  <>
    <Carousel fade className="">
    <Carousel.Item>
      <img style={{ height: '750px' }}
        className="d-block w-100"
        src='https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc29yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt="Third slide"
      />

      <Carousel.Caption style={{color:"black"}}>
        <h3>Accessory Sale</h3>
        <p>
        Don't miss out on our limited time offer: 20% off all accessories! From statement earrings to trendy handbags, we have everything you need to complete your look. Shop now and save big!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    
      <img style={{ height: '750px' }}
        className="d-block w-100 "
        src="https://images.unsplash.com/photo-1500771471050-fb3ee40b66c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzJTIwY2xvdGhzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="First slide"
      />
      <Carousel.Caption style={{color:"black"}}>
        <h3>Summer Ready</h3>
        <p>Get ready for summer with our new collection of swimsuits and beachwear! From colorful bikinis to stylish one-piece swimsuits, we have everything you need to hit the beach in style</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: '750px' }}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1514417034809-c7b296354f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="Second slide"
      />

      <Carousel.Caption style={{color:"black"}}>
        <h3>Active Lifestyle</h3>
        <p>Upgrade your wardrobe with our stylish and comfortable activewear. Whether you're hitting the gym or going for a run, our collection of leggings, tops, and sports bras will keep you looking and feeling your best</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>

  </>
  
  );
}
