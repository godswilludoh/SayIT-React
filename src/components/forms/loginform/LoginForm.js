import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import validationSchema from './validationLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdditionalInfo from './AdditionalInfo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../components/hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupForm = () => {
	const navigate = useNavigate();
	const { auth, setAuth, setUser } = useAuth();

	const [showPassword, setShowPassword] = useState(false);

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const loginSuccess = () => {
		toast.success('Login Successful!', { position: toast.POSITION.TOP_CENTER });
	};

	const loginFailed = (error) => {
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
					detail: '',
					password: '',
				}}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					const { detail, password } = values;
					setSubmitting(true);
					try {
						let response = await axios.post(
							'https://say--it.herokuapp.com/v1/auth/login',
							{
								detail,
								password,
							}
						);

						const accessToken = response.data.tokens.access.token;
						const refreshToken = response.data.tokens.refresh.token;
						const userObj = response.data.user;

						setAuth({ accessToken, refreshToken });
						setUser(userObj);
						loginSuccess();

						if (auth) {
							navigate('/users');
						}
					} catch (err) {
						if (!err.response) {
							loginFailed('no server response');
						} else if (err.response.status === 400) {
							loginFailed(err.response.message);
						} else if (err.response.status === 401) {
							loginFailed(err.response.message);
						} else {
							loginFailed('Login Failed');
						}
					}
				}}
			>
				{({ values, handleChange, handleSubmit, isSubmitting, formik }) => (
					<form>
						<Form className='w-75'>
							<TextField
								label='Username or Email'
								name='detail'
								type='text'
								placeholder='Enter Username or Email'
								onChange={handleChange}
								value={values.detail}
							/>
							<TextField
								label='Password'
								name='password'
								type={showPassword ? 'password' : 'text'}
								placeholder='Enter Password'
								onChange={handleChange}
								value={values.password}
							/>

							<span className='toggle-password' onClick={togglePassword}>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</span>

							<Link to={'/userforgotpassword'} className='forForgotPassword'>
								FORGOT PASSWORD?
							</Link>

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
