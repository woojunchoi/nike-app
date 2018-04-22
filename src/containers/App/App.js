//dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import all actions
import * as shopping_action from "../../actions/data_action";
//css
import css from "./appcss.css";
//import child components
// import Nav from '../components/Nav/Nav'
import Item from "../../components/Item/Item";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer"
// import CartModal from '../components/CartModal/CartModal'

//pass states as props
const mapStateToProps = store => ({
  datas: store.data_reducer.data,
  addedItems: store.data_reducer.addedItems,
  showShoes: store.data_reducer.showShoes
});

//pass action dispatcher as props
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(shopping_action.fetchData()),
  addToCart: e => dispatch(shopping_action.addCart(e.target.id)),
  searchShoes: e => dispatch(shopping_action.searchShoes(e.target.value))
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  //fetch image datas from json file AFTER initial render(to handle async action)
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let item;
    if (this.props.showShoes.length !== 0) {
      item = this.props.showShoes.map((data, index) => {
        return (
          <Item
            key={index}
            index={index}
            itemName={data.name}
            itemPic={data.filename}
            itemPrice={data.price}
            addToCart={this.props.addToCart}
          />
        );
      });
    } else {
      item = this.props.datas.map((data, index) => {
        return (
          <Item
            key={index}
            index={index}
            itemName={data.name}
            itemPic={data.filename}
            itemPrice={data.price}
            addToCart={this.props.addToCart}
          />
        );
      });
    }

    return (
      <div className="Wrapper">
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-around">
            <div className="logowrapper">
              <img className="nike-logo" src="nike.jpg" />
            </div>
            <Link to="/">
              <div className="py-2 d-none d-md-inline-block"> Product</div>
            </Link>
            <Link to="/coupon">
              <div className="py-2 d-none d-md-inline-block"> Coupon</div>
            </Link>
            <Link to="/cart">
              <div className="py-2 d-none d-md-inline-block"> Cart</div>
            </Link>
            <Link to="/">
              <div className="py-2 d-none d-md-inline-block"> Login</div>
            </Link>
          </div>
        </nav>
        <Main searchShoes={this.props.searchShoes} />
        <div className="container">
          <div className="row">{item}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
