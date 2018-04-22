import React, { Component } from "react";
import css from "./Footer.css"

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <footer className="container">
          <div className="row">
            <div className="col-6 col-md">
              Product
            </div>
            <div className="col-6 col-md">
              Cart
            </div>
            <div className="col-6 col-md">
              Coupon
            </div>
            <div className="col-6 col-md">
              Login
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
