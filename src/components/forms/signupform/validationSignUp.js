import * as Yup from 'yup';

const validationSchema = Yup.object({
	userName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	email: Yup.string().email('Email is invalid').required('Email is Required'),
	phoneNumber: Yup.string().max(11, 'Must be 11 numbers').required('Required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Password must match')
		.required('Confirm password is required'),
});

export default validationSchema;
