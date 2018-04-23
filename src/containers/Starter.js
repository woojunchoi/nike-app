//dependencies
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import App from './App/App'
import Cart from './Cart/Cart'
import Coupon from '../components/Coupon/Coupon'
import Success from '../components/Success/Success'
import {Elements} from 'react-stripe-elements';


class Starter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='container'>
                <Route exact path='/' render={(props) => <App {...props} />} />
                <Route exact path='/cart' render={(props) => <Cart {...props} />} />
                <Route exact path='/coupon' render={(props) => <Coupon {...props} />} />
                <Route exact path='/success' render={(props) => <Success {...props} />} />
            </div>
        )
    }
}

export default Starter