import React from 'react';
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarouselProjectDetail = (props) => {	


	 const options = {
	 	loop:true,
		autoplay:false,
		nav:true,
		dots: false,	
		margin:30,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},			
			767:{
				items:3,
			},
			1000:{
				items:3
			}
		}
    };
  	
    return(
	<>
	{/* <!-- GALLERY SECTION START --> */}
	<div className="section-full p-t80">
		<div className="container">
							   
			<div className="section-content"> 
				<OwlCarousel className="owl-carousel project-detail-slider owl-btn-vertical-center mfp-gallery" {...options}>
					{props.Images.map((item) => (										  						   
						   <div className="item" key={item.id} >
								<div className="project-img-effect-1">
									<img src={item.src} alt={item.alt} className="" />
								</div>
							</div>									  
					))}					
				</OwlCarousel>
	
			</div>   
												 
		</div>
	</div>   
	{/* <!-- GALLERY SECTION END --> */}	
    </>
    )
}
export default OwlCarouselProjectDetail;