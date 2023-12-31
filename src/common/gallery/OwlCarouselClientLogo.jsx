import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarouselClientLogo = (props) => {	
	 const options = {
	 	loop:true,
		nav:false,
		dots: false,				
		margin:10,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:6
			}
		}
    };
  	
    return(
	<>
	{/* <!-- CLIENT LOGO SECTION START --> */}
	<div className="section-full bg-white p-tb50">
		<div className="container-fluid">
	
			 <div className="section-content p-tb30 owl-btn-vertical-center">
				
				<OwlCarousel className="owl-carousel home-client-carousel-2" {...options}>				
				{props.Images.map((item, index) => (	
				
					<div className="item" key={index}>
						<div className="ow-client-logo">
							<div className="client-logo client-logo-media">
							<Link to={item.url}><img src={item.src} alt={item.alt} /></Link></div>
						</div>
					</div>
				
				 ))}					
				</OwlCarousel>																									                                                                    									
			</div>
	
		</div>
	</div>
	{/* <!-- CLIENT LOGO  SECTION End --> */} 	 
		
    </>
    )
}
export default OwlCarouselClientLogo;