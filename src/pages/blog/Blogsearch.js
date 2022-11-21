import React from 'react';
import { SearchBlog } from '../../helper/search/SearchBlog';
import { BlogCard } from '../../utility/BlogCard';
import './Blog.css';

export const Blogsearch = () => {
	return (
		<>
			<div>
				<header class='header_wrapper'>
					<div class='sector_categories'>
						<div class='category'>All</div>
						<div class='category'>Education</div>
						<div class='category'>Finance</div>
						<div class='category'>Security</div>
					</div>
					<SearchBlog type='text' id='search' placeholder='Search Here' />
				</header>
			</div>

			<BlogCard />
		</>
	);
};

export default Blogsearch;
