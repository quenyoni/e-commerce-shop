import React, {
	useState,
	useEffect,
} from "react";

const Sale = () => {
	const [isActive, setActivity] = useState(true);
	const [time, setTime] = useState(60000); // 600 seconds = 10 minutes

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) =>
				prevTime > 0 ? prevTime - 1 : 0,
			);
		}, 1000);

		return () => clearInterval(timer); // Cleanup the interval on component unmount
	}, []);

	const formatTime = (seconds) => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor(
			(seconds % 3600) / 60,
		);
		const secs = seconds % 60;
		return `${hours} h ${
			minutes < 10 ? "0" : ""
		}${minutes} m ${
			secs < 10 ? "0" : ""
		}${secs} s`;
	};
	return (
		<>
			{isActive && (
				<div className='sticky top-0 w-[100%] h-auto  bg-red-800 text-white z-20 flex justify-center '>
					<div className='text-center py-2 '>
						<span className='mr-4'>
							Hurry! 80%{" "}
							<span className='font-bold'>
								OFF
							</span>{" "}
							on all winter collections
						</span>
						<span className='font-bold mr-4'>
							{formatTime(time)}
						</span>
						<button
							onClick={() => {
								setActivity(() => !isActive);
							}}>
							❌
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Sale;
