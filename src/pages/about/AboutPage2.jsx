import React from 'react'
import { Link } from 'react-router-dom'
import About2SectionHowItWork from './sections/section_about2/About2SectionHowItWork';
import About2SectionProduct from './sections/section_about2/About2SectionProduct';
import About2SectionOurBlog from './sections/section_about2/About2SectionOurBlog';
import About2SectionTestimonial from './sections/section_about2/About2SectionTestimonial';

var one = require('../../assets/images/banner/1.jpg');
const AboutSection2 = (props) => {
	  	
    return(
	<>
		  {/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${one})`}}>
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
								<li>About2</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		<About2SectionHowItWork />
		<About2SectionProduct />
		<About2SectionOurBlog />
		<About2SectionTestimonial />
    </>
    )
}
export default AboutSection2;