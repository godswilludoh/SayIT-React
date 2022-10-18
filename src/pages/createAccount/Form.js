import React from 'react';

const Form = () => {
	return (
		<form action className='signup-form' id='form'>
			<h1 className='signup-heading'>CREATE YOUR ACCOUNT</h1>
			<div className='form-control'>
				<input
					type='email'
					className='text-area'
					id='email'
					placeholder='Email'
				/>

				<i className='fas fa-check-circle' />
				<i className='fas fa-exclamation-circle' />
				<small>Error Message</small>
			</div>
			<div className='form-control'>
				<input
					type='text'
					className='text-area'
					id='username'
					placeholder='Username'
				/>
				<i className='fas fa-check-circle' />
				<i className='fas fa-exclamation-circle' />
				<small>Error Message</small>
			</div>
			<div className='form-control'>
				<input
					type='tel'
					className='text-area'
					id='phone-number'
					placeholder='Phone Number'
				/>
				<i className='fas fa-check-circle' />
				<i className='fas fa-exclamation-circle' />
				<small>Error Message</small>
			</div>
			<div className='form-control'>
				<input
					type='password'
					className='text-area'
					id='password'
					placeholder='Password'
				/>
				<i className='fas fa-check-circle' />
				<i className='fas fa-exclamation-circle' />
				<small>Error Message</small>
			</div>
			<div className='form-control'>
				<input
					type='password'
					className='text-area'
					id='confirm-password'
					placeholder='Confirm Password'
				/>
				<i className='fas fa-check-circle' />
				<i className='fas fa-exclamation-circle' />
				<small>Error Message</small>
			</div>
			<button type='submit' id='createAccount'>
				Create Account
			</button>
		</form>
	);
};

export default Form;
