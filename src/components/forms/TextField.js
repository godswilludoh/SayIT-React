import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div>
			<label className='mb-4' htmlFor={field.name}>
				{label}
			</label>
			<input
				className={`form-control shadow-none border border-info mb-4 ${
					meta.touched && meta.error && 'is-invalid'
				}`}
				{...field}
				{...props}
				autoComplete='off'
			/>
			<ErrorMessage component='div' name={field.name} className='error' />
		</div>
	);
};

export default TextField;
