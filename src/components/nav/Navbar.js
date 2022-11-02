import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<nav className={toggle ? 'navbar expanded' : 'navbar'}>
			<section className='headingLogo'>
				<Link to='/'>
					<div className='sayITLogo'>
						<img
							src='/assets/SAYIT.jpeg'
							height='72px'
							width='100px'
							alt='logo of the SayIT platform'
						/>
					</div>
				</Link>

				<h1 className='headingText'>
					Say<span className='IT'>IT</span>
				</h1>
			</section>
			<div className='menu_button' onClick={handleToggle}>
				{toggle ? (
					<FontAwesomeIcon id='menuBar' icon={faClose} />
				) : (
					<FontAwesomeIcon id='menuBar' icon={faBars} />
				)}
			</div>

			<ul className='links'>
				<Link to='/'>
					<li>HOME</li>
				</Link>
				<Link to='/whyUs'>
					<li>WHY US</li>
				</Link>
				<Link to='/report'>
					<li>REPORT</li>
				</Link>
				<Link to='/blog'>
					<li>BLOG</li>
				</Link>
				<Link id='active' to='login'>
					SIGN IN
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
