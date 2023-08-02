import React,{useContext} from 'react'
import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CartContext from '../../store/cart-context'
import classes from "./AvailableProducts.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import image1 from"../../assests2/Leather Jacket.jpg"
import image2 from"../../assests2/wedding.jpg"
import image3 from"../../assests2/Women-Business-Suit.jpg"
import image4 from"../../assests2/off-shoulder-short-sleeve-plus-size.webp"
import image5 from"../../assests2/semiformal.webp"
import image6 from"../../assests2/Saree.webp"
import image7 from"../../assests2/Denium ankle length.webp"
import image8 from"../../assests2/western.jpg"

import axios from "axios";
const productsArr = [

    {   id:1,
        title: 'LEATHER JACKET',
        price: 1299,
        imageUrl: image1,
    },
    {   id:2,
        title: 'WEDDING FASHION',
        price: 40000,
        imageUrl: image2,
    },
    {   id:3,
        title: 'FORMAL-WEAR',
        price: 2999,
        imageUrl: image3,
    },
    {   id:4,
        title: 'OFF SHOULDER',
        price: 999,
        imageUrl: image4,
    }, {   id:1,
        title: 'SEMIFORMAL',
        price: 2499,
        imageUrl: image5,
    },
    {   id:2,
        title: 'SAREE',
        price: 2399,
        imageUrl: image6,
    },
    {   id:3,
        title: 'DENIUM ANKLE LENGTH',
        price: 1299,
        imageUrl: image7,
    },
    {   id:4,
        title: 'WESTERN',
        price: 2599,
        imageUrl: image8,
    }
    
    ]

const AvailableProducts2=()=>{
  const CartCtx=useContext(CartContext)

  const navigate = useNavigate();

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
    navigate("/product")
  }

  const nexButtonHandler=()=>{
    navigate("/product/kidsFashion")
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
      <span style={{marginTop:"4px"}}>2</span>
      <Button variant='info' onClick={nexButtonHandler}>Next</Button>
      </div>
      <ToastContainer theme="colored"/>
    </>
  );
};
  
export default AvailableProducts2

