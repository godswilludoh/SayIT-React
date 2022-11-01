import React from 'react';
import SignupImg from '../../assets/createAccount.png';
import SignupForm from '../../components/forms/SignupForm';
import Navbar from '../../components/nav/Navbar';

const SignupAcc = () => {
	return (
		<>
			<Navbar />
			<div>
				<div className='row'>
					<div className='col-md-5'>
						<SignupForm />
					</div>
					<div className='col-md-7 my-auto'>
						<img className='img-fluid w-100' src={SignupImg} alt='signup img' />
					</div>
				</div>
			</div>
		</>
	);
};

export default SignupAcc;
