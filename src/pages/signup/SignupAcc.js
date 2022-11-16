import React from 'react';
import SignupImg from '../../assets/createAccount.png';
import Footer from '../../components/footer/Footer';
import SignupForm from '../../components/forms/signupform/SignupForm';
import Navbar from '../../components/nav/Navbar';
import './signUp.css';

const SignupAcc = () => {
	

	return (
		<div className='userSignupContainer'>
			<Navbar />
			<div className='mt-5'>
				<div className='row'>
					<div className='col-md-6'>
						<SignupForm />
					</div>
					<div className='col-md-5 mt-5'>
						<img
							className='img-fluid w-70 img-responsive d-block mx-auto'
							src={SignupImg}
							alt='signup img'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SignupAcc;
