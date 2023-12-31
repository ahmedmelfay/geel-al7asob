import React from 'react';
import GalleryLargeSlider1 from "../../../../common/gallery/GalleryLargeSlider1";
import ImagesLargeSlider1 from '../../../../data/ImagesLargeSlider1';
var bg3 = require('../../../../assets/images/background/bg3.jpg');
const Gallery3SectionBastVideoGallery = (props) => {	  	
    return(
	<>
	{/*<!-- GALLERY SECTION START --> */}
	
	<div className="section-full  p-t80 p-b80 overlay-wraper bg-cover bg-no-repeat" style={{backgroundImage:`url(${bg3})`}}>
		<div className="overlay-main bg-black opacity-09"></div>
		<div className="container">
		
			<div className="wt-separator-two-part">
				<div className="row wt-separator-two-part-row text-white">
					<div className="col-lg-5 col-md-6 wt-separator-two-part-left">
						{/*<!-- TITLE START--> */}
						<div className="section-head left wt-small-separator-outer">
							<div className="wt-small-separator text-white">
								<div  className="sep-leaf-left"></div>
								<div>video gallery</div>
								<div  className="sep-leaf-right"></div>
							</div>
							<h2>Visit our best video gallery</h2>
						</div>
						{/*<!-- TITLE END--> */}
					</div>
	
					
					<div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
						<p>There are many variations of passages of lorem Ipsum available, but the majority have 
	suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
						
					</div>
												
				</div>
			</div>
		 </div>
		<div className="section-content">     
			<div className="container">
				
					<GalleryLargeSlider1 Images={ImagesLargeSlider1}  />				
				
			</div>
		</div>
	   
	 </div>   
	
	{/*<!-- GALLERY SECTION END --> */}  	 
    </>
    )
}
export default Gallery3SectionBastVideoGallery;