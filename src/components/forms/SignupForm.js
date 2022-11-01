import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
	const displaySignUpNotification = () => {
		toast.success('SignUp Successful!', { theme: 'light' });
	};

	const validate = Yup.object({
		email: Yup.string().email('Email is invalid').required('Email is Required'),
		username: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		tel: Yup.string().max(11, 'Must be 11 numbers').required('Required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must match')
			.required('Confirm password is required'),
	});
	return (
		<>
			<div className='toast-notify'>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
			</div>

			<Formik
				initialValues={{
					email: '',
					username: '',
					tel: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validate}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => (
					<form className='signup-form' id='form'>
						<h1 className='my-4 font-weight-bold-display-4'>
							CREATE YOUR ACCOUNT
						</h1>
						<Form>
							<TextField label='Email' name='email' type='email' />
							<TextField label='Username' name='username' type='username' />
							<TextField label='Phone Number' name='tel' type='tel' />
							<TextField label='Password' name='password' type='password' />
							<TextField
								label='Confirm Password'
								name='confirmPassword'
								type='password'
							/>

							<button
								type='submit'
								id='createAccount'
								className='btn btn-dark mt-3'
								onClick={displaySignUpNotification}
							>
								Create Account
							</button>
						</Form>
					</form>
				)}
			</Formik>
		</>
	);
};

export default SignupForm;
