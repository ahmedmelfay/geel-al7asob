import React from 'react';

import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const OwlCarouselTestimonialSlider2 = (props) => {	
	 const options = {
	 	loop:true,
		autoplay:false,
		nav:true,
		dots: true,	
		margin:30,
		navText: ['<i class="flaticon-arrows"></i>', '<i class="flaticon-point-to"></i>'],
		responsive:{
		
			0:{
				items:1,
			},
			1400:{
				items:1
			}					
		}
    };
  	
    return(
	<>
	{/* <!--   TESTIMONIAL GALLERY SECTION START --> */} 
	<OwlCarousel className="testimonial-2-content owl-carousel arrow-dark-position-bottom dark-dotts-line center" {...options}>	
		{props.Images.map((item) => (								
			<div className="item" key={item.id}>
				<div className="testimonial-2 bg-white">
					<div className="testimonial-content">
					
						<div className="testimonial-text">
							<i className="fa fa-quote-left"></i>
							<p>Aliquam sit amet eleifend odio. Donec at dictum mi. Duis 
								  auctor, tellus a elementum pharetra, sapien magna rhoncus
								  velit, id blandit mauris dolor eu turpis. Aenean aliquam nisl 
								  aliquam, suscipit ligula sit amet, mattis libero.</p>
						</div> 
														   
						  
	
						<div className="testimonial-detail clearfix">
							<div className="testimonial-pic-block"> 
								<div className="testimonial-pic">
									<img src={item.src} alt={item.alt} />
								</div>
							</div>                                          
							<div className="testimonial-info">
								<span className="testimonial-name  title-style-2 site-text-primary">John Casey</span>
								<span className="testimonial-position title-style-2">Designer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		))}																			
		</OwlCarousel>
	
	{/* <!-- TESTIMONIAL GALLERY SECTION END --> */} 
    </>
    )
}
export default OwlCarouselTestimonialSlider2;