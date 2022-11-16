import React from 'react';
import SignupImg from '../../../assets/createAccount.png';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/nav/Navbar';
import LoginForm from '../../../components/forms/loginform/LoginForm';
import LoginHeader from '../../../components/forms/loginform/LoginHeader';
import './UsersLogin.css';

const UsersLogin = () => {
	return (
		<div className='userLogInContainer'>
			<Navbar />
			<div className='mt-5'>
				<div className='row'>
					<div className='col-md-6'>
						<LoginHeader />
						<LoginForm />
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

export default UsersLogin;
