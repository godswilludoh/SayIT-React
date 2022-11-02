import React from 'react';
import { Link } from 'react-router-dom';

const MoreInfo = () => {
	return (
		<div className='other_links'>
			<p id='sign-up'>
				Already have an Account?
				<Link to='/signup' className='sign-up'>
					Log In
				</Link>
			</p>
		</div>
	);
};

export default MoreInfo;
