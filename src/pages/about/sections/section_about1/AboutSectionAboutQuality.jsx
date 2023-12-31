import React from 'react';
import { Link } from 'react-router-dom';

import MyReactModal from '../../../../common/react_modal/MyReactModal';
var bg1 = require('../../../../assets/images/background/bg-1.jpg');
const AboutSectionAboutQuality = (props) => {	  	
    return(
	<>
	{/* <!-- QUALITY SECTION START --> */}
	<div className="section-full p-t80 overlay-wraper bg-top-center bg-center" style={{backgroundImage:`url(${bg1})`}}>
		<div className="overlay-main bg-black opacity-08"></div>
		<div className="container">
			{/* <!-- TITLE START--> */}
			<div className="section-head center wt-small-separator-outer text-center text-white">
				<div className="wt-small-separator site-text-white">
					<div  className="sep-leaf-left"></div>
					<div>About Quality</div>
					<div  className="sep-leaf-right"></div>
				</div>
				<h2>We're about Quality and Trust.</h2>
			</div>
			{/* <!-- TITLE END--> */}
		</div>  
					 
		<div className="section-content quality-section-outer bg-white">
			<div className="container">
				<div className="quality-section-content">
					<div className="row justify-content-center">
											   
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="corner-line">
								<div className="wt-box d-icon-box-one bg-white shadow ">
								
									<div className="wt-icon-box-wraper m-b40">
										<div className="icon-xl inline-icon">
											<span className="icon-cell site-text-primary"><i className="flaticon-quality"></i></span>
										</div>
									</div> 
											
									<div className="d-icon-box-title title-style-2 site-text-secondry">
										<h3  className="s-title-one">How To Use Battery</h3>
									</div>
									
									<div className="d-icon-box-content">
										<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
										<Link to="/"  className="site-button-link site-text-primary">Read More</Link>
									</div>
																				
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="corner-line">                                    
								<div className="wt-box d-icon-box-one bg-white shadow ">
								
									<div className="wt-icon-box-wraper m-b40">
										<div className="icon-xl inline-icon">
											<span className="icon-cell site-text-primary"><i className="flaticon-premium"></i></span>
										</div>
									</div> 
											
									<div className="d-icon-box-title title-style-2 site-text-secondry">
										<h3  className="s-title-one">How To Play Video</h3>
									</div>
									
									<div className="d-icon-box-content">
										<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>										
										<Link to="/"  className="site-button-link site-text-primary">Read More</Link>
									</div>
																				
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="corner-line">                                    
								<div className="wt-box d-icon-box-one bg-white shadow ">
								
									<div className="wt-icon-box-wraper m-b40">
										<div className="icon-xl inline-icon">
											<span className="icon-cell site-text-primary"><i className="flaticon-shield"></i></span>
										</div>
									</div> 
											
									<div className="d-icon-box-title title-style-2 site-text-secondry">
										<h3  className="s-title-one">How To Use Controler</h3>
									</div>
									
									<div className="d-icon-box-content">
										<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>										
										<Link to="/"  className="site-button-link site-text-primary">Read More</Link>
									</div>
																				
								</div>
							</div>
						</div>         
													
					</div>
				</div>
				
				<div className="quality-video-section">
					<span>Delivering help and hope to people through sponsorship</span>
					<div className="quality-video">					
						
						<MyReactModal videoId="c1XNqw2gSbU" channel="youtube" />
						                            
					</div>
				</div>
	
			</div>
		</div>      
	</div>   
	{/* <!-- QUALITY SECTION END --> */}  		 
    </>
    )
}
export default AboutSectionAboutQuality;