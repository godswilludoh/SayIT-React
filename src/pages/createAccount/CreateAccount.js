import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
	return (
		<div>
			<div className='signup-container'>
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
			</div>
			<p className='login'>
				Already have an account? <a href='/pages/loginpage.html'>LOG IN</a>
			</p>
			{/*form ends here*/}
			<footer id='sign-up-footer'>
				<p className='footer-text'>Privacy Policy | Terms of Use</p>
				<p className='footer-text'>
					©2022. All Rights Reserved | Designed By Tech Stars
				</p>
			</footer>
		</div>
	);
};

export default CreateAccount;
