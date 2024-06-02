import React from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}>
			<section className='hero'>
				<div className='grid grid-cols-1 gap-4 text-center '>
					<h1 className='text-4xl lg:text-7xl text-white text-center'>
						BOGO FREE TOPS
					</h1>
					<p className=''>
						Lorem dosit amet.This season
					</p>
					<Link to="/women's" className='bg-[]'>
						Shop Now
					</Link>
				</div>
			</section>
		</motion.div>
	);
};

export default Hero;
