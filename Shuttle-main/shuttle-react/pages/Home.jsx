import {React,useState,useEffect} from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { cardObjects } from "../src/data";
import Card from "../components/Card";
import { Link } from 'react-router-dom'
import axios from "axios";

export default function Home() {


	const [products,setProducts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:5000/api/newArrival/')
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
	return (
		<>
			<Carousel />
			<section className="card--section">
				<h2 className="text-center">NEW ARRIVALS</h2>
				<div className="card--container">{cards}</div>
				<div className="view--all--btn">
					<button type="button" className="btn btn-outline-dark">
						View All
					</button>
				</div>
			</section>
			<div className="divider"></div>
			<section className="card--section">
				<h2 className="text-center">TOP SELLING</h2>
				<div className="card--container">{cards}</div>
				<div className="view--all--btn">
					<button type="button" className="btn btn-outline-dark">
						View All
					</button>
				</div>
			</section>
			<div className="divider"></div>
			<div id="categories">
				<h2 className="text-center">Shop by Category</h2>
				<div className="grid--container">
					<Link to="/store" className="grid--item item1"><div></div></Link>
					<Link to="/store" className="grid--item item2"><div></div></Link>
					<Link to="/store" className="grid--item item3"><div></div></Link>
					<Link to="/store" className="grid--item item4"><div></div></Link>
				</div>
			</div>
			<div className="divider"></div>
			<Footer />
		</>
	);
}
