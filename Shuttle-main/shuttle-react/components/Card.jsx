import React from "react";
import { Link } from "react-router-dom"
import "./Card.css";

function Card(props) {
	const stars = [];
	for (let i = 0; i < props.rating; i++) {
		stars.push(
			<i className="fa-solid fa-star" style={{ color: "#f2e231" }}></i>
		);
	}
	return (
		<Link to="/store/product">
			<div className="card--item">
				<img src={props.img} alt="image" />
				<span className="card--shuttle">Shuttle</span>
				<div className="card--desc">{props.desc}</div>
				<div className="card--price">${props.price}</div>
				<div className="card--rating">{stars}</div>
			</div>
		</Link>
	);
}

export default Card;
