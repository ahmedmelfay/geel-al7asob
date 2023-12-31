import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../App.css'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import FsLightbox from "fslightbox-react";

const GalleryProductDetail = (props) => {

	   const [nav1, setNav1] = useState(null);
	   const [nav2, setNav2] = useState(null);
	   const [slider1, setSlider1] = useState(null);
	   const [slider2, setSlider2] = useState(null);
	   const [imageUrl] = useState([]);
	   var[slides]=useState(props.Images); 
       const [productIndex, setProductIndex] = useState(0);
	  
  
		useEffect(() => {					   
			setNav1(slider1);
			setNav2(slider2);	   			   
			const fetchData = async () => {  		
				slides.forEach(item => {
					imageUrl.push(item.src)		
				})
			}
			fetchData();			
		}, [slider1, slider2, slides, imageUrl])
	  
	  
	  
	  const settings = {
		infinite: true,
		arrows:true,
		centerPadding: "0px",
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		
		asNavFor: ".slider-nav",
		focusOnSelect: true,
		
		nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
		
	  };
	  const thumbnailSettings = {
		slidesToShow: 4,
		arrows:false,
		slidesToScroll: 1,
		asNavFor: ".slider-for",
		swipeToSlide: true,
		focusOnSelect: true,
	  };
	  
	  function SampleNextArrow(props) {
		  const { className, style, onClick } = props;
		  return (			
				<div
				  className={className}
				  style={{ ...style, display: "block", background: "#191919" }}
				  onClick={onClick}
				>
				<FontAwesomeIcon icon={faAngleRight} />
				</div>
			
		  );
		}
		
		
	function SamplePrevArrow(props) {
		  const { className, style, onClick } = props;
		  return (
			<div
			  className={className}
			  style={{ ...style, display: "block", background: "#191919" }}
			  onClick={onClick}
			>
				<FontAwesomeIcon icon={faAngleLeft} />
			</div>
		  );
		}
		
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
	
	{/* <!-- Gallery Large Slider One - START --> */}
	<div className="" id="sync1">
			<div className="mfp-gallery slider-for">
				  <Slider
					{...settings}
					asNavFor={nav2}
					ref={(slider) => setSlider1(slider)}
					
				  >
						{props.Images.map((item, index) => (										  
					
							<div className="item" key={index}>
								<div className="mfp-gallery">
									<div className="wt-box">
										<div className="wt-thum-bx wt-img-overlay1">
										   <img src={item.src} alt={item.alt} className="" onClick={() => setProductIndex(item.id)} />
											<div className="overlay-bx">
												<div className="overlay-icon">
													<Link className="mfp-link1" onClick={() => openLightboxOnSlide(item.id)} >
														<i className="fa fa-arrows-alt wt-icon-box-xs"></i>
													</Link>
											  </div>
											</div>
										</div>
									</div>
								</div>
							</div>
																		  
						))}
				  </Slider>	
				   <FsLightbox toggler={lightboxController.toggler} sources={imageUrl} slide={lightboxController.slide} key={productIndex} />				 
			</div>
			
			
		  <div  className="slider-nav" id="sync2">
				
				  
				 <Slider
				  {...thumbnailSettings}
				  asNavFor={nav1}
				  ref={(slider) => setSlider2(slider)}
				  
				>				
				  {props.Images.map((item, index) => (
				  
				  	<div key={index}>
						<div className="wt-media">
							<img src={item.thumb} alt={item.alt} className="" />
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
export default GalleryProductDetail;