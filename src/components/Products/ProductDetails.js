import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { imageUrl } = useParams();

  return (
    <>
      <h1 className={classes.Label}>The Generics</h1>
      <div className={classes.container}>
        <h1>Product Details</h1>
        <img
          src={decodeURIComponent(imageUrl)}
          alt="Product"
          style={{ display: "block", margin: "60px auto" }}
        />
      </div>

      <h1 className={classes.bottom}>The Generics</h1>
    </>
  );
};

export default ProductDetails;
