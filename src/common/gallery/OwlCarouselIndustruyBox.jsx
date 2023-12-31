import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../App.css";
const OwlCarouselIndustruyBox = (props) => {	
	 const options = {
	 	items:3,
      	loop:true,
		autoplay:true,
		nav:false,
		dots: true,
		dotsEach:true,
		dotData:true,	
		margin:30,
		itemElement:'div',
		
		navText: ['<i className="fa fa-chevron-left"></i>', '<i className="fa fa-chevron-right"></i>'],
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
	<div className="section-full p-t80 p-b80 bg-gray">							   
		<div className="section-content container">
			<OwlCarousel className="dark-dotts-line center m-b50" {...options}>
							
				{props.Images.map((item) => (				
					<div className="item" key={item.id}>
						<div className="project-img-effect-1">
							<img src={item.src} alt={item.alt} className="" />
							<div className="wt-info  bg-white p-a20">
								<h3 className="wt-tilte m-b10 m-t0">{item.title}</h3>
								<p>{item.description}</p>
								<Link to="/project-detail" className="site-button-link site-text-primary">Read More</Link>
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
export default OwlCarouselIndustruyBox;