import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<p>
				<Link to=''>Privacy Policy</Link> | <Link to=''>Terms Of Use</Link>
			</p>
			<p>©2022. All Rights Reserved | Designed By TechStars</p>
		</footer>
	);
};

export default Footer;
