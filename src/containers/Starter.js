//dependencies
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import App from './App/App'
import Cart from './Cart/Cart'

class Starter extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
        <div className='container'>
        <Route exact path ='/' render={(props) => <App {...props}/> }/>
        <Route exact path ='/cart' render={(props) => <Cart {...props}/> }/>
      </div>
    )
  }
}

export default Starter