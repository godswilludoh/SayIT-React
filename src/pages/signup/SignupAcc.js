import React from 'react';
import SignupImg from '../../assets/createAccount.png';
import SignupForm from '../../components/forms/SignupForm';
import Navbar from '../../components/nav/Navbar';
// import './signUp.css';

const SignupAcc = () => {
	return (
		<>
			<Navbar />
			<div className='mt-5'>
				<div className='row'>
					<div className='col-md-7'>
						<SignupForm />
					</div>
					<div className='col-md-5 mt-5'>
						<img className='img-fluid w-70' src={SignupImg} alt='signup img' />
					</div>
				</div>
			</div>
		</>
	);
};

export default SignupAcc;
