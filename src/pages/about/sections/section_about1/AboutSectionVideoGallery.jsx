import React from 'react';

import OwlCarouselVideoGallery from "../../../../common/gallery/OwlCarouselVideoGallery";
import ImagesOwlCarouselVideoGallery from "../../../../data/ImagesOwlCarouselVideoGallery";


const AboutSectionVideoGallery = (props) => {	
		
    return(
	<>	 
	 { /* <!-- GALLERY SECTION START --> */}
		<div className="section-full  p-t80 p-b80 site-bg-primary">
			<div className="container">
			
				<div className="wt-separator-two-part">
					<div className="row wt-separator-two-part-row text-white">
						<div className="col-lg-5 col-md-6 wt-separator-two-part-left">
							{ /* <!-- TITLE START--> */}
							<div className="section-head left wt-small-separator-outer">
								<div className="wt-small-separator text-white">
									<div  className="sep-leaf-left"></div>
									<div>video gallery</div>
									<div  className="sep-leaf-right"></div>
								</div>
								<h2>Visit our best video gallery</h2>
							</div>
							{ /* <!-- TITLE END--> */}
						</div>

						
						<div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
							<p>There are many variations of passages of lorem Ipsum available, but the majority have 
suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
							
						</div>
													
					</div>
				</div>
			 </div>
			 
			 <OwlCarouselVideoGallery Images={ImagesOwlCarouselVideoGallery}  />	
			 
			</div>
		{ /* <!-- GALLERY SECTION END --> */} 	 
    </>
    )
}
export default AboutSectionVideoGallery;