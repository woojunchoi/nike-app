import React, { Component } from 'react';
import css from './item.css';


class Item extends Component {
  constructor(props) {
    super(props);
}

  render() {
    // let boxClass = ['item-inside'];
    // let buttonClass = ['button']
    // if(this.props.currentItem == this.props.index) {
    //   boxClass.push('blue');
    //   buttonClass.push('blue')
    // }
    return(
      <div className='col-md-4 eachitem' id={this.props.index}>
        <div className ='image-container'>
          <img className='item-image'src={this.props.itemPic} />
        </div>
        <div className='content-container'>
          <p className='content-name'>{this.props.itemName}</p>
          <p className='content-price'>{`$${this.props.itemPrice}`}</p>
        </div>
        <div className ='button-container'>
          <div id={this.props.index} onClick={(e) => this.props.addToCart(e)}>Add to cart</div>
        </div>
      </div>
    )
  }
}

export default Item