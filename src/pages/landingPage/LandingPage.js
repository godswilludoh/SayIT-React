import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import WhatwedoSection from './WhatwedoSection';
import HowitworksSection from './HowitworksSection';
import Faq from './Faq';
import WhyUS from './WhyUS';
import Footer from '../../components/footerLandingPage/FooterLandingPage';
import Navbar from '../../components/nav/Navbar';
import Example from './Faq2';

const LandingPage = () => {
	return (
		<>
			<Navbar />

			<HeroSection />

			<WhatwedoSection />

			<HowitworksSection />

			{/* <Faq /> */}

			<Example />

			<WhyUS />

			<Footer />
		</>
	);
};

export default LandingPage;
