import React from 'react';
import OwlCarouselClientLogo from "../../../../common/gallery/OwlCarouselClientLogo";
import ImagesOwlCarouselClientLogo from "../../../../data/ImagesOwlCarouselClientLogo";


const AboutSectionClientLogo = (props) => {	  	
    return(
	<>
	{/* <!-- CLIENT LOGO SECTION START --> */}
		<OwlCarouselClientLogo Images={ImagesOwlCarouselClientLogo}  />						
	{/* <!-- CLIENT LOGO  SECTION End --> */} 	 
    </>
    )
}
export default AboutSectionClientLogo;