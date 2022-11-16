import React from 'react';
import './Blog.css';
import Footer from '../../components/footerLandingPage/FooterLandingPage';
import Blogsearch from './Blogsearch';
import Navbar from '../../components/nav/Navbar';

const Blog = () => {
	return (
		<>
			<Navbar />
			<Blogsearch />
			<Footer />
		</>
	);
};

export default Blog;
