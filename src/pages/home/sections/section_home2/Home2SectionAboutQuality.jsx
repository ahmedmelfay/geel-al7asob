import React from 'react';
import { Link } from 'react-router-dom';
import MyReactModal from '../../../../common/react_modal/MyReactModal';

var video2 = require('../../../../assets/images/video-2.jpg');

const Home2SectionAboutQuality = (props) => {	  	
    return(
	<>
	{/*<!-- ViDEO SECTION START -->*/}
	<div className="section-full bg-black p-t80 p-b50">
	
			<div className="container">
						
				<div className="section-content">
					<div className="row justify-content-center align-items-center video-style2-outer">
						<div className="col-lg-6 col-md-12  m-b30">
							<div className="video-style2-left">
								<div className="video-style2-circle-outer">
									<div className="video-style2-ring-outer  rotate-center">
										<div className="dot-circle one"></div>
										<div className="dot-circle two"></div>
										<div className="dot-circle three"></div>
									</div>
									<div className="video-style2-media">
										<img src={video2} alt="" />
											
											    <MyReactModal videoId="c1XNqw2gSbU" channel="youtube" />
												
											
									</div>                                            
								</div>
							</div>
							
						</div>
						
						<div className="col-lg-6 col-md-12 ">
							<div className="video-style2-right">
								{/*<!-- TITLE START-->*/}
								<div className="left wt-small-separator-outer text-white">
									<div className="wt-small-separator text-white">
										<div  className="sep-leaf-left"></div>
										<div>About Quality</div>
										<div  className="sep-leaf-right"></div>
									</div>
									<h2>We're about Quality and Trust.</h2>
									<p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
										  or randomised words which don't look even slightly.</p>
								</div>
								{/*<!-- TITLE END-->*/}  
								
								<Link to="/about" className="site-button site-btn-effect">Read More</Link> 
							</div>       
						</div>
						
					</div>
				</div>      
	
			</div>
	
	</div>   
	{/*<!-- VIDEO SECTION SECTION END -->*/}   		 
    </>
    )
}
export default Home2SectionAboutQuality;