import React,{useContext} from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
import CartContext from '../../store/cart-context'
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
      id: item.title, // pass the item's id instead of generating a new one
      name: item.title,
      price: item.price,
      image : item.imageUrl,
      amount: Number(item.amount),
    });
  }
  return (
    <>
      <Container>
        <Row>
        {productsArr.map((item) => (
            <Col id={item.title} key={item.title} xs={12}  lg={3} xl={3}>
                  
                <h3>{item.title}</h3>
                <div>
                    <img src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                  <span>${item.price} </span>
                  <Button variant="primary" onClick={()=>btnClickHandler(item)}>Add To Cart</Button>
                </div>
             
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AvailableProducts
