import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<section className='logoLogoHeading'>
				<div className='sayITLogo'>
					<img
						src='/assets/images/SAYIT.jpeg'
						height='80px'
						width='100px'
						alt='logo of the SayIT platform'
					/>
				</div>
				<h1 className='logoHeading'>
					Say<span className='IT'>IT</span>
				</h1>
			</section>
			<label htmlFor='click' className='menu_button'>
				<i className='fas fa-bars' />
			</label>
			{/* <input type='checkbox' id='click' /> */}
			<div className='navLinkWrapper'>
				<Link to='/'>HOME</Link>
				<Link to='/whyUs'>WHY US</Link>
				<Link to='/report'>REPORT</Link>
				<Link to='/blog'>BLOG</Link>
				{/* <li>
					<a href='./index.html'>HOME</a>
				</li>
				<li>
					<a href='#whyUs'>WHY US</a>
				</li>
				<li>
					<a href='./pages/anonymousReport.html'>REPORT</a>
				</li>
				<li>
					<a href='./pages/blog-page.html'>BLOG</a>
				</li>
				<li>
					<a href='/pages/loginpage.html' id='active'>
						SIGN IN
					</a>
				</li> */}
			</div>
		</nav>
	);
};

export default Navbar;
