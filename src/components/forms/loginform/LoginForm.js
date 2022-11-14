import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdditionalInfo from './AdditionalInfo';
import { useNavigate } from 'react-router';
import axios from 'axios';

const SignupForm = () => {
	const navigate = useNavigate();
	const [token, setToken] = useState(false);
	const localToken = JSON.parse(localStorage.getItem('token'));
	let tokenExists = localToken?.length > 0;
	useEffect(() => {
		console.log('Token exists');
		if (tokenExists) {
			setToken(true);
		}
	}, [tokenExists]);

	const displaySignUpNotification = () => {
		toast.success('Login Successful!', { theme: 'light' });
	};

	const validate = Yup.object({
		username: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
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
					userName: '',
					password: '',
				}}
				validationSchema={validate}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					const { userName, password } = values;
					setSubmitting(true);
					setTimeout(() => {
						setSubmitting(false);
						console.log('form submitted');
						try {
							let response = axios.post(
								'https://say--it.herokuapp.com/v1/auth/login',
								{
									userName,
									password,
								}
							);

							const { access, refresh } = response.data.tokens;
							const tokens = [];
							tokens.push({ access: access.token });
							tokens.push({ refresh: refresh.token });
							localStorage.setItem('token', JSON.stringify(tokens));

							if (token) {
								navigate('/users');
							}
						} catch (error) {}
						resetForm();
					}, 4000);
				}}
			>
				{(
					values,
					errors,
					touched,
					handleChange,
					handleSubmit,
					handleReset,
					isSubmitting,
					formik
				) => (
					<form>
						<Form className='w-75'>
							<TextField
								label='Username'
								name='userName'
								type='username'
								placeholder='Enter Username or Email'
								onChange={handleChange}
								value={values.userName}
							/>
							<TextField
								label='Password'
								name='password'
								type='password'
								placeholder='Enter Password'
								onChange={handleChange}
								value={values.password}
							/>

							<button
								id='createAccount'
								className='btn mt-3  text-white bg-info btn-outline-info center-block d-block mx-auto font-weight-bold'
								disabled={isSubmitting}
								type='submit'
								onClick={handleSubmit}
							>
								{isSubmitting ? 'Logging In' : 'Login'}
							</button>
						</Form>
					</form>
				)}
			</Formik>
			<AdditionalInfo />
		</>
	);
};

export default SignupForm;
