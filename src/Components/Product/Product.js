import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

function Product(props) {
  const [title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Price, setPrice] = useState(0);

  const getProducts = () => {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        setTitle = res.name;
        setImage = res.photos[0];
      });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        alt=""
        className="product_image"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
