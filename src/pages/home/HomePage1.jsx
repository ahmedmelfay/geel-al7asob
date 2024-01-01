import React, { useEffect } from 'react';

import Slider from './slider/HomeSlider';
import HomeSectionHowItWork from './sections/section_home1/HomeSectionHowItWork';
import HomeSectionAbout from './sections/section_home1/HomeSectionAbout';
import HomeSectionAboutQuality from './sections/section_home1/HomeSectionAboutQuality';
import HomeSectionProduct from './sections/section_home1/HomeSectionProduct';
import HomeSectionVideoGallery from './sections/section_home1/HomeSectionVideoGallery';
import HomeSectionOurTeam from './sections/section_home1/HomeSectionOurTeam';
import HomeSectionTestimonial from './sections/section_home1/HomeSectionTestimonial';
import HomeSectionOurBlog from './sections/section_home1/HomeSectionOurBlog';
import HomeSectionClientLogo from './sections/section_home1/HomeSectionClientLogo';
const HomePage1 = (props) => {	
	
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = `${process.env.PUBLIC_URL}/externaljs/js/rev-script-1.js`;
		script.async = true;
	
		document.body.appendChild(script);
    document.title = "Hasoup | Home";

		return () => {
		  document.body.removeChild(script);
		}
	  }, []);
		
    return(
	<>
	
		 <Slider />	
		 <HomeSectionHowItWork />
		 <HomeSectionAbout />
		 <HomeSectionAboutQuality />
		 <HomeSectionProduct />	
		 <HomeSectionVideoGallery /> 
		 <HomeSectionOurTeam />
		 <HomeSectionTestimonial />
		 <HomeSectionOurBlog />
		 <HomeSectionClientLogo />
		 
	
    </>
    )
}
export default HomePage1;