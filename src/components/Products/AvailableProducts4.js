
import React,{useContext} from 'react'
import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CartContext from '../../store/cart-context'
import classes from "./AvailableProducts.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import image1 from"../../assests4/Kolhapuri brand.jpg"
import image2 from"../../assests4/formal.jpg"
import image3 from"../../assests4/pencil hill.webp"
import image4 from"../../assests4/women formal.webp"
import image5 from"../../assests4/mens formal.jpg"
import image6 from"../../assests4/Nike shoes.webp"
import image7 from"../../assests4/best footwear in mansoon.jpg"
import image8 from"../../assests4/Flip floop.webp"
import axios from "axios";
const productsArr = [
    {   id:1,
        title: 'KOLHAPURI BRAND',
        price: 2299,
        imageUrl: image1,
    },
    {   id:2,
        title:'WEDDING SPECIAL',
        price: 3000,
        imageUrl: image2,
    },
    {   id:3,
        title: 'PENCIL-HILLS',
        price: 1999,
        imageUrl: image3,
    },
    {   id:4,
        title: 'WOMEN FORMAL',
        price: 999,
        imageUrl: image4,
    }, {   id:1,
        title: 'MENS FORMAL',
        price: 1499,
        imageUrl: image5,
    },
    {   id:2,
        title: 'NIKE SHOES',
        price: 3999,
        imageUrl: image6,
    },
    {   id:3,
        title: 'BEST-FOOTWEAR-IN-MANSOON',
        price: 299,
        imageUrl: image7,
    },
    {   id:4,
        title: 'FLIP FLOOP',
        price: 599,
        imageUrl: image8,
    }
]

const AvailableProducts4=()=>{
  const CartCtx=useContext(CartContext)

  const navigate=useNavigate();

  //if we login then the email is in localStorage for doing the post request the getting that email id neccessary
  const enteredEmail=localStorage.getItem('email');
  const updatedEmail = enteredEmail ? enteredEmail.replace('@', '').replace('.', '') : '';


  
  async function addToCartClickHandler(item){
    CartCtx.addItem({
      // id:item.id,
      name: item.title,
      price: Number(item.price),
      image : item.imageUrl,
      amount: item.amount,
    });
    toast.success("Item is added successfully!")
    // storing cart item do post request from API
    try {
      // ... existing code ...
      const response = await axios.post(
        `https://crudcrud.com/api/4910f3b0671f47b99c71989ddf0486c0/${updatedEmail}`,
        item
      );
      console.log(response.data);
    } catch (error) {
      console.log('AxiosError:', error);
    }
   
  }

  const prevButtonHandler=()=>{
    navigate("/product/kidsFashion")
  }

  const nexButtonHandler=()=>{
    navigate("/product/sweet")
  }
  return (
    <>
   
     <Container className={classes.container}>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title} md={6} lg={6} xl={3} className="mt-2">
              <h5>{item.title}</h5>

              <Card style={{width:"15rem",height:"15rem"}}>
                <Link to={`/product/${encodeURIComponent(item.imageUrl)}`} >
                <Card.Img variant="top" src={item.imageUrl} alt={item.title} style={{width:"15rem",height:"15rem"}}/>
              </Link>
                <Card.Body></Card.Body>
              </Card>
              
             <div className={classes.cardBody}><div className={classes.price}>₹{item.price}</div>
                <Button variant="success" onClick={() => addToCartClickHandler(item)} className={classes.button}>ADD TO CART</Button>
              </div>

            </Col>
          ))}
        </Row>
      </Container>

      <div className={classes.changer}>
      <Button variant='info' onClick={prevButtonHandler}>Prev</Button>
      <span style={{marginTop:"4px"}}>4</span>
      <Button variant='info' onClick={nexButtonHandler}>Next</Button>
      </div>
      <ToastContainer theme="colored"/>
    </>
  );
};
  
export default AvailableProducts4




