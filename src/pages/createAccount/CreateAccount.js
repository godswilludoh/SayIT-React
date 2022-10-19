import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './CreateAccount.css';
import Form from './Form';

const CreateAccount = () => {
	return (
		<div>
			<div className='signup-container'>
				<Form />
			</div>
			<p className='login'>
				Already have an account?{' '}
				<Link to='/login' className='login-link'>
					LOG IN
				</Link>
			</p>

			<Footer />
		</div>
	);
};

export default CreateAccount;
