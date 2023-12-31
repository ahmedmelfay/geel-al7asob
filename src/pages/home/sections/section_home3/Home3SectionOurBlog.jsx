import React from 'react';
import { Link } from 'react-router-dom';
var one = require('../../../../assets/images/blog/default/thumb/1.jpg');
var two = require('../../../../assets/images/blog/default/thumb/2.jpg');
var three = require('../../../../assets/images/blog/default/thumb/3.jpg');

const Home3SectionOurBlog = (props) => {	  	
    return(
	<>
	{/* <!-- OUR BLOG START -->*/}
	<div className="section-full  p-t80 p-b50   bg-gray">
		<div className="container">
		
			<div className="wt-separator-two-part">
				<div className="row wt-separator-two-part-row">
					<div className="col-lg-5 col-md-6 wt-separator-two-part-left">
						{/* <!-- TITLE START-->*/}
						<div className="section-head left wt-small-separator-outer">
							<div className="wt-small-separator site-text-primary">
								<div  className="sep-leaf-left"></div>
								<div>Our Latest News</div>
								<div  className="sep-leaf-right"></div>
							</div>
							<h2>The latest news from drones life</h2>
						</div>
						{/* <!-- TITLE END-->*/}
					</div>
	
					
					<div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
						<p>There are many variations of passages of lorem Ipsum available, but the majority have 
	suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
						
					</div>
												
				</div>
			</div>
	
	
			<div className="section-content">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
						{/* <!--Block one-->*/}
						<div className="blog-post blog-style-1">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/"><img src={one} alt=""/></Link>
							</div>                                    
							<div className="wt-post-info">
								<div className="wt-post-meta ">
									<ul>
										<li className="post-date">May 9, 2023</li>
									</ul>
								</div>                                 
								<div className="wt-post-title ">
									<h3 className="post-title">How Amazon is Integrating Drones</h3>
								</div>
								<div className="wt-post-text ">
									<p>suffered alteration in some form, by injected humour, or randomised which don't look even.</p>
								</div>                                           
								<div className="wt-post-readmore ">
									<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
								</div>                                        
						   </div>                                
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
						{/* <!--Block two-->*/}
						<div className="blog-post blog-style-1">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/"><img src={two} alt=""/></Link>
							</div>                                     
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
									<p>suffered alteration in some form, by injected humour, or randomised which don't look even.</p>
								</div>                                           
								<div className="wt-post-readmore ">
									<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
								</div>                                        
							</div>                                
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30">
						{/* <!--Block three-->*/}
						<div className="blog-post blog-style-1">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/"><img src={three} alt=""/></Link>
							</div>                                     
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
									<p>suffered alteration in some form, by injected humour, or randomised which don't look even.</p>
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
	{/* <!-- OUR BLOG END -->*/}	 
    </>
    )
}
export default Home3SectionOurBlog;