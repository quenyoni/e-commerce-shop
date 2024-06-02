import React, {
	useEffect,
	useState,
} from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = ({ loggedIn }) => {
	const [cats, setCats] = useState([]);
	const fetchCategories = async () => {
		const res = await fetch(
			`https://fakestoreapi.com/products/categories`,
		);
		const data = await res.json();
		setCats(data);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<header className='bg-[#000] '>
			<div class='container mx-auto px-8'>
				<div class='flex items-center justify-between '>
					<span className='text-white font-bold space-x-4 uppercase  w-24 h-auto scale-[45%]'>
						<Link to='/'>
							<Logo />
						</Link>
					</span>
					<ul>
						{loggedIn ? (
							<ul className='flex gap-8 items-center'>
								<li className='uppercase cursor-pointer hover:bg-purple-500 px-4 rounded'>
									<Link to='/'>Home</Link>
								</li>
								{cats.map((cat, index) => (
									<li className='uppercase cursor-pointer hover:bg-purple-500 px-4 rounded'>
										<Link
											key={index}
											to={`/${cat
												.split(" ")
												.slice(0, 1)}`}>
											{cat.split(" ").slice(0, 1)}
										</Link>
									</li>
								))}
								<li className='uppercase cursor-pointer hover:bg-purple-500 px-4 rounded'>
									Cart
								</li>
							</ul>
						) : (
							<Link to='/login'>login</Link>
						)}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
