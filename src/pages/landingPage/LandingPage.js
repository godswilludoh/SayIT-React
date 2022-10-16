import React from 'react';
import './Landing.css';
import image1 from './LandinPageImage/goal.png';
import image2 from './LandinPageImage/dubbing.png';
import image3 from './LandinPageImage/unknown.png';
import Footer from './footer/Footer';

const LandingPage = () => {
	return (
		<React.Fragment>
			<div className='hero-image'>
				<div className='hero-text'>
					<h1>Let’s build a society that is crime free!</h1>
					<p>
						Ever wonder how the community will be if there’s little or no crimes
						recorded. <br />
						Evil thrives when good people keep quiet and do nothing.
						<br />
						Be the change you want to see in the world.
					</p>
					<a href='#howItWorks' className='hero-btn'>
						GET STARTED
					</a>
				</div>
			</div>

			<section className='whatWedo'>
				<h2 className='whatWeDoHeading'>WHAT WE DO</h2>
				<p className='whatWeDoParagraph'>
					SayIT Whistleblowing Application is a web based application that helps
					increase transparency and accountability in the society.The platform
					provides a means for users to report cases both anonymously or
					creating an account so as to track their report status.
					<br />
					The reports made are passed to agents that partner with the platform.
				</p>
				<div className='whatWedoButton'>
					<a href='/pages/sign-up-page.html' className='btn'>
						Create Account
					</a>
					<a href='/pages/anonymousReport.html' className='btn'>
						REPORT ANONYMOUSLY
					</a>
				</div>
			</section>

			<section className='howITWOrks' id='howItWorks'>
				<h2 className='howITWorksHeading'>HOW IT WORKS</h2>
				<div className='imageContainerHowItWork'>
					<div className='imageForMan'>
						{/* image has been rendered in the .css file */}
					</div>
					<section className='stepbyStepApproachContainer'>
						<h2 className='stepBystepHeading'>Step by Step Approach</h2>
						<ul className='listContainer'>
							<li>1.) Create an account / Use anonymously</li>
							<li>2.) Click on make a report</li>
							<li>3.) Choose sector of Industry you wish to report</li>
							<li>4.)Choose agency you wish to report to</li>
							<li>5.) Upload proof for authenticity</li>
							<li>6.) Submit Report</li>
							<li>7.) Get update of reports</li>
						</ul>
					</section>
				</div>
			</section>

			<section className='frequentlyAskedQuestion'>
				<h2 className='frequentlyAskedQtnHeading'>
					FREQUENTLY ASKED QUESTIONS (FAQ's)
				</h2>
				<section className='containerHousingAccordion'>
					<button className='accordion'>WHY SHOULD I USE SayIT?</button>
					<div className='panel'>
						<p>
							This website uses state of the art security software to anonymize
							your internet connection as you submit files or correspond with
							reporters. This way your identity is protected both from the
							reporters who receive the files and from others who might be
							monitoring or intercepting your communications.
						</p>
					</div>
					<button className='accordion'>
						DOES SUBMISSION INVOLVES DANGER?
					</button>
					<div className='panel'>
						<p>
							Sharing confidential information is never without risk. SayIT will
							try, as much as possible, to protect your communication and to
							provide information about the risks. The system makes finding the
							source of a leak difficult. Our receivers are journalists that
							have been trained in the use of state-of-the-art security tools
							and procedures.
						</p>
					</div>
					<button className='accordion'>HOW ARE AGENTS SELECTED?</button>
					<div className='panel'>
						<p>
							Sharing confidential information is never without risk. SayIT will
							try, as much as possible, to protect your communication and to
							provide information about the risks. The system makes finding the
							source of a leak difficult. Our receivers are journalists that
							have been trained in the use of state-of-the-art security tools
							and procedures.
						</p>
					</div>
				</section>
			</section>

			<section id='whyUs'>
				<h2 id='worksText'>WHY US</h2>
				<div className='imageContainer'>
					<div className='image'>
						{/* image has been rendered in the .css file */}
					</div>
					<div className='gridContainer'>
						<section className='goalSection'>
							<div className='loGo'>
								<img src={image1} alt='logo here' className='how_img' />
							</div>
							<div className='conTent'>
								<h3 className='contentTitle'>OUR GOALS</h3>
								<p className='contentParagraph'>
									<span className='works_SayIT'>SayIT</span> is a platform that
									allows people to send information of public interest to
									security agencies and civil society organizations through
									secure technologies that protect the identity of the
									source.Using transparency and civil participation, it aims to
									build a fairer and more democratic society.
								</p>
							</div>
						</section>
						<section className='goalSection'>
							<div className='loGo'>
								<img src={image2} alt='logo here' className='how_img' />
							</div>
							<div className='conTent'>
								<h3 className='contentTitle'>WE ARE YOUR VOICE</h3>
								<p className='contentParagraph'>
									The information received through
									<span className='works_SayIT'>SayIT</span> will be verified,
									analyzed and published by the partners of our alliance, made
									up of Security Agencies and Civil society organizations. The
									main goal is that the impact of the information revealed is
									amplified i.e. sent to Agencies for approvals.
								</p>
							</div>
						</section>
						<section className='goalSection'>
							<div className='loGo'>
								<img src={image3} alt='logo here' className='how_img' />
							</div>
							<div className='conTent'>
								<h3 className='contentTitle'>SECURITY</h3>
								<p className='contentParagraph'>
									Anonymity is an integral part of our project. It is essential
									that all instructions on this site are followed closely so
									that the identity of the whistleblower is protected.
								</p>
							</div>
						</section>
					</div>
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
};

export default LandingPage;
