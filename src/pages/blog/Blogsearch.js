import React from 'react';
import { SearchBlog } from '../../helper/search/SearchBlog';
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
			<section id='blog_grid-container'>
				<div class='blog_box-wrapper'>
					<div class='blog_description-label'>
						<span class='blog_code'>Ed/012A4</span>
						<span class='blog_sector-category'>Education</span>
					</div>
					<h4 class='blog_brief'>
						Case of Whistleblowing in the University of Nigeria
					</h4>
					<h6 class='blog_summary'>
						Education fraud occurs when a school or university violates
						federally mandated standards or the Higher Education Act (HEA) to
						increase profits. Ruthless administrators cheat the system by
						enrolling more students or cutting costs. These schemes will
						eventually exert their burden on taxpayers as unqualified students
						whose grades were artificially inflated will fail to repay their
						loans. Blowing the whistle against this type of fraudulent practices
						help the government uncover those who prey on youths who want to
						receive an education to improve their lives.
					</h6>
					<button class='read_more-button'>
						<a href='./read-more.html'>Read More</a>
					</button>
				</div>
			</section>
		</>
	);
};

export default Blogsearch;
