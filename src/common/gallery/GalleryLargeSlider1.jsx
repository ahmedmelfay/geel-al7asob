import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import { Link } from 'react-router-dom';


import '../../App.css'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const GalleryLargeSlider1 = (props) => {

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
	{/* <!-- Gallery Large Slider One - START --> */}
	<div className="gallery-large-block-outer">
			<div className="mfp-gallery slider-for">
				  <Slider
					{...settings}
					asNavFor={nav2}
					ref={(slider) => setSlider1(slider)}
				  >
						{props.Images.map((item, index) => (										  
							  
							  <div key={item.id}> 
									<div className="gallery-large">
										<div className="gallery-large-media"><img src={item.src} alt={item.alt} className="" /></div>
										<div className="gallery-large-info">
											<div className="gallery-large-control text-white">
												<ul>
													<li><Link onClick={() => openLightboxOnSlide(2)} className=""><i className="fa fa-search-plus"></i></Link></li>
													<li><Link to={item.src}><i className="flaticon-chain-links"></i></Link></li>
												</ul>
											</div>
											<h3 className="g-title site-text-white">{item.title}</h3>
										</div>
									</div>
							  </div>																  
						))}
				  </Slider>
				 
			</div>
			
			
		  <div  className="gallery-large-thumb slider-nav">
				
				  
				 <Slider
				  {...thumbnailSettings}
				  asNavFor={nav1}
				  ref={(slider) => setSlider2(slider)}
				  
				>				
				  {props.Images.map((item) => (
				  
				  	<div key={item.id}>
						<div className="gallery-thumb">
							<div className="gallery-thumb-media"><img src={item.src} alt={item.alt} className="" /></div>
						</div>
				    </div>
				  
				  ))}
				</Slider>                                                                                                                                       
			 
			</div>
	
	</div>
	
	{/* <!-- Gallery Large Slider One - END --> */}
    </>
    )
}
export default GalleryLargeSlider1;