//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import all actions
// import * as shopping_action from '../actions/data_action'
//css
// import css from './appcss.css'
//import child components
// import Nav from '../components/Nav/Nav'
// import Item from '../components/Item/Item'
// import CartModal from '../components/CartModal/CartModal'

//pass states as props
const mapStateToProps = store => ({

});

//pass action dispatcher as props
const mapDispatchToProps = (dispatch) => ({

});

class App extends Component {
  constructor(props) {
    super(props);
  }

  //fetch image datas from json file AFTER initial render(to handle async action)
  componentDidMount() {
   
  }

  render() {
    return(
        <div>hi</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);