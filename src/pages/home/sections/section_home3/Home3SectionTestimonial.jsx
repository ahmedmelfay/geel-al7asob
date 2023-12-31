import React from 'react';
import OwlCarouselTestimonialSlider2 from "../../../../common/gallery/OwlCarouselTestimonialSlider2";
import ImagesOwlCarouselTestimonial from "../../../../data/ImagesOwlCarouselTestimonial";

var bg2 = require('../../../../assets/images/background/bg-2.jpg');
var testimonial = require('../../../../assets/images/d2-testimonial.png');

const Home3SectionTestimonial = (props) => {	  	
    return(
	<>
	<div className="section-full  p-t80 p-b80 testimonial-2-outer bg-cover bg-center bg-image-moving overflow-hidden" style={{backgroundImage:`url(${bg2})`}}>
		<div className="animated-right-drone">
			<div className="animated-right-drone-media"><img src={testimonial} alt="" className="slide-top" /></div>
		</div>            
		<div className="container bg-right-half-block-outer">
			<div className="bg-right-half-block"></div>
	
			<div className="row testimonial-2-content-outer">
				<div className="col-lg-5 col-md-12">
					{/* <!-- TITLE START --> */}
					<div className="left wt-small-separator-outer text-white">
						<div className="wt-small-separator">
							<div  className="sep-leaf-left"></div>
							<div>Client Feedback</div>
							<div  className="sep-leaf-right"></div>
						</div>
						<h2>What Some People Say About Us.</h2>
					</div>
					{/* <!-- TITLE END--> */}                            
	
				</div>
				<div className="col-lg-7 col-md-12">
					<div className="testimonial2-block-position-outer">
						<div className="testimonial2-block-position">
							
							<OwlCarouselTestimonialSlider2 Images={ImagesOwlCarouselTestimonial}  />	
							
						</div>
					</div>
				</div>
			</div>                     
	
		</div>  
		<div className="testimonial-outline-text">
			<span className="title-style-2">Testimonial</span>
		</div>              
	</div>
	
	{/*<!-- TESTIMONIAL SECTION END -->*/} 
    </>
    )
}
export default Home3SectionTestimonial;