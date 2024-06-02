import React from "react";

const Login = () => {
	return (
		<section className='h-screen hero grid place-content-center '>
			<div className=' '>
				<form
					className='flex flex-col  gap-2'
					action=''>
					<label for='username'>Username</label>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='enter username here'
					/>
					<label for='password'>Password</label>
					<input
						placeholder='enter password here'
						type='password'
						name='password'
						id='username'
					/>
					<button
						className='bg-blue-500'
						type='submit'>
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
