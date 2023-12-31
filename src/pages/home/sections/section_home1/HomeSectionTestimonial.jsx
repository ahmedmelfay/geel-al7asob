import React from 'react';
import OwlCarouselTestimonialSlider from "../../../../common/gallery/OwlCarouselTestimonialSlider";
import ImagesOwlCarouselTestimonial from "../../../../data/ImagesOwlCarouselTestimonial";

var bg2 = require('../../../../assets/images/background/bg-2.jpg');
var testimonial = require('../../../../assets/images/d-testimonial.png');

const HomeSectionTestimonial = (props) => {	  	
    return(
	<>
	{/*<!-- TESTIMONIAL SECTION START -->*/}
	<div className="section-full  p-t80 p-b50 testimonial-1-outer bg-cover bg-center bg-image-moving" style={{backgroundImage:`url(${bg2})`}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-5 col-md-12">
					{/*<!-- TITLE START-->*/}
					<div className="left wt-small-separator-outer text-white">
						<div className="wt-small-separator">
							<div  className="sep-leaf-left"></div>
							<div>Client Feedback</div>
							<div  className="sep-leaf-right"></div>
						</div>
						<h2>What Some People Say About Us.</h2>
					</div>
					{/*<!-- TITLE END-->*/}                        
				</div>
		   </div>
	
		
			<div className="section-content"> 
				<div className="row testimonial-1-content-outer">
					<div className="col-lg-6 col-md-12">
						<div className="animated-left-drone">
							<div className="animated-left-drone-media"><img src={testimonial} alt="" className="slide-top" /></div>
						</div>
					</div>
					
					<OwlCarouselTestimonialSlider Images={ImagesOwlCarouselTestimonial}  />						
					
				</div>  
			</div>                   
	
		</div>                
	</div>
	{/*<!-- TESTIMONIAL SECTION END -->*/} 
    </>
    )
}
export default HomeSectionTestimonial;