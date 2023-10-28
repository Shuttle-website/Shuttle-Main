import React, { useState, useEffect } from "react";
import "./Filterbar.css";

function Filterbar() {
	return (
		<div id="filterbar">
			<div className="products--filter filter--section">
				<h6>PRODUCTS</h6>
				<label className="checkbox--label">
					<input type="checkbox" />
					Oversized T-shirts
				</label>
				<label>
					<input type="checkbox" />
					Relaxed fit T-shirts
				</label>
				<label className="checkbox--label">
					<input type="checkbox" />
					Polo shirts
				</label>
				<label className="checkbox--label">
					<input type="checkbox" />
					Full-sleeve shirts
				</label>
			</div>
			<div className="divider"></div>
			<div className="size--filter filter--section">
				<h6>SIZE</h6>
				<label className="checkbox--label">
					<input type="checkbox" />S
				</label>
				<label className="checkbox--label">
					<input type="checkbox" />M
				</label>
				<label className="checkbox--label">
					<input type="checkbox" />L
				</label>
				<label className="checkbox--label">
					<input type="checkbox" />
					XL
				</label>
			</div>
			<div className="divider"></div>
			<div className="price--filter filter--section">
				<h6>PRICES</h6>
				<label>
					<input type="radio" name="price" />
					Rs. 0 To Rs. 499
				</label>
				<label>
					<input type="radio" name="price" />
					Rs. 599 To Rs. 999
				</label>
				<label>
					<input type="radio" name="price" />
					Rs. 1000 To Rs. 1499
				</label>
				<label>
					<input type="radio" name="price" />
					Above Rs. 1500
				</label>
			</div>
		</div>
	);
}

export default Filterbar;
