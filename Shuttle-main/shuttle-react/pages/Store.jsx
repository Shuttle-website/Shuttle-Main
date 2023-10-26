import React, { useState, useEffect } from "react";
import useFetch from "use-http";
import Filterbar from "../components/Filterbar";
import Card from "../components/Card"
import "../components/Card.css"
import { cardObjects } from "../src/data";
import axios from "axios";


export default function Store(props) {
	// const [message, setMessage] = useState(null);
	// const fetchData = async () => {
	// 	try {
	// 	  const response = await useFetch("http://localhost:5000/store");
	// 	  const data = await response.json();
	// 	  console.log(data.message);
	// 	} catch (error) {
	// 	  console.error("Error fetching data:", error);
	// 	}
	//   };
	  
	// // Call the async function
	// // fetchData();

	// const cards = cardObjects.map((obj) => {
	// 	return (
	// 		<Card
	// 			img={obj.img}
	// 			desc={obj.desc}
	// 			rating={obj.rating}
	// 			price={obj.price}
	// 		/>
	// 	);
	// });


	const [products,setProducts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:5000/api/products/')
		  .then((response) => {
			console.log(response.data.data);
			setProducts(response.data.data ? response.data.data : []); // Ternary operator
		  })
		  .catch(er => {
			console.log('axios.get() failed:', er);
		  });
	  }, []);

	  console.log(products)
	// const cards = cardObjects.map((obj) => {
		
	// New Arrivals
	const cards = products.map((obj) => {
		return (
			<Card
				img={obj.image}
				desc={obj.name}
				rating={obj.rating}
				price={obj.price}
				description = {obj.description}
			/>
		);
	});










	  
	return (
		<>
			<div className="store--container">
				<Filterbar />
				<div className="card--container">
					{cards}
					{cards}
				</div>
			</div>
		</>
	);
}

