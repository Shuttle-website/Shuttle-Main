import React, { useState, useEffect } from "react";
import "./Product.css";

export default function Product() {
	return (
		// will have display row then column for responsive
		<div className="product--container">
			<img src="/assets/f4.jpg" className="product--image" />
			<div className="product--info">
				<h4 className="product--title">Men Floral Casual Shirt</h4>
				<span className="product--category">Men Relaxed Shirts</span>
				<div className="divider"></div>
				<div className="product--price">Rs. 1499</div>
				<div className="product--size">
					Please select a size
					<ul className="product--size--list">
						<li className="product--size--item">
							<input
								type="radio"
								class="btn-check"
								name="options"
								id="option1"
								autocomplete="off"
							/>
							<label class="btn btn-secondary" for="option1">
								S
							</label>
						</li>
						<li className="product--size--item">
							<input
								type="radio"
								class="btn-check"
								name="options"
								id="option2"
								autocomplete="off"
							/>
							<label class="btn btn-secondary" for="option2">
								M
							</label>
						</li>
						<li className="product--size--item">
							<input
								type="radio"
								class="btn-check"
								name="options"
								id="option3"
								autocomplete="off"
							/>
							<label class="btn btn-secondary" for="option3">
								L
							</label>
						</li>
						<li className="product--size--item">
							<input
								type="radio"
								class="btn-check"
								name="options"
								id="option4"
								autocomplete="off"
							/>
							<label class="btn btn-secondary" for="option4">
								XL
							</label>
						</li>
					</ul>
					<div class="dropdown">
						<button
							class="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Quantity
						</button>
						<ul
							class="dropdown-menu"
							aria-labelledby="dropdownMenuButton1"
						>
							<li>
								<a class="dropdown-item" href="#">
									1
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									2
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									3
								</a>
							</li>
						</ul>
					</div>
				</div>
                <button className="add--cart">
                    ADD TO CART
                </button>
			</div>
		</div>
	);
}
