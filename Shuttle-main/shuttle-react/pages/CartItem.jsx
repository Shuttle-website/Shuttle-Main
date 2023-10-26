import React, { useState, useEffect } from 'react';
import "./CartItem.css"

export default function CartItem(){
    return (
        <div className="cart--item">
            <img className="item--image" src="assets/f4.jpg"/>
            <div className="item--info">
                <div className="item--title">
                    <h4 className="item--name">Men Floral Casual T-Shirt</h4>
                    <div className="item--btns">
                        <button><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <span>Size: Large</span>
                <span>Color: White</span>
                <span className="item--price">Rs. 799</span>
            </div>
        </div>
    )
}