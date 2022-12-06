import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import WhatwedoSection from './WhatwedoSection';
import HowitworksSection from './HowitworksSection';
import WhyUS from './WhyUS';
import Footer from '../../components/footerLandingPage/FooterLandingPage';
import Navbar from '../../components/nav/Navbar';
import Faq from './Faq';

const LandingPage = () => {
	return (
		<div className='landingPageContainer'>
			<Navbar />

			<HeroSection />

			<WhatwedoSection />

			<HowitworksSection />

			<Faq />

			<WhyUS />

			<Footer />
		</div>
	);
};

export default LandingPage;
