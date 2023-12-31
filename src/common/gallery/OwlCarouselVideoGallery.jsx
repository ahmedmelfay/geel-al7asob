import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../App.css";
import ReactPlayer from 'react-player'
import  ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css';

import { Link } from 'react-router-dom';
const Product = ({ item, onClick }) => (		   
		    <Link onClick={() => onClick(item)} className="mfp-video site-bg-primary">
				<i className="fa fa-play"></i>				
			</Link>
		   
		);
const OwlCarouselVideoGallery = (props) => {	
	 const options = {
	 	items:5,
      	loop:true,
		autoplay:true,
		nav:false,
		dots: true,
		dotsEach:true,
		dotData:true,	
		margin:0,
		itemElement:'div',
		
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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
				items:3,
			},
			1366:{
				items:5,
			},			
			1400:{
				items:5
			}		
		}
    };
	const [currentProduct, setProduct] = useState(false);
    return(
	<>	
      <ModalVideo
        channel='youtube' 
		autoplay={true} 
		onClose={() => setProduct(false)}
        isOpen={Boolean(currentProduct)}
        onRequestClose={() => setProduct(false)}
      >
       <ReactPlayer url={currentProduct.video} />        
      </ModalVideo>
	 
	{/* <!-- GALLERY SECTION START --> */}
	
	<div className="section-content"> 
		<div className="video-gallery-block-outer">
			<div className="container-fluid">
				<div className="video-gallery-style1">
					<OwlCarousel className="owl-carousel video={true} videoHeight={true} videoWidth={true} video-gallery-one light-dotts-line left" {...options}>							
						
						{props.Images.map((item, index) => (				
							
							<div className="item item-video" key={item.id}>
								<div className="video-gallery-block">									
									<div className="video-media">
										<img src={item.src} alt={item.alt} />
									</div>
									<div className="video-media-info">
											<Product item={item} key={index}  onClick={setProduct} />									                                           
									</div>
									
								</div>
							</div>
																	  
						))}
																
					</OwlCarousel>
				</div>
			</div>
		</div>
	</div>		
	{/* <!-- GALLERY SECTION END --> */} 	
    </>
    )
}
export default OwlCarouselVideoGallery;