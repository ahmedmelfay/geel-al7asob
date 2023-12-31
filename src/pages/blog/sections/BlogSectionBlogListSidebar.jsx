import React from 'react';
import { Link } from 'react-router-dom';
var thum1 = require('../../../assets/images/blog/default/thum1.jpg');
var thum2 = require('../../../assets/images/blog/default/thum2.jpg');
var thum3 = require('../../../assets/images/blog/default/thum3.jpg');
var thum4 = require('../../../assets/images/blog/default/thum4.jpg');

var pic1 = require('../../../assets/images/blog/recent-blog/pic1.jpg');
var pic2 = require('../../../assets/images/blog/recent-blog/pic2.jpg');
var pic3 = require('../../../assets/images/blog/recent-blog/pic3.jpg');

var pwpic1 = require('../../../assets/images/products/product-widget/pic1.png');
var pwpic2 = require('../../../assets/images/products/product-widget/pic2.png');
var pwpic3 = require('../../../assets/images/products/product-widget/pic3.png');



const BlogSectionBlogListSidebar = (props) => {	  	
    return(
	<>
	{/* <!-- OUR BLOG START --> */}
	<div className="section-full  p-t80 p-b50 bg-white">
		<div className="container">
		
			{/* <!-- BLOG SECTION START --> */}
			<div className="section-content">
				<div className="row d-flex justify-content-center">
				
					<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 blog-list-style-outer">
						{/* <!--Block one--> */}
						<div className="blog-post blog-style-1 blog-list-style">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/#"><img src={thum1} alt="" /></Link>
							</div>                                    
							<div className="wt-post-info">
								<div className="wt-post-meta ">
									<ul>
										<li className="post-date">May 9, 2023</li>
									</ul>
								</div>                                 
								<div className="wt-post-title ">
									<h3 className="post-title">How Drones Are Saving Our...</h3>
								</div>
								<div className="wt-post-text ">
									<p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
								</div>                                           
								<div className="wt-post-readmore ">
									<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
								</div>                                        
						   </div>                                
						</div>

						{/* <!--Block two--> */}
						<div className="blog-post blog-style-1 blog-list-style">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/#"><img src={thum2} alt="" /></Link>
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
									<p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
								</div>                                           
								<div className="wt-post-readmore ">
									<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
								</div>                                        
							</div>                                
						</div>

						{/* <!--Block three--> */}
						<div className="blog-post blog-style-1 blog-list-style">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/#"><img src={thum3} alt="" /></Link>
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
									<p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
								</div>                                        
								<div className="wt-post-readmore ">
									<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
								</div>
							</div>                                
						</div>
						
						{/* <!--Block Four--> */}
						<div className="blog-post blog-style-1 blog-list-style">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/#"><img src={thum4} alt="" /></Link>
							</div>                                    
							<div className="wt-post-info">
								<div className="wt-post-meta ">
									<ul>
										<li className="post-date">May 15, 2023</li>
									</ul>
								</div>                                 
								<div className="wt-post-title ">
									<h3 className="post-title">How Drones Are Saving Our...</h3>
								</div>
								<div className="wt-post-text ">
									<p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
								</div>                                           
								<div className="wt-post-readmore ">
									<Link to="/blog-post-right-sidebar" className="site-button-link black">Read More</Link>
								</div>                                        
						   </div>                                
						</div>                                
				  

					</div> 
					
					{/* <!-- SIDE BAR START --> */}
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
					
						<aside  className="side-bar">
							
							   {/* <!-- SEARCH --> */}
							   <div className="widget p-a20">
									<div className="search-bx">
										<form role="search" method="post">
											<div className="input-group">
												<input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
												<span className="input-group-btn">
													<button type="submit" className="btn"><i className="fa fa-search"></i></button>
												</span>
											</div>
										</form>
									</div>
								</div>
								
							   {/* <!-- RECENT POSTS --> */}
							   <div className="widget recent-posts-entry p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Recent Posts</h3>
									</div>                                    
									<div className="section-content">
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="wt-post-media">
													<img src={pic1} alt="" />
												</div>
												<div className="wt-post-info">
													<div className="wt-post-meta">
														<ul>
															<li className="post-date">April 18, 2023</li>
														</ul>
													</div>                                                        
													<div className="wt-post-header">
														<span className="post-title"> <Link to="#">Commercial drone industry</Link></span>
													</div>                                                    
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="wt-post-media">
													<img src={pic2} alt="" />
												</div>
												<div className="wt-post-info">
													<div className="wt-post-meta">
														<ul>
															<li className="post-date">May 25, 2023</li>
														</ul>
													</div>
													<div className="wt-post-header">
														<span className="post-title"><Link to="#">Accuracy in drone mapping</Link></span>
													</div>                                                    
																								
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="wt-post-media">
													<img src={pic3} alt="" />
												</div>
												<div className="wt-post-info">
													<div className="wt-post-meta">
														<ul>
															<li className="post-date">Jun 10, 2023</li>
														</ul>
													</div>                                                        
													<div className="wt-post-header">
														<span className="post-title"> <Link to="#">The age of automation</Link> </span>
													</div>                                                    
																								
												</div>
											</div>                                                  
										</div>
									</div>
								</div>
								
							   
								
							   {/* <!-- CATEGORY --> */}   
							   <div className="widget widget_services p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Categories</h3>
										
									</div>
									<ul>
										<li><Link to="">Battery</Link><span className="badge">28</span></li>
										<li><Link to="">Camera</Link><span className="badge">05</span></li>
										<li><Link to="">Cinematography</Link><span className="badge">24</span></li>
										<li><Link to="">Rent</Link><span className="badge">15</span></li>
										<li><Link to="">Sensors</Link><span className="badge">20</span></li>
									</ul>
								</div>                                               

							   {/* <!-- TOP PRODUCT --> */}
							   <div className="widget p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Top Products</h3>
									</div>                                    
									<div className="section-content">
									
										<div className="product-widget">
											<div className="product-widget-box clearfix">
												<div className="product-widget-media">
													<img src={pwpic1} alt="" />
												</div>
												<div className="product-widget-info">
													<div className="product-widget-header">
														<Link to="/product" className="product-widget-title">DJI Phantom 4</Link>
													</div>
													<span className="price">
														<ins>
															<span><span className="Price-currencySymbol">$ </span>49.00</span>
														</ins>
													</span>                                                                                                                
												</div>
											</div>
											
											<div className="product-widget-box clearfix">
												<div className="product-widget-media">
													<img src={pwpic2} alt="" />
												</div>
												<div className="product-widget-info">
													<div className="product-widget-header">
														<Link to="/product" className="product-widget-title">Ninja Silhouette</Link>
													</div>
													<span className="price">
														<ins>
															<span><span className="Price-currencySymbol">$ </span>49.00</span>
														</ins>
													</span>                                                                                                                
												</div>
											</div>
											
											<div className="product-widget-box clearfix">
												<div className="product-widget-media">
													<img src={pwpic3} alt="" />
												</div>
												<div className="product-widget-info">
													<div className="product-widget-header">
														<Link to="/product" className="product-widget-title">Mavic Pro Platinum</Link>
													</div>
													<span className="price">
														<ins>
															<span><span className="Price-currencySymbol">$ </span>49.00</span>
														</ins>
													</span>                                                                                                                
												</div>
											</div>                                                                                                        
																							  
										</div>
									</div>
								</div> 
								
							   {/* <!-- ARCHIVE --> */}   
							   <div className="widget widget_archives p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Archives</h3>
									</div>
									<ul>
										<li><Link to="">August 2023</Link></li>
										<li><Link to="">May 2023</Link></li>
										<li><Link to="">March 2023</Link></li>
										<li><Link to=""> February 2023</Link></li>
										<li><Link to="">January 2023</Link></li>
																					 
									</ul>
								</div>                                            
								
							   {/* <!-- TAGS --> */}
							   <div className="widget widget_tag_cloud p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Tags</h3>
										
									</div>
									
									<div className="tagcloud">
										<Link to="">Drone</Link>
										<Link to="">Videography </Link>
										<Link to="">Long life</Link>                                            
										<Link to="">Best rated </Link>
										<Link to="">Cheap</Link>
										<Link to="">Trending</Link>
										<Link to="">Range</Link>
										<Link to="">Pearl</Link>
										<Link to="">Luxary</Link>
									</div>
								</div>                                        
							  
						  
						   </aside>

					</div>
					{/* <!-- SIDE BAR END --> */}                            

												
				</div>
				
				
										   
			</div>
			
		</div>
		
	 </div>   
	{/* <!-- OUR BLOG END --> */}
    </>
    )
}
export default BlogSectionBlogListSidebar;