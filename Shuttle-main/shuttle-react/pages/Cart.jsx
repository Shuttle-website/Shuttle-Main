import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
	const [cartItems, setCartItems] = useState([
		<CartItem />,
		<CartItem />,
		<CartItem />,
	]);
	function displayCartItems() {
		let newCartItems = [];
		for (let i = 0; i < cartItems.length; i++) {
			newCartItems.push(cartItems[i]);
			if (i < cartItems.length - 1) {
				newCartItems.push(<div className="divider"></div>);
			}
		}
		return newCartItems;
	}
	return (
		<>
			<h2 id="cart--title">YOUR CART</h2>
			<div id="cart--container">
				<div className="cart--fields">
					<h6 className="item--field text-center">Item</h6>
					<h6 className="text-center">Price</h6>
					<h6 className="text-center">Quantity</h6>
					<h6 className="text-center">Subtotal</h6>
				</div>
				<div id="cart--items">{displayCartItems()}</div>
				<div id="cart--summary">
					<div className="summary--info">
						<span className="key">Subtotal</span>
						<span className="value">Rs. 599</span>
					</div>
					<div className="summary--info">
						<span className="key">Discount (-20%)</span>
						<span className="value">- Rs. 199</span>
					</div>
					<div className="summary--info">
						<span className="key">Delivery Fee</span>
						<span className="value">Rs. 50</span>
					</div>
					<div className="divider"></div>
					<div className="summary--info">
						<span className="key">Total</span>
						<span className="value">Rs. 450</span>
					</div>
					<button id="checkout--btn">
						<Link to="/Checkout">Proceed to checkout</Link>
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
