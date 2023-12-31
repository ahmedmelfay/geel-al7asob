import React from 'react'
import { Link } from 'react-router-dom';
import AboutSectionAbout from './sections/section_about1/AboutSectionAbout';
import AboutSectionAboutQuality from './sections/section_about1/AboutSectionAboutQuality';
import AboutSectionOurTeam from './sections/section_about1/AboutSectionOurTeam';
import AboutSectionClientLogo from './sections/section_about1/AboutSectionClientLogo';
import AboutSectionVideoGallery from './sections/section_about1/AboutSectionVideoGallery';

var three = require('../../assets/images/banner/3.jpg');

const AboutPage1 = (props) => {
	  	
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${three})`}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">About Us</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>About</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		<AboutSectionAbout />
		<AboutSectionAboutQuality />
		<AboutSectionOurTeam />
		<AboutSectionClientLogo />
		<AboutSectionVideoGallery />
		
    </>
    )
}
export default AboutPage1;