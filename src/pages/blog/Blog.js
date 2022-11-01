import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Blog.css'
// import './Navbar.css'
import Footer from "../../components/footerLandingPage/FooterLandingPage";
import Blogsearch  from './Blogsearch';


// NAVBAR FOR JUST DE BLOG PAGE
export const BlogNavBar = () => {
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
				  
				  <Link id='active' to='#'>
					  DASHBOARD
				  </Link>
			  </ul>
		  </nav>
  
	)
  }
// Rendering compontes here for the blog
const Blog = () => {
	return(
   <React.Fragment>


		{/* <BlogNavBar /> */}
		<Blogsearch/>
		

			<Footer />
		</>
	);
};

export default Blog;
