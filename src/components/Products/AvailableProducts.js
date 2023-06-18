import React,{useContext} from 'react'
import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

import image1 from "../../assests1/Denim Jacket.jpg"
import image2 from "../../assests1/Traditional.jpg"
import image3 from "../../assests1/Tshirt5.webp"
import image4 from "../../assests1/formal.jpg"
import image5 from "../../assests1/track pant & Jogger.webp"
import image6 from "../../assests1/men-s-winter-jackets-500x500.webp"
import image7 from "../../assests1/Rio life style party wear.webp"
import image8 from "../../assests1/Long sleeve striped shirt.jpg"

import CartContext from '../../store/cart-context'
import classes from "./AvailableProducts.module.css"

import axios from "axios";
const productsArr = [

    {   id:1,
        title: 'Denim Jacket',
        price: 999,
        imageUrl: image1,
    },
    {   id:2,
        title: 'Traditional Kurti',
        price: 2999,
        imageUrl: image2,
    },
    {   id:3,
        title: 'Tshirts',
        price: 470,
        imageUrl: image3,
    },
    {   id:4,
        title: 'Formal Fashion',
        price: 1999,
        imageUrl: image4,
    },
    {   id:5,
      title: 'Track pant & Jogger',
      price: 999,
      imageUrl: image5,
  },
  {   id:6,
      title: 'winter-jacket',
      price: 1199,
      imageUrl: image6,
  }
  ,
    {   id:7,
      title: 'Rio party wear',
      price: 1499,
      imageUrl: image7,
  },
  {   id:8,
      title: 'Long sleeve striped shirt',
      price: 599,
      imageUrl: image8,
  }
    ]

const AvailableProducts=()=>{
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
        `https://crudcrud.com/api/1f399784f37246e79554e3c1d0fc0ac0/${updatedEmail}`,
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
    navigate("/product/womensFasion")
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
      <span>1</span>
      <Button variant='info' onClick={nexButtonHandler}>Next</Button>
      </div>
      <ToastContainer theme="colored"/>
    </>
  );
};
  
export default AvailableProducts
