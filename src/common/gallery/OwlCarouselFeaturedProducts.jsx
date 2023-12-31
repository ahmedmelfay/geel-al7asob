import React from 'react';
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
const OwlCarouselFeaturedProducts = (props) => {	


	 const options = {
	 	loop:true,
		autoplay:true,
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
			}	
		}
    };
  	 
    return(
	<>
	{/* <!-- GALLERY SECTION START --> */}
	<OwlCarousel className="owl-carousel featured-products owl-btn-vertical-center" {...options}>
		{props.Images.map((item) => (

			<div className="item" key={item.id}>
				<div className="wt-box wt-product-box   overflow-hide">
					<div className="wt-thum-bx wt-img-overlay1">
						<img src={item.src} alt={item.alt} className="" />
						<div className="overlay-bx">
							<div className="overlay-icon">
								<Link to="/#">
									<i className="fa fa-cart-plus wt-icon-box-xs"></i>
								</Link>
								<Link className="mfp-link" href="/#">
									<i className="fa fa-heart wt-icon-box-xs"></i>
								</Link>
						  </div>
						</div>
					</div>
					<div className="wt-info">
						 <div className="p-a20 bg-white">
							<h3 className="wt-title">
								<Link to="product-detail.html">{item.title}</Link>
							</h3>
							
							<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
							<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div> 
																																 
							<span className="price">
								<ins>
									<span><span className="Price-currencySymbol">$ </span>49.00</span>
								</ins>
							</span>


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
export default OwlCarouselFeaturedProducts;