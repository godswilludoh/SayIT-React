import React from 'react';

const AdditionalInfo = () => {
	return (
		<div className='other_links'>
			<p id='sign-up'>
				Don't have an Account?
				<a>SIGN UP</a>
			</p>
			<div className='admin-login'>
				<div id='admin-login'>
					<a>Admin Login</a>
				</div>
				<div id='admin-login'>
					<a>Agents Login</a>
				</div>
			</div>
		</div>
	);
};

export default AdditionalInfo;
