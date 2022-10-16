import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import LoginForm from './LoginForm';
import LoginHeading from './LoginHeading';

const Header = () => {
	return (
		<header>
			<div className='login_form'>
				<LoginHeading classname='login-heading' text='ENTER YOUR DETAILS' />
				<LoginForm />
				<AdditionalInfo />
			</div>
		</header>
	);
};

export default Header;
