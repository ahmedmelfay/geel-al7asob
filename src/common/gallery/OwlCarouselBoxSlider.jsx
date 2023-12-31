import React, { useState } from 'react';
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
import FsLightbox from "fslightbox-react";
const OwlCarouselBoxSlider = (props) => {	
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
			640:{
				items:2,
			},			
			767:{
				items:2,
     		},				
			991:{
				items:3,
			},
			1024:{
				items:3,
			},	
			
			1200:{
				items:4,
			},					
			1366:{
				items:4,
			},			
			1400:{
				items:5
			}		
		}
    };
  	
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	 });

	 function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	 }
	 
    return(
	<>
	<FsLightbox
		toggler={lightboxController.toggler}
		sources={props.Images.map((image) => image.src)}
		slide={lightboxController.slide}
	/>
	{/* <!-- GALLERY SECTION START --> */}
	<OwlCarousel className="owl-carousel gallery-slider owl-btn-vertical-center mfp-gallery" {...options}>
		{props.Images.map((item, index) => (
			<div className="item" key={item.id}>
				<div className="galleryhvr-zoom-out-down">
					
					<img src={item.src} alt={item.alt} className="" />
					<div className="galleryhvr-content">
						<div className="galleryhvr-mid">
							<h3 className="wt-title">Event photography</h3>
							<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time.</p>
							<Link to="/services-detail"><i className="flaticon-chain-links"></i></Link>
							<Link onClick={() => openLightboxOnSlide(1)} className="mfp-link1"><i className="fa fa-search-plus"></i></Link>
						</div>
					</div>
					
				</div>                         
			</div>		
											  						   
			  								  
		))}					
	</OwlCarousel>

	{/* <!-- GALLERY SECTION END --> */}	
    </>
    )
}
export default OwlCarouselBoxSlider;