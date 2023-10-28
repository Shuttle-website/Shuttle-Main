import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CartItem from "./CartItem";
import "./Order.css";

function Order() {
	return (
        <div className="order-container">
			<div className="order--list">
				<div className="order-status">
					<strong>
						Status: <span className="orange">Processing</span>
					</strong>
				</div>
				<div className="order-payment">
					<strong>
						Payment: <span className="green">Paid</span>
					</strong>
				</div>
				<div className="order-shipping">
					<strong>Shipping:</strong> $200.00
				</div>
				<div className="order-total">
					<strong>Order Total:</strong> $510.00
				</div>
				<div className="order-delivery">
					<strong>Delivery: </strong>
					<br />
					<p>John Doe, 9824537655</p>
					<p>
						A/99, Shanti Apartments, Vishrambaug Chauk, Vishrambaug
						- 416415, India
					</p>
				</div>
				<div className="order-item">
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
							<h4>5</h4>
						</div>
						<div className="item--subtotal">
							<span>Rs. 799</span>
						</div>
					</div>
				</div>
			</div>
			<Link to="/store">
           	 	<button className="shop-more">Shop More</button>
			</Link>
        </div>
	);
}

export default Order;
