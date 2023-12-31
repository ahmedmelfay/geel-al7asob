import React from 'react';
import { Link } from 'react-router-dom';
const Services3SectionPricingTable = (props) => {	  	
    return(
	<>
	{/*<!-- OUR PLAN US START -->*/}
	<div className="section-full p-t80 p-b50 bg-white">
		<div className="container">
				{/*<!-- TITLE START-->*/}
				<div className="section-head center wt-small-separator-outer text-center">
					<div className="wt-small-separator site-text-primary">
						<div  className="sep-leaf-left"></div>
						<div>Comfortable</div>
						<div  className="sep-leaf-right"></div>
					</div>
					<h2>Pricing Table</h2>
				</div>
				{/*<!-- TITLE END-->*/}
	
				<div className="section-content">
					<div className="pricingtable-row">
						<div className="row d-flex justify-content-center">
						
	
							<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
								<div className="pricingtable-wrapper bg-white">
	
									<div className="pricingtable-inner">
																					
										<div className="pricing-table-top-section">
										
											<div className="pricingtable-title">
												<h2 className="title-style-2">Sports</h2>
											</div>   
																								
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx"><sup className="pricingtable-sign">$</sup>145</h2>
											</div>
											
										</div>
										
										<ul className="pricingtable-features">
											<li>Built-in HD Camera</li>
											<li>Smartphone Control</li>
											<li>360 Degree Stunt Flip</li>
											<li>One Key Return</li>
											<li>Headless Flying </li>                                                   
										</ul>
										
										<div className="pricingtable-footer">
											<Link to="/" className="site-button site-btn-effect">Read More</Link>
										</div>
									
									</div>
								</div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
								<div className="pricingtable-wrapper">
	
									<div className="pricingtable-inner pricingtable-highlight">
																					
										<div className="pricing-table-top-section">
											
											<div className="pricingtable-title">
												<h2 className="title-style-2">Shooting</h2>
											</div> 
																								
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx"><sup className="pricingtable-sign">$</sup>285</h2>
											</div>
										
										</div>
										
										<ul className="pricingtable-features">
											<li>Built-in HD Camera</li>
											<li>Smartphone Control</li>
											<li>360 Degree Stunt Flip</li>
											<li>One Key Return</li>
											<li>Headless Flying </li>                                                   
										</ul>
										
										<div className="pricingtable-footer">
											<Link to="/" className="site-button site-btn-effect">Read More</Link>
										</div>
									
									</div>
								</div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
								<div className="pricingtable-wrapper bg-white">
	
									<div className="pricingtable-inner">
																					
										<div className="pricing-table-top-section">
											
											<div className="pricingtable-title">
												<h2 className="title-style-2">Travels</h2>
											</div>                                                     
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx"><sup className="pricingtable-sign">$</sup>375</h2>
											</div>
									  
										</div>
										
										<ul className="pricingtable-features">
											<li>Built-in HD Camera</li>
											<li>Smartphone Control</li>
											<li>360 Degree Stunt Flip</li>
											<li>One Key Return</li>
											<li>Headless Flying </li>                                                   
										</ul>
										
										<div className="pricingtable-footer">
											<Link to="/" className="site-button site-btn-effect">Read More</Link>
										</div>
									
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>    
				
		 
		</div>
	</div>   
	{/*<!-- OUR PLAN US SECTION END -->*/}   
    </>
    )
}

export default Services3SectionPricingTable;