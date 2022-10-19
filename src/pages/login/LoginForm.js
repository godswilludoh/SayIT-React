import React from 'react';
import Button from '../../components/button/Button';
import Input from './Input';

const LoginForm = () => {
	return (
		<form id='form'>
			<Input type='text' name='username' id='username' placeholder='Username' />
			<Input
				type='password'
				name='password'
				id='password'
				placeholder='Password'
			/>

			<Button type='submit' id='button' text='LOGIN' />
		</form>
	);
};

export default LoginForm;
