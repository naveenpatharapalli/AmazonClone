import React from "react";
import Products from "../Product/Products";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61ELl8boxGL._SX1500_.jpg"
          alt=""
          className="home_image"
        />

        <div className="home_row">
          {/*product*/}
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Home;
