import React from 'react';
import validationSchema from './validationSignUp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import MoreInfo from './MoreInfo';
import './signupform.css';

const SignupForm = () => {
	const navigate = useNavigate();
	const { auth, setUser } = useAuth();

	const signupSuccess = () => {
		toast.success('Signup Successful', {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const signupError = (error) => {
		toast.error(error, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

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
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					const { email, userName, phoneNumber, password } = values;
					setSubmitting(true);
					try {
						let response = await axios.post(
							'http://191.101.241.157:4500/v1/auth/register',
							{
								email,
								userName,
								phoneNumber,
								password,
							}
						);

						const accessToken = response.data.tokens.access.token;
						localStorage.setItem('accessToken', JSON.stringify(accessToken));
						setUser(response.data.user);

						signupSuccess();
						if (auth) {
							navigate('/users');
						}
					} catch (err) {
						if (!err.response) {
							signupError('no server response');
						} else if (err.response.status === 400) {
							signupError(err.response.data.message);
						} else if (err.response.status === 409) {
							signupError(err.response.data.message);
						} else if (err.response.status === 401) {
							signupError(err.response.data.message);
						} else {
							signupError('Login Failed');
						}
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
						{/* <form action=''> */}
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
								placeholder='Enter your Password'
								onChange={handleChange}
								value={values.password}
							/>
							<TextField
								label='Confirm Password'
								name='confirmPassword'
								type='password'
								placeholder='confirm-password'
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
								{isSubmitting ? 'Signing Up...' : 'CREATE ACCOUNT'}
							</button>
						</Form>
						{/* </form> */}
					</>
				)}
			</Formik>
			<MoreInfo />
		</>
	);
};

export default SignupForm;
