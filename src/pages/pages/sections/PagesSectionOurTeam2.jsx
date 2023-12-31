import React from 'react';
import { Link } from 'react-router-dom';
var pic1 = require('../../../assets/images/team/pic1.jpg');
var pic2 = require('../../../assets/images/team/pic2.jpg');
var pic3 = require('../../../assets/images/team/pic3.jpg');
const PagesSectionOurTeam2 = (props) => {	  	
    return(
	<>
	{/* <!-- OUR TEAM START -->*/}
	<div className="section-full p-t80 p-b50 bg-gray">
		<div className="container">
			
			{/* <!-- TITLE START-->*/}
			<div className="section-head center wt-small-separator-outer text-center">
				<div className="wt-small-separator site-text-primary">
					<div  className="sep-leaf-left"></div>
					<div>Afrial Photography</div>
					<div  className="sep-leaf-right"></div>
				</div>
				<h2>Our Dedicated Team</h2>
			</div>
			{/* <!-- TITLE END-->*/}
					
			<div className="section-content">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
						<div className="wt-team-2">
							
							<div className="wt-media">
								<img src={pic1} alt="" />
							</div>                                   
	
							<div className="wt-info">
								<div className="team-detail">
									<span className="title-style-2 team-position site-text-primary">Photographer</span>                                        
									<h3 className="m-t0 team-name"><Link to="/team-single">Staephan Humbert</Link></h3>
								</div>
								<div className="team-social-center">
									<ul className="team-social-bar">
										<li><Link to="https://www.facebook.com/facebook" target="_blank">Facebook</Link></li>
										<li><Link to="https://www.Twitter.com/Twitter">Twitter</Link></li>
										<li><Link to="https://www.Linkedin.com/Linkedin">Linkedin</Link></li>
									</ul>
								</div>                                        
							</div>
					
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
						<div className="wt-team-2">
							
							<div className="wt-media">
								<img src={pic2} alt=""/>
							</div>                                   
	
							<div className="wt-info">
								<div className="team-detail">
									<span className="title-style-2 team-position site-text-primary">Creative Director</span>                                        
									<h3 className="m-t0 team-name"><Link to="/team-single" >Leo Simon</Link></h3>
								</div>
								<div className="team-social-center">
									<ul className="team-social-bar">
										<li><Link to="https://www.facebook.com/facebook">Facebook</Link></li>
										<li><Link to="https://www.Twitter.com/Twitter">Twitter</Link></li>
										<li><Link to="https://www.Linkedin.com/Linkedin">Linkedin</Link></li>
									</ul>
								</div>                                        
							</div>
					
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
						<div className="wt-team-2">
							
							<div className="wt-media">
								<img src={pic3} alt=""/>
							</div>                                   
	
							<div className="wt-info">
								<div className="team-detail">
									<span className="title-style-2 team-position site-text-primary">Photographer</span>                                        
									<h3 className="m-t0 team-name"><Link to="/team-single">John Casey</Link></h3>
								</div>
								<div className="team-social-center">
									<ul className="team-social-bar">
										<li><Link to="https://www.facebook.com/facebook">Facebook</Link></li>
										<li><Link to="https://www.Twitter.com/Twitter">Twitter</Link></li>
										<li><Link to="https://www.Linkedin.com/Linkedin">Linkedin</Link></li>
									</ul>
								</div>                                        
							</div>
					
						</div>
					</div>                                                        
					
				</div>
			</div>      
	
		</div>
	</div>   
	{/* <!-- OUR TEAM SECTION END -->*/}   
    </>
    )
}
export default PagesSectionOurTeam2;