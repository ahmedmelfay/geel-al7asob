import React, { useEffect } from 'react';

import Slider3 from './slider/HomeSlider3';
import Home3SectionHowItWork from './sections/section_home3/Home3SectionHowItWork';
import Home3SectionAbout from './sections/section_home3/Home3SectionAbout';
import Home3SectionAboutQuality from './sections/section_home3/Home3SectionAboutQuality';
import Home3SectionProduct from './sections/section_home3/Home3SectionProduct';
import Home3SectionVideoGallery from './sections/section_home3/Home3SectionVideoGallery';
import Home3SectionOurBlog from './sections/section_home3/Home3SectionOurBlog';
import Home3SectionOurTeam from './sections/section_home3/Home3SectionOurTeam';
import Home3SectionTestimonial from './sections/section_home3/Home3SectionTestimonial';
import Home3SectionClientLogo from './sections/section_home3/Home3SectionClientLogo';

const HomePage3 = (props) => {
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = `${process.env.PUBLIC_URL}/externaljs/js/rev-script-2.js`;
		script.async = true;
	
		document.body.appendChild(script);
	
		return () => {
		  document.body.removeChild(script);
		}
	  }, []);
    return(
	<>

		<Slider3 />
		<Home3SectionHowItWork />
		<Home3SectionAbout />
		<Home3SectionAboutQuality />
		<Home3SectionProduct />
		<Home3SectionVideoGallery />
		<Home3SectionOurBlog />
		<Home3SectionOurTeam />
		<Home3SectionTestimonial />
		<Home3SectionClientLogo />
		
    </>
    )
}

export default HomePage3;