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
            <Link to='/' className="col-6 col-md"><div>
              Product
            </div></Link>
            <Link to='/cart' className="col-6 col-md"><div>
              Cart
            </div></Link>
            <Link to='/coupon' className="col-6 col-md"><div>
              Coupon
            </div></Link>
            <Link to='/' className="col-6 col-md"><div>
              Login
            </div></Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
