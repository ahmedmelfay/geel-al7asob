import React from 'react';
import { Link } from 'react-router-dom';
const ServicesSectionAllServices = (props) => {	  	
    return(
	<>
	{/*<!-- ALL SERVICES START -->*/}
	<div className="section-full p-t80 p-b40 bg-no-repeat bg-bottom-right bg-cover">
		<div className="container">
	
			
			{/*<!-- TITLE START-->*/}
				<div className="section-head left wt-small-separator-outer">
					<div className="wt-small-separator site-text-primary">
						<div className="sep-leaf-left"></div>
						<div>The Best Drone Services</div>
						<div className="sep-leaf-right"></div>
					</div>
					<h2>Explore Our Main Services</h2>
				</div>
			{/*<!-- TITLE END-->*/}
			 
				<div className="section-content"> 
					<div className="row justify-content-center d-flex">
		 
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="wt-box d-icon-box-one bg-white shadow card1">
							
								<div className="wt-icon-box-wraper m-b40">
									<div className="icon-xl inline-icon">
										<span className="icon-cell site-text-primary"><i className="flaticon-drone-8"></i></span>
									</div>
								</div> 
										
								<div className="d-icon-box-title title-style-2 site-text-secondry">
									<h3  className="s-title-one">Event photography</h3>
								</div>
								
								<div className="d-icon-box-content">
									<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="wt-box d-icon-box-one bg-white shadow card1">
							
								<div className="wt-icon-box-wraper m-b40">
									<div className="icon-xl inline-icon">
										<span className="icon-cell site-text-primary"><i className="flaticon-viewfinder"></i></span>
									</div>
								</div> 
										
								<div className="d-icon-box-title title-style-2 site-text-secondry">
									<h3  className="s-title-one">Aerial Survey & Inspection</h3>
								</div>
								
								<div className="d-icon-box-content">
									<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
																			
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="wt-box d-icon-box-one bg-white shadow card1">
							
								<div className="wt-icon-box-wraper m-b40">
									<div className="icon-xl inline-icon">
										<span className="icon-cell site-text-primary"><i className="flaticon-drone-2"></i></span>
									</div>
								</div> 
										
								<div className="d-icon-box-title title-style-2 site-text-secondry">
									<h3  className="s-title-one">Professional Photography</h3>
								</div>
								
								<div className="d-icon-box-content">
									<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
																			
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="wt-box d-icon-box-one bg-white shadow card1">
							
								<div className="wt-icon-box-wraper m-b40">
									<div className="icon-xl inline-icon">
										<span className="icon-cell site-text-primary"><i className="flaticon-virtual-reality"></i></span>
									</div>
								</div> 
										
								<div className="d-icon-box-title title-style-2 site-text-secondry">
									<h3  className="s-title-one">360 VR Services</h3>
								</div>
								
								<div className="d-icon-box-content">
									<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
																			
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="wt-box d-icon-box-one bg-white shadow card1">
							
								<div className="wt-icon-box-wraper m-b40">
									<div className="icon-xl inline-icon">
										<span className="icon-cell site-text-primary"><i className="flaticon-drone-9"></i></span>
									</div>
								</div> 
										
								<div className="d-icon-box-title title-style-2 site-text-secondry">
									<h3  className="s-title-one">Delivery Services</h3>
								</div>
								
								<div className="d-icon-box-content">
									<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
								</div>
																			
							</div>
						</div>     
						
						<div className="col-lg-4 col-md-6 m-b30">
							<div className="wt-box d-icon-box-one bg-white shadow card1">
							
								<div className="wt-icon-box-wraper m-b40">
									<div className="icon-xl inline-icon">
										<span className="icon-cell site-text-primary"><i className="flaticon-worker"></i></span>
									</div>
								</div> 
										
								<div className="d-icon-box-title title-style-2 site-text-secondry">
									<h3  className="s-title-one">Public Safety</h3>
								</div>
								
								<div className="d-icon-box-content">
									<p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
									<Link to="/service-detail" className="site-button-link site-text-primary">Read More</Link>
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
export default ServicesSectionAllServices;