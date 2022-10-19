import React from 'react';
import './Button.css';

const Button = ({ type, id, classname, text }) => {
	return (
		<button type={type} id={id} className={classname}>
			{text}
		</button>
	);
};

export default Button;
