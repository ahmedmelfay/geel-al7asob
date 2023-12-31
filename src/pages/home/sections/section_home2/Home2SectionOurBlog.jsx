import React from 'react';
import { Link } from 'react-router-dom';

var bg1 = require('../../../../assets/images/blog/large/bg1.jpg');

const Home2SectionOurBlog = (props) => {	  	
    return(
	<>
	{/* <!-- OUR BLOG START --> */}
	<div className="section-full  p-t80 p-b50 bg-gray">
		<div className="container">
		
			{/* <!-- TITLE START--> */}
			<div className="section-head center wt-small-separator-outer text-center">
				<div className="wt-small-separator site-text-primary">
					<div  className="sep-leaf-left"></div>
					<div>Our Latest News</div>
					<div  className="sep-leaf-right"></div>
				</div>
				<h2>The latest news from drones life</h2>
			</div>
			{/* <!-- TITLE END--> */}                
	
			<div className="section-content">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-5 col-md-12">
						{/* <!--Block one--> */}
						<div className="blog-post blog-style-large">
							<div className="wt-post-media" style={{backgroundImage:`url(${bg1})`}}>
							</div>                                    
							<div className="wt-post-info bg-white p-a30">
								<div className="wt-post-meta ">
									<ul>
										<li className="post-date">May 9, 2023</li>
									</ul>
								</div>                                 
								<div className="wt-post-title ">
									<h3 className="post-title"><Link to="/product">Drone videography price makes you surprises</Link></h3>
								</div>
																		
						   </div>                                
						</div>
					</div>
					
					<div className="col-lg-7 col-md-12">
						<div className="row blog-block-style">
							<div className="col-lg-6 col-md-6">
								{/* <!--Block two--> */}
								<div className="blog-post blog-style-3 p-a20">
																		 
									<div className="wt-post-info">
										<div className="wt-post-meta ">
											<ul>
												<li className="post-date">May 15, 2023</li>                                    
											</ul>
										</div>                                  
										<div className="wt-post-title ">
											<h3 className="post-title">How to Start a Drone Photography</h3>
										</div>
										<div className="wt-post-text ">
											<p>suffered alteration in some form, by injected humour, or randomis.</p>
										</div>                                           
										<div className="wt-post-readmore ">
											<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
										</div>                                        
									</div>                                
								</div>
							</div>
							
							<div className="col-lg-6 col-md-6">
								{/* <!--Block three--> */}
								<div className="blog-post blog-style-3 p-a20">
																		 
									<div className="wt-post-info">
										<div className="wt-post-meta ">
											<ul>
												<li className="post-date">May 20, 2023</li>
											</ul>
										</div>                                  
										<div className="wt-post-title ">
											<h3 className="post-title">How Amazon is Integrating Drones</h3>
										</div>
										<div className="wt-post-text ">
											<p>suffered alteration in some form, by injected humour, or randomis.</p>
										</div>                                        
										<div className="wt-post-readmore ">
											<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
										</div>
									</div>                                
								</div> 
							</div>
							
							<div className="col-lg-6 col-md-6">
								{/* <!--Block two--> */}
								<div className="blog-post blog-style-3 p-a20">
																		 
									<div className="wt-post-info">
										<div className="wt-post-meta ">
											<ul>
												<li className="post-date">May 15, 2023</li>                                    
											</ul>
										</div>                                  
										<div className="wt-post-title ">
											<h3 className="post-title">How to Start a Drone Photography</h3>
										</div>
										<div className="wt-post-text ">
											<p>suffered alteration in some form, by injected humour, or randomis.</p>
										</div>                                           
										<div className="wt-post-readmore ">
											<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
										</div>                                        
									</div>                                
								</div>
							</div>
							
							<div className="col-lg-6 col-md-6">
								{/* <!--Block three--> */}
								<div className="blog-post blog-style-3 p-a20">
																		 
									<div className="wt-post-info">
										<div className="wt-post-meta ">
											<ul>
												<li className="post-date">May 20, 2023</li>
											</ul>
										</div>                                  
										<div className="wt-post-title ">
											<h3 className="post-title">How Amazon is Integrating Drones</h3>
										</div>
										<div className="wt-post-text ">
											<p>suffered alteration in some form, by injected humour, or randomis.</p>
										</div>                                        
										<div className="wt-post-readmore ">
											<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
										</div>
									</div>                                
								</div> 
							</div>
						</div>                                                                                         
				   </div>                             
				</div>
			</div>
		</div>
		
	 </div>   
	{/* <!-- OUR BLOG END --> */}	 
    </>
    )
}
export default Home2SectionOurBlog;