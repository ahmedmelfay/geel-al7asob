import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import '../../App.css'

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const GalleryLargeSlider = (props) => {	
	  const [nav1, setNav1] = useState(null);
	  const [nav2, setNav2] = useState(null);
	  const [slider1, setSlider1] = useState(null);
	  const [slider2, setSlider2] = useState(null);
	  useEffect(() => {
		setNav1(slider1);
		setNav2(slider2);
	  },[slider1, slider2]);
	  const settings = {	  	
    	arrows:false,
		infinite: true,
		centerPadding: "0px",
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		asNavFor: ".slider-nav",
		focusOnSelect: true,
	  };
	  const thumbnailSettings = {
	   	arrows:false,
		slidesToShow: 3,
		slidesToScroll: 3,
		asNavFor: ".slider-for",
		swipeToSlide: true,
		focusOnSelect: true,
	  }; 	
    return(
	<>
	{/* <!-- Gallery Large Slider - START --> */}	
	<div className="services-large-block-outer">
		<div className="service-detail-for">
				<div className="content">		
					<div className="container">
							  <Slider
								{...settings}
								asNavFor={nav2}
								ref={(slider) => setSlider1(slider)}
							  >
									{props.Images.map((item) => (										  
										  <div key={item.id} className="services-large">
												<div className="services-large-media">
													<img src={item.src} alt={item.alt} className="" />
												</div>
												<div className="services-large-info">
													<h3 className="services-title site-text-white">{item.title}</h3>
												</div>
										   </div>										  
									))}
							  </Slider>
					</div>
				</div>
		</div>	  
		<div className="thumbnail-wrapper services-large-thumb service-detail-nav">	 
				<Slider
				  {...thumbnailSettings}
				  asNavFor={nav1}
				  ref={(slider) => setSlider2(slider)}
				  
				>				
				  {props.Images.map((item) => (
					<div key={item.id} className="services-thumb">	
						<div className="services-thumb-media">										 
						  <img src={item.src} alt={item.alt} className="" />
						</div>
					</div>
				  ))}
				</Slider>		 
		</div>
	</div>
	{/* <!-- Gallery Large Slider - END --> */}
    </>
    )
}
export default GalleryLargeSlider;