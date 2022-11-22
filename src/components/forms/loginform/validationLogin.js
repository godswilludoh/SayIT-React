import * as Yup from 'yup';

const validationSchema = Yup.object({
	detail: Yup.string().required('Required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
});

export default validationSchema;
