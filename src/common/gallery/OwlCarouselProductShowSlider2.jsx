import React from 'react';
import { Link } from 'react-router-dom';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import LikeButton from '../../common/like/LikeButton';

const OwlCarouselProductShowSlider2 = (props) => {	
	 const options = {
	 	loop:true,
		autoplay:false,
		nav:false,
		dots: true,
		center:true,	
		margin:10,
		navText: ['<i className="fa fa-long-arrow-left"></i>', '<i className="fa fa-long-arrow-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			640:{
				items:1,
			},			
			767:{
				items:2,
     		},				
			991:{
				items:2,
			},
			1366:{
				items:2,
			},			
			1400:{
				items:2
			}		
		}
    };
  	
    return(
	<>
	{/* <!-- GALLERY SECTION START --> */}
	<div className="product-one-slider2 p-b50">
		<OwlCarousel className="owl-carousel product-show-slider2 dark-dotts-line center" {...options}>	
		 {props.Images.map((item) => (	
			<div className="item" key={item.id}>
				<div className="product-showcase2">
					<div className="product-show-media2">
						<img src={item.src} alt={item.alt} className="" />
					</div>
					<div className="product-show-block2">
						<div className="product-show-info2 shadow">
							<div className="p-price2">$90 <del>$149</del></div>
							<div className="p-title2"><h3 className="wt-title">Dronezy 300X</h3></div>
							<div className="p-specification2">
								<ul>
									<li><span className="p-specification-title2"> Range</span>4.5 Km</li>
								</ul>
							</div>
							<div className="p-control2">
								<ul>								
									<li><Link to="/home3#home3"><LikeButton/></Link></li>
									<li><Link to="/shopping-cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
									
								</ul>
							</div>                                            
						</div>
					</div>                                    
				</div>
			</div>
			
		  
		 ))}							
		</OwlCarousel>	
	</div>
	
	{/* <!-- GALLERY SECTION END --> */}	
    </>
    )
}
export default OwlCarouselProductShowSlider2;