import React, { Component } from 'react';

class Quote extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="w3-bar">
                <button onClick={()=>this.props.addToCart()} className="w3-bar-item w3-button w3-white w3-xlarge w3-right btn btn-dark">Accept</button>
                
                <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png" className="w3-bar-item w3-circle w3-hide-small" height="75px" width="75px" />
                <div class="w3-bar-item">
                    <span class="w3-large"> {this.props.shopName}</span><br />
                    <span>{this.props.price}</span>
                </div>
            </li>
        );
    }
}

export default Quote; 