import React from 'react';

import OwlCarouselBoxSlider from "../../../../common/gallery/OwlCarouselBoxSlider";
import ImagesOwlCarouselBoxSlider from "../../../../data/ImagesOwlCarouselBoxSlider";

const Gallery3SectionDroneGallery = (props) => {	  	
    return(
	<>
	{/* <!-- GALLERY SECTION START --> */}
	<div className="section-full p-t80 p-b80 bg-white">
		<div className="container">
			{/* <!-- TITLE START--> */}
			<div className="section-head center wt-small-separator-outer">
				<div className="wt-small-separator site-text-primary">
					<div className="sep-leaf-left"></div>
					<div>Drone Gallery</div>
					<div className="sep-leaf-right"></div>
				</div>
				<h2>Gallery 3</h2>
			</div>
			{/* <!-- TITLE END--> */}
		</div> 
							   
		<div className="section-content container-fluid"> 
			
			<OwlCarouselBoxSlider Images={ImagesOwlCarouselBoxSlider}  />	
			
		</div>                                        
	
	</div>   
	{/* <!-- GALLERY SECTION END --> */}	 
    </>
    )
}
export default Gallery3SectionDroneGallery;