import React from 'react';

const WhyUS = () => {
	return (
		<section id='whyUs'>
			<h2 id='worksText'>WHY US</h2>
			<div className='imageContainer'>
				<div className='image'>
					{/* image has been rendered in the .css file */}
				</div>
				<div className='gridContainer'>
					<section className='goalSection'>
						<div className='loGo'>
							<img src='/assets/goal.png' alt='logo here' className='how_img' />
						</div>
						<div className='conTent'>
							<h3 className='contentTitle'>OUR GOALS</h3>
							<p className='contentParagraph'>
								<span className='works_SayIT'>SayIT</span> is a platform that
								allows people to send information of public interest to security
								agencies and civil society organizations through secure
								technologies that protect the identity of the source.Using
								transparency and civil participation, it aims to build a fairer
								and more democratic society.
							</p>
						</div>
					</section>
					<section className='goalSection'>
						<div className='loGo'>
							<img
								src='/assets/dubbing.png'
								alt='logo here'
								className='how_img'
							/>
						</div>
						<div className='conTent'>
							<h3 className='contentTitle'>WE ARE YOUR VOICE</h3>
							<p className='contentParagraph'>
								The information received through
								<span className='works_SayIT'>SayIT</span> will be verified,
								analyzed and published by the partners of our alliance, made up
								of Security Agencies and Civil society organizations. The main
								goal is that the impact of the information revealed is amplified
								i.e. sent to Agencies for approvals.
							</p>
						</div>
					</section>
					<section className='goalSection'>
						<div className='loGo'>
							<img
								src='/assets/unknown.png'
								alt='logo here'
								className='how_img'
							/>
						</div>
						<div className='conTent'>
							<h3 className='contentTitle'>SECURITY</h3>
							<p className='contentParagraph'>
								Anonymity is an integral part of our project. It is essential
								that all instructions on this site are followed closely so that
								the identity of the whistleblower is protected.
							</p>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default WhyUS;
