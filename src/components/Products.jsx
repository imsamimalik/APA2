import { useState } from 'react'
import ProductCard from "./ProductCard";


const INITIAL_SHOES = [
	{
		id: 1,
		name: "Nike Air Max 90",
		img: "./images/shoe1.webp",
		price: 'Rs. 12,000',
		isSold: false,
	},
	{
		id: 2,
		name: "Nike Air Jordan 1",
		img: "./images/shoe2.webp",
		price: "Rs. 15,000",
		isSold: true,
	},
	{
		id: 3,
		name: "Nike Air Force 1",
		img: "./images/shoe3.webp",
		price: "Rs. 10,000",
		isSold: false,
	},
];

const NEW_SHOES = [
	{
		id: 1,
		name: "Nike Air Max 290",
		img: "./images/shoe4.jpg",
		price: 'Rs. 22,000',
		isSold: false,
	},
	{
		id: 2,
		name: "Nike Air Jordan 2",
		img: "./images/shoe5.jpg",
		price: "Rs. 25,000",
		isSold: false,
	},
	{
		id: 3,
		name: "Nike Air Force 2",
		img: "./images/shoe6.avif",
		price: "Rs. 20,000",
		isSold: true,
	},
];



const Products = () => {

	const [shoes, setShoes] = useState(INITIAL_SHOES);


	const handleClick = () => {
		// setShoes(NEW_SHOES);
		// alternate between the two states
		if (shoes === INITIAL_SHOES) {
			setShoes(NEW_SHOES);
		} else {
			setShoes(INITIAL_SHOES);
		}
	}


	return (
		<section className=' flex flex-col items-center justify-center gap-10'>

			<div className="flex items-center justify-center gap-10 my-10">
				{shoes.map((shoe) => (
					<ProductCard
						name={shoe.name}
						price={shoe.price}
						img={shoe.img}
						isSold={shoe.isSold}
						id={shoe.id}
					/>
				))}
			</div>
			<button
				onClick={handleClick}
				className="px-5 py-2 text-white bg-black"
			>

				Change All Shoes
			</button>
		</section >

	);
};
export default Products;
