
import React, { Component } from 'react';


class Success extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <section className="py-5">
                    <h1 className="display-3">
                        Thank You
                    </h1>
                    <p className="lead">Your shoes should be shipped within 1 business day</p>
                    <a href="/" className="btn btn-dark btn-lg">Go Back to Shopping</a>
                </section>
            </div>
        );
    }
};


export default Success