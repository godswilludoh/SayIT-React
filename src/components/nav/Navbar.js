import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<section className='logoLogoHeading'>
				<div className='sayITLogo'>
					<img
						src='/assets/SAYIT.jpeg'
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
			<ul className='navLinkWrapper'>
				<Link to='/'>HOME</Link>
				<Link to='#whyUs'>WHY US</Link>
				<Link to='/report'>REPORT</Link>
				<Link to='/blog'>BLOG</Link>
				<Link id='active' to='login'>
					SIGN IN
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
