import React from 'react';
import { Link } from 'react-router-dom';
import MyReactModal3 from '../../../../common/react_modal/MyReactModal3';
var bg3 = require('../../../../assets/images/background/bg-3.jpg');
var media1 = require('../../../../assets/images/video/media1.jpg');


const Home3SectionAboutQuality = (props) => {	  	
    return(
	<>
	{/*<!-- QUALITY SECTION START -->*/}
	<div className="section-full p-t80 bg-white bg-no-repeat bg-half-right" style={{backgroundImage:`url(${bg3})`}}>
		
		<div className="container">
		
			<div className="wt-separator-two-part">
				<div className="row wt-separator-two-part-row">
					<div className="col-lg-5 col-md-6 wt-separator-two-part-left">
						{/*<!-- TITLE START-->*/}
						<div className="section-head left wt-small-separator-outer">
							<div className="wt-small-separator site-text-primary">
								<div  className="sep-leaf-left"></div>
								<div>About Quality</div>
								<div  className="sep-leaf-right"></div>
							</div>
							<h2>We're about Quality and Trust.</h2>
						</div>
						{/*<!-- TITLE END-->*/}
					</div>
			  
				</div>
			</div>
		 </div>
					 
		<div className="section-content">
			<div className="container">
				
				<div className="quality-video-section2">
					
					<div className="quality-video2">
						<div className="quality-video-media"><img src={media1} alt=""/>

							 <MyReactModal3 videoId="c1XNqw2gSbU" channel="youtube" />
							 
							
						</div>
						<div className="quality-video-info">
						 <div className="wt-box d-icon-box-one bg-white shadow hover-line-effect-one">
						
							<div className="wt-icon-box-wraper m-b40">
								<div className="icon-xl inline-icon">
									<span className="icon-cell site-text-primary"><i className="flaticon-panorama"></i></span>
								</div>
							</div> 
									
							<div className="d-icon-box-title title-style-2 site-text-secondry">
								<h3 className="s-title-one">Intro Office Video</h3>
							</div>
							
							<div className="d-icon-box-content">
								<p>The majority have suffered alteration in some form, by injected humour, words.</p>
								<Link to="/" className="site-button-link site-text-primary">Read More</Link>
							</div>
							
						   
																		
						</div>
						</div>
														   
					</div>
				</div>
	
			</div>
		</div>      
	</div>   
	{/*<!-- QUALITY SECTION END -->*/}     		 
    </>
    )
}
export default Home3SectionAboutQuality;