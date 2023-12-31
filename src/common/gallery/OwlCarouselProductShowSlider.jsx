import React from 'react';
import { Link } from 'react-router-dom';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import LikeButton from '../../common/like/LikeButton';

const OwlCarouselProductShowSlider = (props) => {	
	 const options = {
	 	loop:true,
		autoplay:true,
		nav:true,
		dots: false,
		center:true,	
		margin:10,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ffffff}</style><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ffffff}</style><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>'],
		responsive:{
			0:{
				items:1,
			},
			640:{
				items:1,
			},			
			768:{
				items:2,
     		},				
			991:{
				items:2,
			},
			1366:{
				items:2,
			},			
			1400:{
				items:3
			}		
		}
    };
  	
    return(
	<>
	{/* <!-- GALLERY SECTION START --> */}
	<div className="product-one-slider p-b80">	
					   
			<div className="section-content"> 				
				<OwlCarousel className="owl-carousel product-show-slider owl-btn-vertical-center" {...options}>						
					{props.Images.map((item) => (				
						<div className="item" key={item.id}>
							<div className="product-showcase">
								<div className="product-show-media">
									<img src={item.src} alt={item.alt} className="" />
								</div>
								<div className="product-show-block">
									<div className="product-show-info shadow">
										<div className="p-price">$90 <del>$149</del></div>
										<div className="p-title"><h3 className="wt-title">Dronezy 300X</h3></div>
										<div className="p-specification">
											<ul>
												<li><span className="p-specification-title"> Range</span>4.5 Km</li>
											</ul>
										</div>
										<div className="p-control">
											<ul>
												
												<li><Link to="/#"><LikeButton/></Link></li>
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
	</div>
	{/* <!-- GALLERY SECTION END --> */}	
    </>
    )
}
export default OwlCarouselProductShowSlider;