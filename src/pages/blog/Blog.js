import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';
import Footer from '../../components/footerLandingPage/FooterLandingPage';
// import Navbar from "../../components/nav/Navbar";
import Blogsearch from './Blogsearch';



// Rendering components here for the blog
const Blog = () => {
	return (
		<>
		<Navbar
			<Blogsearch />

			<Footer />
		</>
	);
};

export default Blog;
