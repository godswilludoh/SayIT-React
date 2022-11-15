import React from 'react';

export const SearchBlog = ({ type, id, placeholder }) => {
	return (
		<div class='blog_search-box'>
			<input type={type} id={id} placeholder={placeholder} />
		</div>
	);
};
