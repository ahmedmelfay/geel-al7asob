import React from 'react';
import { Link } from 'react-router-dom';
var pic1 = require('../../../../assets/images/service/pic1.jpg');
var pic2 = require('../../../../assets/images/service/pic2.jpg');
var pic3 = require('../../../../assets/images/service/pic3.jpg');
var pic4 = require('../../../../assets/images/service/pic4.jpg');
var pic5 = require('../../../../assets/images/service/pic5.jpg');
var pic6 = require('../../../../assets/images/service/pic6.jpg');

const Home4SectionAllServices = (props) => {	  	
    return(
	<>
	{/*<!-- ALL SERVICES START -->*/}
	<div className="section-full p-t80 p-b40 bg-gray">
	
	
		<div className="container">
	
			
			{/*<!-- TITLE START-->*/}
			
			<div className="wt-separator-two-part">
				<div className="row wt-separator-two-part-row">
					<div className="col-lg-5 col-md-6 wt-separator-two-part-left">
						{/*<!-- TITLE START-->*/}
						<div className="section-head left wt-small-separator-outer">
							<div className="wt-small-separator site-text-primary">
								<div className="sep-leaf-left"></div>
								<div>All Services</div>
								<div className="sep-leaf-right"></div>
							</div>
							<h2>Explore Our Main Services</h2>
						</div>
						{/*<!-- TITLE END-->*/}
					</div>
	
					<div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
						<p>We provide expert inspection services for your organization�s mission critical assets using drone technology.</p>
					</div>
												
				</div>
			</div>                      
				
			{/*<!-- TITLE END-->*/}
			 
			<div className="section-content"> 
				<div className="row justify-content-center d-flex">
	 
					<div className="col-lg-4 col-md-6 m-b30">
						<div className="imghvr-zoom-out-down">
							<img src={pic1} alt="" />
							<div className="imghvr-content">
								<div className="imghvr-mid">
									<h3 className="wt-title">Event photography</h3>
									<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 m-b30">
						<div className="imghvr-zoom-out-down">
							<img src={pic2} alt="" />
							<div className="imghvr-content">
								<div className="imghvr-mid">                                    
									<h3 className="wt-title">Aerial Survey & Inspection</h3>
									<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
							</div>
						   
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 m-b30">
						<div className="imghvr-zoom-out-down">
							<img src={pic3} alt="" />
							<div className="imghvr-content">
								<div className="imghvr-mid">                                    
									<h3 className="wt-title">Professional Photography</h3>
									<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 m-b30">
						<div className="imghvr-zoom-out-down">
							<img src={pic4} alt="" />
							<div className="imghvr-content">
								<div className="imghvr-mid">                                    	
									<h3 className="wt-title">360 VR Services</h3>
									<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time. </p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 m-b30">
						<div className="imghvr-zoom-out-down">
							<img src={pic5} alt="" />
							<div className="imghvr-content">
								<div className="imghvr-mid">                                    
									<h3 className="wt-title">Delivery Services</h3>
									<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time. </p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
							</div>
							
						</div>
					</div> 
					
					<div className="col-lg-4 col-md-6 m-b30">
						<div className="imghvr-zoom-out-down">
							<img src={pic6} alt="" />
							<div className="imghvr-content">
								<div className="imghvr-mid">                                    
									<h3 className="wt-title">Public Safety</h3>
									<p>Our team has decades of film and tech experience. We know how to deliver amazing results every time. </p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
							</div>
							
						</div>
					</div>                                                                                                                                                  
	
				</div>
			</div>
	
		</div>
	</div>   
	{/*<!-- ALL SERVICES SECTION END -->*/}  	 
    </>
    )
}
export default Home4SectionAllServices;