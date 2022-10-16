import React from 'react';

const Input = ({ type, name, id, placeholder }) => {
	return (
		<div className='input'>
			<i className='fa-solid fa-user' />
			<input
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				required
			/>
		</div>
	);
};

export default Input;
