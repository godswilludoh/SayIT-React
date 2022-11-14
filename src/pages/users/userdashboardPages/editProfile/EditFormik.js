import React from 'react';
import {
	Formik,
	Form,
	useField,
	FormikProvider,
	ErrorMessage,
	validationSchema,
} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { MyTextInput } from '../../../../components/reportFormFields/MyTextInput';

export const EditFormik = () => {
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
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must match')
			.required('Confirm password is required'),
	});
	return (
		<Formik
			initialValues={{
				userName: '',
				email: '',
				phoneNumber: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={validate}
		>
			<div className='editProfile-main'>
				<form action=''>
					<Form className='editprofile-form'>
						<MyTextInput
							label='Username'
							name='userName'
							type='text'
							placeholder='Enter new username...'
						/>
						<MyTextInput
							label='Email'
							name='email'
							type='text'
							placeholder='Enter new email...'
						/>
						<MyTextInput
							label='Phone Number'
							name='phoneNumber'
							type='tel'
							placeholder='Enter new number...'
						/>

						<MyTextInput
							label='Password'
							name='password'
							type='password'
							placeHolder='Enter your Password'
						/>
						<MyTextInput
							label='Confirm Password'
							name='confirmPassword'
							type='password'
							placeHolder='confirm-password'
						/>
						<div className='editprofile-btn'>
							<Link to='/users' className='edit-btn edit-back'>
								Back to Dashboard
							</Link>
							<button type='submit' className='edit-btn edit-save'>
								Save Changes
							</button>
						</div>
					</Form>
				</form>
			</div>
		</Formik>
	);
};
