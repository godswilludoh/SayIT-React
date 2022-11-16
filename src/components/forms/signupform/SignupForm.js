import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoreInfo from './MoreInfo';
import './signupform.css';

const SignupForm = () => {
	const navigate = useNavigate();
	const [token, setToken] = useState(false);
	const localToken = JSON.parse(localStorage.getItem('token'));
	let tokenExists = localToken?.length > 0;
	useEffect(() => {
		// console.log('Token exists');
		if (tokenExists) {
			setToken(true);
		}
	}, [tokenExists]);

	const validate = Yup.object({
		userName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		email: Yup.string().email('Email is invalid').required('Email is Required'),
		phoneNumber: Yup.string()
			.max(11, 'Must be 11 numbers')
			.required('Required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
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
					userName: '',
					phoneNumber: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validate}
				onSubmit={async (values, { setSubmitting }) => {
					const { email, userName, phoneNumber, password } = values;
					setSubmitting(true);
					console.log(values);
					try {
						let response = await axios.post(
							'https://say--it.herokuapp.com/v1/auth/register',
							{
								email,
								userName,
								phoneNumber,
								password,
							}
						);
						console.log(response);
						const { access, refresh } = response.data.tokens;
						const tokens = [];
						tokens.push({ access: access.token });
						tokens.push({ refresh: refresh.token });
						localStorage.setItem('token', JSON.stringify(tokens));
						if (token) {
							navigate('/users');
							toast.success('SignUp Successfully Done!', { theme: 'light' });
						}
					} catch (error) {
						console.log(error);
						toast.error('Signup Failed! Please try again', {
							position: 'top-center',
						});
					}
				}}
			>
				{({
					formik,
					values,
					errors,
					touched,
					handleSubmit,
					handleChange,
					isSubmitting,
				}) => (
					<>
						<form action=''>
							<h4 className='mt-2 text-center text-info'>
								<strong>CREATE YOUR ACCOUNT</strong>
							</h4>
							<Form className='w-50 '>
								<TextField
									label='Email'
									name='email'
									type='email'
									placeholder='Enter your email'
									onChange={handleChange}
									value={values.email}
								/>
								<TextField
									label='Username'
									name='userName'
									type='text'
									placeholder='Enter your username'
									onChange={handleChange}
									value={values.userName}
								/>
								<TextField
									label='Phone Number'
									name='phoneNumber'
									type='tel'
									placeholder='Enter your phone number'
									onChange={handleChange}
									value={values.phoneNumber}
								/>
								<TextField
									label='Password'
									name='password'
									type='password'
									placeHolder='Enter your Password'
									onChange={handleChange}
									value={values.password}
								/>
								<TextField
									label='Confirm Password'
									name='confirmPassword'
									type='password'
									placeHolder='confirm-password'
									onChange={handleChange}
									value={values.confirmPassword}
								/>

								<button
									type='submit'
									id='createAccount'
									className='btn mt-3  text-white bg-info btn-outline-info center-block d-block mx-auto font-weight-bold'
									disabled={isSubmitting}
									onClick={handleSubmit}
								>
									{isSubmitting ? 'Loading' : 'CREATE ACCOUNT'}
								</button>
							</Form>
						</form>
					</>
				)}
			</Formik>
			<MoreInfo />
		</>
	);
};

export default SignupForm;
