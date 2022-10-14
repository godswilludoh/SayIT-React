import React from 'react';
import './Navbar.css';


const Navbar = () => {
	return (
		<nav>
			<section className='logoLogoHeading'>
				<div className='sayITLogo'>
					<img
						src='./Images/SAYIT.jpeg'
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
			<input type='checkbox' id='click' />
			<ul className='navLinkWrapper'>
				<li>
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
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
