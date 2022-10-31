import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import { headerLinks } from '../../data/headerLinks';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [show, setShow] = useState(false);

	function mobileNavbar() {
		setShow(!show);
	}
	return (
		<nav>
			<section className='logoLogoHeading'>
				<Link to='/'>
					<div className='sayITLogo'>
						<img
							src='/assets/SAYIT.jpeg'
							height='80px'
							width='100px'
							alt='logo of the SayIT platform'
						/>
					</div>
				</Link>

				<h1 className='logoHeading'>
					Say<span className='IT'>IT</span>
				</h1>
			</section>

			<ul className='navLinkWrapper'>
				{headerLinks.map(({ id, link, text }) => {
					return (
						<li key={id}>
							<NavLink
								className={(navData) => (navData.isActive ? 'active' : '')}
								to={link}
							>
								{text}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<div className='navLinkWrapper'>
				<button>
					<Link id='active' to='/login'>
						SIGN IN
					</Link>
				</button>
			</div>
			<div className='menu_button' onClick={mobileNavbar}>
				<div className={show ? 'hide' : 'start'} />
				<div className={show ? 'hide' : 'mid'} />
				<div className={show ? 'hide' : 'end'} />
				
			</div>
		</nav>
	);
};

export default Navbar;
