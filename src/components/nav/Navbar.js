import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
				{/* <i className='fas fa-bars' /> */}
				<FontAwesomeIcon id='menuBar' icon = {faBars}/>
			</label>
			{/* <input type='checkbox' id='click' /> */}
			<ul className='navLinkWrapper'>
				<Link to='/'>HOME</Link>
				<Link to='/whyUs'>WHY US</Link>
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

