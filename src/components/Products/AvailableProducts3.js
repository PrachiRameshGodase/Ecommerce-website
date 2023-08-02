import React, { useContext } from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "../../store/cart-context";
import classes from "./AvailableProducts.module.css";
import image1 from "../../assests3/Baby-Couture.jpg";
import image2 from "../../assests3/boy-girl.jpg";
import image3 from "../../assests3/Kids Royality.jpg";
import image4 from "../../assests3/New fasion.jpg";
import image5 from "../../assests3/Polka Dot cake.jpg";
import image6 from "../../assests3/Tshirt.webp";
import image7 from "../../assests3/Toy Ballon.jpeg";
import image8 from "../../assests3/baby formal.webp";

import axios from "axios";
const productsArr = [
  { id: 1, title: "BABY-COUTURE", price: 1299, imageUrl: image1 },
  { id: 2, title: "T-SHIRT", price: 400, imageUrl: image2 },
  { id: 3, title: "KIDS ROYALITY", price: 1999, imageUrl: image3 },
  { id: 4, title: "NEW FASION", price: 999, imageUrl: image4 },
  { id: 1, title: "POLKA DOT CAKE", price: 2499, imageUrl: image5 },
  { id: 2, title: "TSHIRT", price: 399, imageUrl: image6 },
  { id: 3, title: "TOY BALLON", price: 1299, imageUrl: image7 },
  { id: 4, title: "FORMAL", price: 2599, imageUrl: image8 },
];

const AvailableProducts3 = () => {
  const CartCtx = useContext(CartContext);

  const navigate = useNavigate();

  //if we login then the email is in localStorage for doing the post request the getting that email id neccessary
  const enteredEmail = localStorage.getItem("email");
  const updatedEmail = enteredEmail
    ? enteredEmail.replace("@", "").replace(".", "")
    : "";

  async function addToCartClickHandler(item) {
    CartCtx.addItem({
      // id:item.id,
      name: item.title,
      price: Number(item.price),
      image: item.imageUrl,
      amount: item.amount,
    });
    toast.success("Item is added successfully!");
    // storing cart item do post request from API
    try {
      // ... existing code ...
      const response = await axios.post(
        `https://crudcrud.com/api/4910f3b0671f47b99c71989ddf0486c0/${updatedEmail}`,
        item
      );
      console.log(response.data);
    } catch (error) {
      console.log("AxiosError:", error);
    }
  }

  const prevButtonHandler = () => {
    navigate("/product/womensFasion");
  };

  const nexButtonHandler = () => {
    navigate("/product/footWear");
  };
  return (
    <>
      <Container className={classes.container}>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title} md={6} lg={6} xl={3} className="mt-2">
              <h5>{item.title}</h5>

              <Card style={{ width: "15rem", height: "15rem" }}>
                <Link to={`/product/${encodeURIComponent(item.imageUrl)}`}>
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ width: "15rem", height: "15rem" }}
                  />
                </Link>
                <Card.Body></Card.Body>
              </Card>

              <div className={classes.cardBody}>
                <div className={classes.price}>₹{item.price}</div>
                <Button
                  variant="success"
                  onClick={() => addToCartClickHandler(item)}
                  className={classes.button}
                >
                  ADD TO CART
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className={classes.changer}>
        <Button variant="info" onClick={prevButtonHandler}>
          Prev
        </Button>
        <span style={{ marginTop: "4px" }}>3</span>
        <Button variant="info" onClick={nexButtonHandler}>
          Next
        </Button>
      </div>
      <ToastContainer theme="colored" />
    </>
  );
};

export default AvailableProducts3;
