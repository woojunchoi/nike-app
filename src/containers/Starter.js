//dependencies
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import App from './App/App'

class Starter extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
        <div className='container'>
        <Route exact path ='/' render={(props) => <App {...props}/> }/>
      </div>
    )
  }
}

export default Starter