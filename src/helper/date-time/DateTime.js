import React, { useState, useEffect } from 'react';

export const DateTime = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	});
	return (
		<div>
			<p className='user-time-one'>{date.toLocaleTimeString()}</p>
			<p className='user-time-two'>{date.toLocaleDateString()}</p>
		</div>
	);
};
