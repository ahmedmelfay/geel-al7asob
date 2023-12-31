import React from 'react';
import { Link } from 'react-router-dom';
var pic1 = require('../../../assets/images/team/pic1.jpg');
const PagesSectionOurTeamSingle = (props) => {	  	
    return(
	<>
	{/*<!-- OUR TEAM SINGLE SECTION START --> */}
		<div className="section-full p-t80 p-b50 bg-gray">
			<div className="container">
				<div className="section-content">
						   
						<div className="section-content">
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-4 m-b30">
								
									<div className="wt-team-1">
										
										<div className="wt-media">
											<img src={pic1} alt=""/>
										</div>                                   
	
										<div className="wt-info">
											<div className="team-detail p-t30">
												<span className="title-style-2 team-position site-text-primary">Photographer</span>                                        
												<h3 className="m-t0 team-name"><Link to="/team-single">Staephan Humbert</Link></h3>
											</div>
											<div className="team-social-center">
												<ul className="team-social-bar">
													<li><Link to="https://www.facebook.com/Facebook" target="_blank">Facebook</Link></li>
													<li><Link to="https://www.Twitter.com/Twitter" target="_blank">Twitter</Link></li>
													<li><Link to="https://www.Linkedin.com/Linkedin" target="_blank">Linkedin</Link></li>
												</ul>
											</div>                                        
										</div>
								
									</div>
						
								</div>
								
								<div className="col-lg-8 col-md-8 m-b30">
									<div className="wt-team-1-single">
										<h3 className="m-t0">Aerial Photographer</h3>
										<ul className="wt-team-1-single-info">
											<li><span>Experience</span><span>5 Year</span></li>
											<li><span>Phone</span><span>987 765 4321</span></li>
											<li><span>Email</span><span>staephan@example.com</span></li>
										</ul>                                                 
										<p>Malesuada fames ac ante ipsum primis in faucibus. Donec nec felis sed magna euismod venenatis. Nulla sed varius est, ac viverra nisl. Cras nec purus erat. Pellentesque eget molestie risus, quis bibendum dui. Duis ornare condimentum ornare. Nulla a nulla non odio hendrerit ultricies. Vestibulum tristique quam ac nisl dapibus, ut semper orci tincidunt. Sed sagittis eros ut pellentesque tempus. Sed in turpis ullamcorper, fermentum mi eu, porta dolor. Aliquam imperdiet sem metus, vel tempor sem malesuada vel. Morbi congue dictum nisl, in interdum dui sollicitudin. Aenean blandit, lectus in dapibus interdum, magna mauris fermentum risus, nec iaculis ex quam ultricies tellus. Sed nec convallis ex, nec tristique nisi.</p>
	
										
									</div>
								</div>
									   
							</div>
						</div>      
					
				</div>
			</div>
		</div>
	{/*<!-- OUR TEAM SINGLE SECTION END --> */} 
    </>
    )
}
export default PagesSectionOurTeamSingle;