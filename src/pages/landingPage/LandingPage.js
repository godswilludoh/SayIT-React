import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import WhatwedoSection from "./WhatwedoSection";
import HowitworksSection from "./HowitworksSection";
import Faq from "./Faq";
import WhyUS from "./WhyUS";
import Footer from "../../components/footerLandingPage/FooterLandingPage";

const LandingPage = () => {
  return (
    <>
	  <HeroSection />

	  <WhatwedoSection />

	  <HowitworksSection />

	  <Faq />

	  <WhyUS />
	  
      <Footer />
    </>
  );
};

export default LandingPage;
