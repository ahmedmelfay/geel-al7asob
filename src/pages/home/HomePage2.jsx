import React, { useEffect } from 'react';

import HomeSlider2 from './slider/HomeSlider2';
import Home2SectionHowItWork from './sections/section_home2/Home2SectionHowItWork';
import Home2SectionAbout from './sections/section_home2/Home2SectionAbout';
import Home2SectionGallery from './sections/section_home2/Home2SectionGallery';
import Home2SectionCounter from './sections/section_home2/Home2SectionCounter';
import Home2SectionOurTeam from './sections/section_home2/Home2SectionOurTeam';
import Home2SectionAboutQuality from './sections/section_home2/Home2SectionAboutQuality';
import Home2SectionOurBlog from './sections/section_home2/Home2SectionOurBlog';
import Home2SectionPricingTable from './sections/section_home2/Home2SectionPricingTable';
import Home2SectionTestimonial from './sections/section_home2/Home2SectionTestimonial';
import Home2SectionClientLogo from './sections/section_home2/Home2SectionClientLogo';

const HomePage2 = (props) => {	
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = `${process.env.REACT_APP_PUBLIC_URL}/externaljs/js/rev-script-3.js`;
		script.async = true;
	
		document.body.appendChild(script);
	
		return () => {
		  document.body.removeChild(script);
		}
	  }, []);
    return(
	<>
		<HomeSlider2/>
		<Home2SectionAbout />
		<Home2SectionHowItWork />
		<Home2SectionGallery />
		<Home2SectionCounter />
		<Home2SectionOurTeam />
		<Home2SectionAboutQuality />
		<Home2SectionOurBlog />
		<Home2SectionPricingTable />
		<Home2SectionTestimonial />
		<Home2SectionClientLogo />	 	
    </>
    )
}

export default HomePage2;