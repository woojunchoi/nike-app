import React, { Component } from "react";
import axios from "axios"
import { Redirect } from "react-router-dom";



class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            stripeLoading: true,
        };
        // onStripeUpdate must be bound or else clicking on button will produce error.
        this.onStripeUpdate = this.onStripeUpdate.bind(this);
        // binding loadStripe as a best practice, not doing so does not seem to cause error.
        this.loadStripe = this.loadStripe.bind(this);
    }

    loadStripe(onload) {
        if(! window.StripeCheckout) {
            const script = document.createElement('script');
            script.onload = function () {
                console.info("Stripe script loaded");
                onload();
            };
            script.src = 'https://checkout.stripe.com/checkout.js';
            document.head.appendChild(script);
        } else {
            onload();
        }
    }

    componentDidMount() {
        this.loadStripe(() => {
            this.stripeHandler = window.StripeCheckout.configure({
                key: 'pk_test_rzohQi2ZqlGOj6eh9kLw419t',
                image: 'nike.jpg',
                locale: 'auto',
                token: (token) => {
                    console.log(token)
                    this.setState({ loading: true });
                    // use fetch or some other AJAX library here if you dont want to use axios
                    axios.post('/gettoken', {
                        stripeToken: token.id,
                        price:parseInt(this.props.price+'00'),
                        stripeEmail: token.email
                    });
                }
            });

            this.setState({
                stripeLoading: false,
                // loading needs to be explicitly set false so component will render in 'loaded' state.
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        if(this.stripeHandler) {
            this.stripeHandler.close();
        }
    }

    onStripeUpdate(e) {
        this.stripeHandler.open({
            name: 'Pay with credit card',
            description: 'Nike Shoes',
            panelLabel: `Pay`,
            amount: parseInt(this.props.price+'00'),
            allowRememberMe: true
        });
        e.preventDefault();
    }

    render() {
        if(this.state.loading && !this.state.stripeLoading) {
           return <Redirect to='/success'/>

        }
        const { stripeLoading, loading } = this.state;
        return (
            <div>
                {(loading || stripeLoading)
                    ? <div>Check Out</div>
                    : <div onClick={this.onStripeUpdate}>Check Out</div>
                }
            </div>
        );
    }
}

export default Cards