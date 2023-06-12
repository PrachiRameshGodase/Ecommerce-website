import React,{useContext} from 'react'
import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context'
import classes from "./AvailableProducts.module.css"
import axios from "axios";
const productsArr = [

    {   id:1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {   id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {   id:4,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {   id:5,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {   id:4,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {   id:5,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
    ]

const AvailableProducts=()=>{
  const CartCtx=useContext(CartContext)

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
        `https://crudcrud.com/api/f722c9455d6d443ca09a29194127f669/${updatedEmail}`,
        item
      );
      console.log(response.data);
    } catch (error) {
      console.log('AxiosError:', error);
    }
   
  }
  return (
    <>
   
     <Container className={classes.container}>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title} md={6} lg={6} xl={3} className="mt-2">
              <h5>{item.title}</h5>

              <Card className={classes.card}>
                <Link to={`/product/${encodeURIComponent(item.imageUrl)}`} className={classes.card}>
                <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
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
      
    </>
  );
};
  
export default AvailableProducts
