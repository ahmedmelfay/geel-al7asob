import React, { useEffect } from 'react';

import Slider4 from './slider/HomeSlider4';
import Home4SectionAbout from './sections/section_home4/Home4SectionAbout';
import Home4SectionAboutQuality from './sections/section_home4/Home4SectionAboutQuality';
import Home4SectionAllServices from './sections/section_home4/Home4SectionAllServices';
import Home4SectionVideoGallery from './sections/section_home4/Home4SectionVideoGallery';
import Home4SectionOurBlog from './sections/section_home4/Home4SectionOurBlog';
import Home4SectionOurTeam from './sections/section_home4/Home4SectionOurTeam';
import Home4SectionTestimonial from './sections/section_home4/Home4SectionTestimonial';
import Home4SectionClientLogo from './sections/section_home4/Home4SectionClientLogo';

const HomePage4 = (props) => {	  
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = `${process.env.PUBLIC_URL}/externaljs/js/rev-script-4.js`;
		script.async = true;
	
		document.body.appendChild(script);
	
		return () => {
		  document.body.removeChild(script);
		}
	  }, []);	
    return(
	<>

		<Slider4 />
		<Home4SectionAbout />
		<Home4SectionAboutQuality />
		<Home4SectionAllServices />
		<Home4SectionVideoGallery />
		<Home4SectionOurBlog />
		<Home4SectionOurTeam />
		<Home4SectionTestimonial />
		<Home4SectionClientLogo />

    </>
    )
}

export default HomePage4;