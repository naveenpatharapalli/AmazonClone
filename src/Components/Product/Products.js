import React, { Component } from "react";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import "./Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { round } from "mathjs";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { productPage } from "../ProductPage/ProductPage";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: true,
      data: null,
    };
  }
  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      this.setState({
        isloaded: false,
        data: response.data,
      });
    });
  }
  render() {
    const { isloaded, data } = this.state;
    console.log("loaded" + isloaded);
    console.log(data);
    ReactDOM.render(
      <Router>
        <Switch>
          <Route exact path="/:id" component={productPage} />
        </Switch>
      </Router>
    );
    return (
      <div className="products">
        {isloaded ? (
          <h1>Loading.....</h1>
        ) : (
          data.map((product) => (
            <p key={product.id}>
              <div className="product">
                <div className="product_info">
                  <p>{product.title}</p>
                  <p className="product_price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                  </p>
                  <div className="product_rating">
                    {Array(round(product.rating.rate))
                      .fill()
                      .map((_, i) => (
                        <StarIcon />
                      ))}
                  </div>
                </div>
                <Link to="/:id">
                  <img src={product.image} alt="" className="product_image" />
                </Link>
                <button>Add to Basket</button>
              </div>
            </p>
          ))
        )}
      </div>
    );
  }
}

export default Products;
