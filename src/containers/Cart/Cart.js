import React, { Component } from 'react';
import css from './Cart.css'; 
import { connect } from 'react-redux';
import {Link} from'react-router-dom'



const mapStateToProps = store => ({
  datas: store.data_reducer.data,
  addedItems: store.data_reducer.addedItems
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem : (e) => dispatch(shopping_action.deleteItem(e.target.id))
});

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    //change class name based on the state
    console.log(this.props.addedItems)
    let cartContent =[];
    let price = 0;
    //default: in case cart is empty
    if(this.props.addedItems.length === 0) {
        cartContent.push(    
            <div key='0' className='cart-text'> 
                <p className='nothing'>Nothing in your cart</p>
                <p className='nothing'>Start shopping</p>
            </div>
        )
    }
    //in case cart is not empty
    else {
        for(let i=0; i<this.props.addedItems.length; i++) {
            price += this.props.addedItems[i].price
            cartContent.push(
                    <div key={i} className ='item-list'>
                        <img className='item-pic' src={this.props.addedItems[i].filename} />
                        <div className ='item-desc'>
                            <div className='nameanddelete'>
                                <p>{this.props.addedItems[i].name}</p>
                                <i id={i} onClick={(e) => this.props.deleteItem(e)} className="fa fa-close"></i>
                            </div>
                            <p>${this.props.addedItems[i].price}</p>
                        </div>
                    </div>
                    )
        }
        
    }
    return(
      //skeleton structure for cart
      <div>
          <nav className="site-header sticky-top py-1">
            <div className='container d-flex flex-column flex-md-row justify-content-around'>
                <div className='logowrapper'><img className='nike-logo' src='nike.jpg'/></div>
                <Link to='/'><div className="py-2 d-none d-md-inline-block" > Product</div></Link>
                <Link to='/cart'><div className="py-2 d-none d-md-inline-block" > Cart</div></Link>
                <a className="py-2 d-none d-md-inline-block" href='#'> Coupon</a> 
                <a className="py-2 d-none d-md-inline-block" href='#'> Login</a> 
            </div>
            </nav>
            <div className='cart-page'>
              <div className ='cart-content'>
                <div key='cart' className ='cart-text'>
                <h2 className='yourcart'>Your Cart</h2>
                <br/>
                {cartContent}
                <div className ='line'></div>
                <div className ='total'>
                    <p>Total</p>
                    <p>${price}</p>
                </div>
            <div className='button-tong'>
            <div className='backbutton'>Shop</div>
            <div className='backbutton'>Check Out</div>
            </div>
            </div>  
        </div>
      </div>
    </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);