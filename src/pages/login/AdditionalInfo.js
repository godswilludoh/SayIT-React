import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
	return (
		<div className='other_links'>
			<p id='sign-up'>
				Don't have an Account?
				<Link to='/signup' className='sign-up'>
					SIGN UP
				</Link>
			</p>
			<div className='admin-login'>
				<Link to='/admin' id='admin-login'>
					Admin Login
				</Link>
				<Link to='/agents' id='admin-login'>
					Agents Login
				</Link>
			</div>
		</div>
	);
};

export default AdditionalInfo;
