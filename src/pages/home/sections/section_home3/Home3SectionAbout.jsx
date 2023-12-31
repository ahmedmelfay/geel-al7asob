import React from 'react';
import { Link } from 'react-router-dom';
var bg1 = require('../../../../assets/images/about-drone/bg-1.jpg');
const Home3SectionAbout = (props) => {	  	
    return(
	<>
	{/* <!-- ABOUT ONE SECTION START --> */}
	<div className="section-full p-t80 p-b50 bg-gray">
		<div className="about-section-two">
			<div className="container">
				<div className="section-content">                 
					<div className="row justify-content-center d-flex">
					
						<div className="col-lg-6 col-md-12 m-b30">
							<div className="about-drone-two">
								<div className="about-drone-two-media"><img src={bg1} alt="" /></div>
								<div className="about-drone-two-info"><span className="outline-title2">HD 4K</span><strong>Resolution!</strong></div>
							</div>
						</div>  
											  
						<div className="col-lg-6 col-md-12 m-b30">
							<div className="about-section-one-right">
							{/* <!-- TITLE START--> */}
							<div className="left wt-small-separator-outer">
								<div className="wt-small-separator site-text-primary">
									<div  className="sep-leaf-left"></div>
									<div>About</div>
									<div  className="sep-leaf-right"></div>
								</div>
								<h2>Specializing in Drone Services, and Aerial Photography</h2>
								<p>There are many variations of passages of lorem Ipsum available, 
									  but the majority have suffered alteration in some form, by injected humour,
									  or randomised words which don't look even slightly.
								</p>
								
							 
							</div>
							{/* <!-- TITLE END--> */}  
							<ul className="site-list-style-one icon-style">
								<li><i className="flaticon-drone-7"></i>Mobile Device Supported</li>
								<li><i className="flaticon-remote-control-1"></i>Easy integrative control</li>
								<li><i className="flaticon-control"></i>Customized Commands</li>
							</ul>
							
							<Link to="/about" className="site-button site-btn-effect">Read More</Link> 
							</div>                                                                
						</div>
																			 
	
					</div>
				</div>
			</div> 
		</div>
	</div>   
	{/* <!-- ABOUT ONE SECTION END --> */}   
    </>
    )
}
export default Home3SectionAbout;