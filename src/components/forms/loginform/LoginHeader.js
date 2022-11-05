import React from 'react';
import LoginHeading from './LoginHeading';

const Header = () => {
	return (
		<header>
			<div className='login_form'>
				<LoginHeading classname='login-heading' text='ENTER YOUR DETAILS' />
			</div>
		</header>
	);
};

export default Header;
