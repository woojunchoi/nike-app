import React, { Component } from "react";
import css from "./Footer.css"
import { Link } from "react-router-dom";


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <footer className="container">
          <div className="row">
            <Link to='/'><div className="col-6 col-md">
              Product
            </div></Link>
            <Link to='/cart'><div className="col-6 col-md">
              Cart
            </div></Link>
            <Link to='/coupon'><div className="col-6 col-md">
              Coupon
            </div></Link>
            <Link to='/'><div className="col-6 col-md">
              Login
            </div></Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
