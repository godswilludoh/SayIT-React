import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdditionalInfo from './AdditionalInfo';

const SignupForm = () => {
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
					username: '',
					password: '',
				}}
				validationSchema={validate}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => (
					<form>
						<Form className='w-75'>
							<TextField
								label='Username'
								name='username'
								type='username'
								placeholder='Enter Username or Email'
							/>
							<TextField
								label='Password'
								name='password'
								type='password'
								placeholder='Enter Password'
							/>

							<button
								id='createAccount'
								className='btn mt-3  text-white bg-info btn-outline-info center-block d-block mx-auto font-weight-bold'
								onClick={displaySignUpNotification}
							>
								LOGIN
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
