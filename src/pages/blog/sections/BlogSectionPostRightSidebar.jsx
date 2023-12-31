import React from 'react';
import { Link } from 'react-router-dom';
var thum1 = require('../../../assets/images/blog/default/thum1.jpg');

var pic1 = require('../../../assets/images/testimonials/pic1.jpg');
var pic2 = require('../../../assets/images/testimonials/pic2.jpg');
var pic3 = require('../../../assets/images/testimonials/pic3.jpg');

var rbpic1 = require('../../../assets/images/blog/recent-blog/pic1.jpg');
var rbpic2 = require('../../../assets/images/blog/recent-blog/pic2.jpg');
var rbpic3 = require('../../../assets/images/blog/recent-blog/pic3.jpg');

var pwpic1 = require('../../../assets/images/products/product-widget/pic1.png');
var pwpic2 = require('../../../assets/images/products/product-widget/pic2.png');
var pwpic3 = require('../../../assets/images/products/product-widget/pic3.png');


const BlogSectionPostRightSidebar = (props) => {	  	
    return(
	<>
	{/*<!-- OUR BLOG START --> */}
	<div className="section-full  p-t80 p-b50 bg-white">
		<div className="container">
		
			{/*<!-- BLOG SECTION START --> */}
			<div className="section-content">
				<div className="row d-flex justify-content-center">
				
					<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
					   {/*<!-- BLOG START --> */}
						<div className="blog-post blog-style-1">
							<div className="wt-post-media wt-img-effect zoom-slow">
								<Link to="/#"><img src={thum1} alt="" /></Link>
							</div>
							<div className="wt-post-info  bg-white p-t30">
								<div className="wt-post-meta ">
									<ul>
										<li className="post-category">Steel Drone</li>
										<li className="post-date">May 9, 2023</li>
										<li className="post-comment">08 Comment</li>
									</ul>
								</div>                                 
								<div className="wt-post-title ">
									<h3 className="post-title">Checklist for Travel - What to take and how to take it</h3>
								</div>
							   
								<div className="wt-post-text">
										
										<p>Proin suscipit urna quis pharetra vestibulum. Sed fermentum at lectus nec porta. Proin velit metus, placerat quis enim vel, posuere varius risus. Nunc bibendum mattis est ut lobortis. Duis congue lacinia nulla, nec blandit justo placerat a. Cras enim neque, lobortis ut magna non, hendrerit suscipit lorem. Curabitur nec nisi ante. Donec id volutpat justo, sed ultricies dui. Etiam eget risus diam. Phasellus ac arcu sit amet mauris gravida lobortis. Praesent dapibus sapien sit amet lacus aliquet dictum. Mauris egestas blandit ex eu pulvinar. Vivamus euismod erat ex, vitae congue purus aliquam eu. Nullam eget metus consectetur, finibus sapien vitae, tincidunt nulla. Praesent non ultricies dolor, eu vehicula lacus. A collection of textile samples lay spread out on the table - Samsa was a travelling sales man - and above it there hung a picture that he had recently cut out of an illustrated an magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower army towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
									   <h4>Why do we choose it?</h4> 
										<p> Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar wallsmuff that covered the whole of her lower arm towards the viewer.</p>
									 <h4>Where can I get that product?</h4>   
									<p>There boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint eca itate non similique sunt in culpa modi tempora incidunt obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure corrupti sdolores et quas molestias cepturi sint eca itate non similique sunt in culpa modi tempora incidunt obtain pain of itself, because it is pain</p>
									
									 <blockquote>
										<i className="fa fa-quote-left font-20"></i>
										<p>Drone Expert Says Some Drone Users Don't Know or Don't Care About the Law </p>
										<span className="quoter">- Malcolm Franzcrip</span>
									 </blockquote>                                         
	
								<p>An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, an e trud erroribus explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.</p>
								</div>  
												
							</div>
						</div>
						
						<div className="widget bg-white  widget_tag_cloud">
							<h4 className="tagcloud">Tags</h4>
							<div className="tagcloud">
								<Link to="/services1">Analytics</Link>
								<Link to="/services2">Business </Link>
								<Link to="/services-detail">Consulting</Link>                                            
								<Link to="/services-detail">Solutions </Link>
								<Link to="/services-detail">Development</Link>
								<Link to="/services-detail">Stock</Link>
								<Link to="/services-detail">Finance</Link>
								<Link to="/services-detail">Innovation</Link>
								<Link to="/services-detail">Investing</Link>
								<Link to="/services-detail">Strategic</Link>                                                
								<Link to="/services-detail">Management</Link>
							</div>
						</div>                                
	
						<div className="clear" id="comment-list">
							<div className="comments-area" id="comments">
								<h2 className="comments-title m-t0">Comments (3)</h2>
								<div>
									{/*<!-- COMMENT LIST START --> */}
									<ol className="comment-list">
										<li className="comment">
											{/*<!-- COMMENT BLOCK --> */}
											<div className="comment-body">
												<div className="comment-author vcard">
													<img  className="avatar photo" src={pic1} alt="" />
													<cite className="fn">Janice Brown</cite>
													<span className="says">says:</span>
												</div>                                                
												<div className="comment-meta">
													<Link to="/#">May 20 2023</Link>
												</div>                                        
												<p>Quick service, quick delivery, easy to contact - what more can you ask for from a retailer Rey is always helpful - would buy again!</p>
												<div className="reply">
													<Link href="/#" className="comment-reply-link">Reply</Link>
												</div>
											</div>
											{/*<!-- SUB COMMENT BLOCK --> */}
											<ol className="children">
												<li className="comment odd parent">
												
													<div className="comment-body">
														<div className="comment-author vcard">
															<img  className="avatar photo" src={pic2} alt="" />
															<cite className="fn">Betty Riley</cite>
															<span className="says">says:</span>
														</div>                                                        
														<div className="comment-meta">
															<Link to="/#">Jun 08 2023</Link>
														</div>                                                
														<p>Delivery was fast and friendly. product was not great especially the salad. Will not be ordering from again. Too many options to settle for this place.</p>
														<div className="reply">
															<Link href="/#" className="comment-reply-link">Reply</Link>
														</div>
													</div>                                                        
													
												</li>
											</ol>
										</li>
										
										<li className="comment">
											{/*<!-- COMMENT BLOCK --> */}
											<div className="comment-body">
												<div className="comment-author vcard">
													<img  className="avatar photo" src={pic3} alt="" />
													<cite className="fn">Janice Brown</cite>
													<span className="says">says:</span>
												</div>                                                
												<div className="comment-meta">
													<Link to="/#">Jun 12 2023</Link>
												</div>                                        
												<p>I absolutely love it. I've been talking about one these sense they first came out and now I finally have my own, I'm overjoyed with it."</p>
												<div className="reply">
													<Link href="/#" className="comment-reply-link">Reply</Link>
												</div>
											</div>
	
										</li>                                                
									</ol>
									{/*<!-- COMMENT LIST END --> */}
									
									{/*<!-- LEAVE A REPLY START --> */}
									<div className="comment-respond m-t30" id="respond">
		
										<h2 className="comment-reply-title" id="reply-title">Add a Review
											<small>
												<Link style={{display:'none'}} to="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link>
											</small>
										</h2>
		
										<form className="comment-form" id="commentform" method="post" >
									
											<p className="comment-form-author">
												<label htmlFor="author">Name <span className="required">*</span></label>
												<input className="form-control" type="text" name="user-comment"  placeholder="Author" id="author" />
											</p>
											
											<p className="comment-form-email">
												<label htmlFor="email">Email <span className="required">*</span></label>
												<input className="form-control" type="text" name="email" placeholder="Email" />
											</p>
											
											<p className="comment-form-url">
												<label htmlFor="url">Website</label>
												<input className="form-control" type="text" name="url"   placeholder="Website" id="url" />
											</p>
											
											<p className="comment-form-comment">
												<label htmlFor="comment">Comment</label>
												<textarea className="form-control" rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
											</p>
											
											<p className="form-submit">
												<button className="site-button site-btn-effect" type="button">Submit</button>
											</p>
											
										</form>
		
									</div>
									{/*<!-- LEAVE A REPLY END --> */}
							   </div>
							</div>
						</div>
						{/*<!-- BLOG END --> */}	
						 
					</div> 
					
					{/*<!-- SIDE BAR START --> */}
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
					
						<aside  className="side-bar">
							
							   {/*<!-- SEARCH --> */}
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
								
							   {/*<!-- RECENT POSTS --> */}
							   <div className="widget recent-posts-entry p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Recent Posts</h3>
									</div>                                    
									<div className="section-content">
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="wt-post-media">
													<img src={rbpic1} alt="" />
												</div>
												<div className="wt-post-info">
													<div className="wt-post-meta">
														<ul>
															<li className="post-date">April 18, 2023</li>
														</ul>
													</div>                                                        
													<div className="wt-post-header">
														<span className="post-title"> <Link to="/services-detail">Commercial drone industry</Link></span>
													</div>                                                    
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="wt-post-media">
													<img src={rbpic2} alt="" />
												</div>
												<div className="wt-post-info">
													<div className="wt-post-meta">
														<ul>
															<li className="post-date">May 25, 2023</li>
														</ul>
													</div>
													<div className="wt-post-header">
														<span className="post-title"><Link to="/services-detail">Accuracy in drone mapping</Link></span>
													</div>                                                    
																								
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="wt-post-media">
													<img src={rbpic3} alt="" />
												</div>
												<div className="wt-post-info">
													<div className="wt-post-meta">
														<ul>
															<li className="post-date">Jun 10, 2023</li>
														</ul>
													</div>                                                        
													<div className="wt-post-header">
														<span className="post-title"> <Link to="/services-detail">The age of automation</Link> </span>
													</div>                                                    
																								
												</div>
											</div>                                                  
										</div>
									</div>
								</div>
								
							   
								
							   {/*<!-- CATEGORY --> */}   
							   <div className="widget widget_services p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Categories</h3>
										
									</div>
									<ul>
										<li><Link to="/product">Battery</Link><span className="badge">28</span></li>
										<li><Link to="/product">Camera</Link><span className="badge">05</span></li>
										<li><Link to="/product">Cinematography</Link><span className="badge">24</span></li>
										<li><Link to="/product">Rent</Link><span className="badge">15</span></li>
										<li><Link to="/product">Sensors</Link><span className="badge">20</span></li>
									</ul>
								</div>                                               
	
							   {/*<!-- TOP PRODUCT --> */}
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
								
							   {/*<!-- ARCHIVE --> */}   
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
								
							   {/*<!-- TAGS --> */}
							   <div className="widget widget_tag_cloud p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Tags</h3>
										
									</div>
									
									<div className="tagcloud">
										<Link to="/#">Drone</Link>
										<Link to="/#">Videography </Link>
										<Link to="/#">Long life</Link>                                            
										<Link to="/#">Best rated </Link>
										<Link to="/#">Cheap</Link>
										<Link to="/#">Trending</Link>
										<Link to="/#">Range</Link>
										<Link to="/#">Pearl</Link>
										<Link to="/#">Luxary</Link>
									</div>
								</div>                                        
							  
						  
						   </aside>
	
					</div>
					{/*<!-- SIDE BAR END --> */}                         
	
												
				</div>
										 
			</div>
			
		</div>
		
	 </div>   
	{/*<!-- OUR BLOG END --> */}
    </>
    )
}
export default BlogSectionPostRightSidebar;