import React from 'react';
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarouselTestimonialSlider = (props) => {	
	 const options = {
	 	loop:true,
		autoplay:false,
		nav:true,
		dots: true,	
		margin:30,
		navText: ['<i className="flaticon-arrows"></i>', '<i className="flaticon-point-to"></i>'],
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
	<div className="col-lg-6 col-md-12">
	<div className="testimonial-block-position-outer">
		<div className="testimonial-block-position">
			
			<OwlCarousel className="testimonial-1-content owl-carousel arrow-position-bottom  light-dotts-line center" {...options}>
				{props.Images.map((item) => (	
						
						
						<div className="item" key={item.id}>{/* <!--   TESTIMONIAL GALLERY - ITEM - START --> */}
							<div className="testimonial-1 bg-white">
								<div className="testimonial-content">
								
									<div className="testimonial-text">
										<i className="fa fa-quote-left"></i>
										<p>Aliquam sit amet eleifend odio. Donec at dictum mi. Duis 
											  auctor, tellus a elementum pharetra, sapien magna rhoncus
											  velit, id blandit mauris dolor eu turpis. Aenean aliquam nisl 
											  aliquam, suscipit ligula sit amet, mattis libero.</p>
									</div> 
																	   
									<div className="testimonial-detail clearfix site-bg-primary">
										<div className="testimonial-pic-block"> 
											<div className="testimonial-pic">
												<img src={item.src} alt={item.alt} />
											</div>
										</div>                                          
										<div className="testimonial-info text-white">
											<span className="testimonial-name  title-style-2">John Casey</span>
											<span className="testimonial-position title-style-2">Designer</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--   TESTIMONIAL GALLERY - ITEM - END --> */}
						</div>                                                                                      
						
						
						))}					
					</OwlCarousel>																			
					
				</div>
			</div>
		</div>
	
	
	{/* <!-- TESTIMONIAL GALLERY SECTION END --> */}	
    </>
    )
}
export default OwlCarouselTestimonialSlider;