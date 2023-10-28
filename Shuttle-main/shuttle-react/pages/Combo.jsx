import React, { useEffect, useState } from 'react'
import './combo.css';
import Card from '../components/Card';
import axios from 'axios';
import Footer from '../components/Footer';

export default function Combo(){



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
	})
    return (
       <div>

<div>
  <div className="p-5 text-center  custom-background">
    <div className="container py-5  custom-background">
      <h1 className="text-body-emphasis custom-text">Full-width jumbotron</h1>
      <p className="col-lg-8 mx-auto lead custom-text">
        This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classNamees.
      </p>
    </div>
  </div>
</div>

<h1 className='best'> Top Selling Combos </h1>

            <div className="card--container">
           {cards}
			</div>


            <h1 className='best'> Best Combos </h1>

            <div className="card--container">
           {cards}
			</div>

            <h1 className='best'> Casual Combos </h1>

            <div className="card--container">
           {cards}
			</div>


            <Footer />

       </div>
    )
}