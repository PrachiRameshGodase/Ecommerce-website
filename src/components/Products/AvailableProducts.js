import React from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'

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
  return (
    <>
      <Container>
        <Row>
        {productsArr.map((item) => (
            <Col key={item.title} xs={12} md={3}  lg={3}>
             
                <h3>{item.title}</h3>
                <div>
                    <img src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                  <span>${item.price}</span>
                  <Button variant="primary">Add To Cart</Button>
                </div>
             
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AvailableProducts
