import React,{useContext} from 'react'
import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context'
import classes from "./AvailableProducts.module.css"
const productsArr = [

    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

const AvailableProducts=()=>{
  const CartCtx=useContext(CartContext)
  const btnClickHandler=(item)=>{
    CartCtx.addItem({
      id: item.id, // pass the item's id instead of generating a new one
      name: item.title,
      price: item.price,
      image : item.imageUrl,
      amount: Number(item.amount),
    });
  }
  return (
    <>
   <h1 className={classes.Label}>The Generics</h1>
     <Container>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.id} md={6} lg={6} xl={3} className="mb-4">
              <Card className="shadow-lg">
                
              <Link to={`/product/${encodeURIComponent(item.imageUrl)}`}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button variant="success" onClick={() => btnClickHandler(item)}>
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <h1 className={classes.bottom}>The Generics</h1>
    </>
  );
};
  
export default AvailableProducts
