import React, { useState } from 'react';

const Search = ({ callback }) => {
	const [dataValue, setDataValue] = useState('');
	console.log(dataValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		callback(dataValue);
	};

	return (
		<form className='user-report-id' onSubmit={handleSubmit}>
			<input
				id='user-search-input'
				data-table='user-table'
				type='text'
				placeholder='Enter Report ID'
				value={dataValue}
				onChange={(e) => setDataValue(e.target.value)}
			/>
		</form>
	);
};

export default Search;
