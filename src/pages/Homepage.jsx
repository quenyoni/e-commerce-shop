import React from "react";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";

import SaleSection from "../components/SaleSection.jsx";
const Homepage = ({ loggedIn }) => {
	return (
		<>
			<Hero />
			<SaleSection />
			<Hero />
			<Hero />
			<Categories />
			<Footer />
		</>
	);
};

export default Homepage;
