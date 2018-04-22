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
            <div className="col-12 col-md">
            <img className="nike-logo" src="nike.jpg" />
            </div>
            <div className="col-6 col-md">
              <h5>Navigation</h5>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
