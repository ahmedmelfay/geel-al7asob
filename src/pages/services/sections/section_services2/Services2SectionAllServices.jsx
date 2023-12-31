import React from 'react';
import { Link } from 'react-router-dom';
var pic1 = require('../../../../assets/images/service/large/pic1.jpg');
var pic2 = require('../../../../assets/images/service/large/pic2.jpg');
var pic3 = require('../../../../assets/images/service/large/pic3.jpg');
var pic4 = require('../../../../assets/images/service/large/pic4.jpg');
var pic5 = require('../../../../assets/images/service/large/pic5.jpg');
var pic6 = require('../../../../assets/images/service/large/pic6.jpg');


const Services2SectionAllServices = (props) => {	  	
    return(
	<>
	{/*<!-- ALL SERVICES START --> */}
	<div className="section-full p-t80 p-b80 bg-white">
	
	
		<div className="container">
	
			
			{/*<!-- TITLE START--> */}
			
			<div className="wt-separator-two-part">
				<div className="row wt-separator-two-part-row">
					<div className="col-lg-5 col-md-6 wt-separator-two-part-left">
						{/*<!-- TITLE START--> */}
						<div className="section-head left wt-small-separator-outer">
							<div className="wt-small-separator site-text-primary">
								<div className="sep-leaf-left"></div>
								<div>All Services</div>
								<div className="sep-leaf-right"></div>
							</div>
							<h2>Explore Our Main Services</h2>
						</div>
						{/*<!-- TITLE END--> */}
					</div>
	
					<div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
						<p>We provide expert inspection services for your organization's mission critical assets using drone technology.</p>
					</div>
												
				</div>
			</div>                      
				
			{/*<!-- TITLE END--> */}
			 
			<div className="section-content"> 
				<div className="services-style-two">
					<div className="row no-gutters">
					
						<div className="col-lg-6 col-md-12">
							<div className="wt-media our-story-pic">
								<img src={pic1} alt=""/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="service-style2-detail">
	
								<h3 className="wt-title">Event photography</h3>
								<p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
								<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
							</div>
						</div>
						
					</div>  
					<div className="row no-gutters">
					
						<div className="col-lg-6 col-md-12">
							<div className="wt-media our-story-pic">
								<img src={pic2} alt=""/>
							</div>
						</div>                        
						<div className="col-lg-6 col-md-12">
							<div className="service-style2-detail">
	
								<h3 className="wt-title">Aerial Survey & Inspection</h3>
								<p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
								<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
							</div>
						</div>
	
					</div>
					<div className="row no-gutters">
					
						<div className="col-lg-6 col-md-12">
							<div className="wt-media our-story-pic">
								<img src={pic3} alt=""/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="service-style2-detail">
	
								<h3 className="wt-title">Professional Photography</h3>
								<p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
								<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
							</div>
						</div>
						
					</div>
					
					
					<div className="row no-gutters">
					
						<div className="col-lg-6 col-md-12">
							<div className="wt-media our-story-pic">
								<img src={pic4} alt=""/>
							</div>
						</div>                        
						<div className="col-lg-6 col-md-12">
							<div className="service-style2-detail">
								<h3 className="wt-title">360 VR Services</h3>
								<p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
								<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
							</div>
						</div>
	
					</div>
					
					<div className="row no-gutters">
					
						<div className="col-lg-6 col-md-12">
							<div className="wt-media our-story-pic">
								<img src={pic5} alt=""/>
							</div>
						</div>                        
						<div className="col-lg-6 col-md-12">
							<div className="service-style2-detail">
								<h3 className="wt-title">Delivery Services</h3>
								<p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
								<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
							</div>
						</div>
	
					</div>
					
					<div className="row no-gutters">
					
						<div className="col-lg-6 col-md-12">
							<div className="wt-media our-story-pic">
								<img src={pic6} alt=""/>
							</div>
						</div>                        
						<div className="col-lg-6 col-md-12">
							<div className="service-style2-detail">
								<h3 className="wt-title">Public Safety</h3>
								<p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
								<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
							</div>
						</div>
	
					</div>                                                        
					
					
				</div>
			</div>
	
		</div>
	</div>   
	{/*<!-- ALL SERVICES SECTION END --> */}    
    </>
    )
}
export default Services2SectionAllServices;