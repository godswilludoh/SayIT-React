import React from 'react';
import './FooterLandingPage.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer_section'>
				<div className='footer_header'>
					<p className='logoHeading'>
						Say<span className='IT'>IT</span>
					</p>
				</div>
				<div>
					<ul className='footerLinkDocs'>
						<li>
							<a>Contact Us</a>
						</li>
						<li>
							<a>Admin</a>
						</li>
						<li>
							<a href='#'>Privacy Policy</a>
						</li>
						<li>
							<a>Terms and Conditions</a>
						</li>
						<li>
							<a>Follow us</a>
						</li>
					</ul>
				</div>
			</div>
			<p className='copyright'>
				©2022. All rights Reserved | Designed by Tech Stars
			</p>
		</footer>
	);
};

export default Footer;
