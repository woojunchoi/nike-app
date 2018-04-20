import React, { Component } from 'react';
import css from './Main.css';



class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="position-relative overflow-hidden p-3 text-center">
                    <img className='banner' src='front-banner.jpg' />
                    <div className='search'>
                        <div className="input-group mb-6">
                            <input type="text" placeholder='Search shoes' onKeyUp={this.props.searchShoes} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Main