//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import all actions
import * as shopping_action from '../actions/data_action'
//css
import css from './appcss.css'
//import child components
// import Nav from '../components/Nav/Nav'
import Item from '../components/Item/Item'
// import CartModal from '../components/CartModal/CartModal'

//pass states as props
const mapStateToProps = store => ({
    datas: store.data_reducer.data,
    addedItems: store.data_reducer.addedItems
});

//pass action dispatcher as props
const mapDispatchToProps = (dispatch) => ({
    fetchData : () => dispatch(shopping_action.fetchData()),
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  //fetch image datas from json file AFTER initial render(to handle async action)
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const item = this.props.datas.map((data,index) => {
        return <Item 
         key={index}
         index={index}
         itemName={data.name}
         itemPic={data.filename}
         itemPrice={data.price}
         addToCart={this.props.addToCart}
         currentItem={this.props.currentItem}
         changeBorder={this.props.changeBorder}/>
      })
    return(
        <div className='Wrapper'>
            <nav className="site-header sticky-top py-1">
                <div className='container d-flex flex-column flex-md-row justify-content-between'>
                    <img className='nike-logo' src='nike.jpg'/>
                    <a className="py-2 d-none d-md-inline-block" href='#'> Product</a> 
                    <a className="py-2 d-none d-md-inline-block" href='#'> Cart</a> 
                    <a className="py-2 d-none d-md-inline-block" href='#'> Coupon</a> 
                    <a className="py-2 d-none d-md-inline-block" href='#'> Login</a> 
                </div>
            </nav>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            </div>
            <div className='container'>
                <div className='row'>
                    {item}
                </div>
            </div>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);