import React, { useState, useEffect } from "react";
import "./CartItem.css";

export default function CartItem() {
	return (
		<div className="cart--item">
			<div className="main--info">
				<img className="item--image" src="assets/f4.jpg" />
				<div className="item--desc">
					<div className="item--title">
						<h6 className="item--name">
							Men Floral Casual T-Shirt
						</h6>
					</div>
					<span>Size: Large</span>
					<span>Color: White</span>
				</div>
			</div>
			<div className="item--info">
				<span className="item--price">Rs. 799</span>
			</div>
			<div className="item--quant">
				<button className="quantity--dec">-</button>
				<h4>5</h4>
				<button className="quantity--inc">+</button>
			</div>
			<div className="item--subtotal">
				<span>Rs. 799</span>
			</div>
		</div>
	);
}
