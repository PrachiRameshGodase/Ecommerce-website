import React,{useContext} from 'react'
import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CartContext from '../../store/cart-context'
import classes from "./AvailableProducts.module.css"

import image1 from"../../assests5/Chocolate laddu.jpg"
import image2 from"../../assests5/Cake.jpg"
import image3 from"../../assests5/Dairy milk.jpg"
import image4 from"../../assests5/chocolate-covered-strawberries-683x1024.jpg"
import image5 from"../../assests5/Rasgulla.jpg"
import image6 from"../../assests5/Panna Cotta.jpg"
import image7 from"../../assests5/Pakeeza.jpg"
import image8 from"../../assests5/KajuKatli.jpg"
import axios from "axios";
const productsArr = [

    {   id:1,
        title: 'Chocolate-laddu',
        price: 399,
        imageUrl: image1,
    },
    {   id:2,
        title:'Cake',
        price: 500,
        imageUrl: image2,
    },
    {   id:3,
        title: 'Dairy milk',
        price: 1999,
        imageUrl: image3,
    },
    {   id:4,
        title: 'chocolate-covered-strawberries',
        price: 999,
        imageUrl: image4,
    }, {   id:1,
        title: 'Rasgulla',
        price: 499,
        imageUrl: image5,
    },
    {   id:2,
        title: 'Panna Cotta',
        price: 599,
        imageUrl: image6,
    },
    {   id:3,
        title: 'Pakeeza',
        price: 299,
        imageUrl: image7,
    },
    {   id:4,
        title: 'KajuKatli',
        price: 399,
        imageUrl: image8,
    }
    ]

const AvailableProducts5=()=>{
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
    // storing cart item do post request from API
    try {
      // ... existing code ...
      const response = await axios.post(
        `https://crudcrud.com/api/1f399784f37246e79554e3c1d0fc0ac0/${updatedEmail}`,
        item
      );
      console.log(response.data);
    } catch (error) {
      console.log('AxiosError:', error);
    }
   
  }

  const prevButtonHandler=()=>{
    navigate("/product/footWear")
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
      <span>5</span>
      <Button variant='info' onClick={nexButtonHandler}>Next</Button>
      </div>
    </>
  );
};
  
export default AvailableProducts5

