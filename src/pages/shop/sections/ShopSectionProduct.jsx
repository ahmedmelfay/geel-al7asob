import React from 'react';
import { Link } from 'react-router-dom';
var pic1 = require('../../../assets/images/products/pic-1.jpg');
var pic2 = require('../../../assets/images/products/pic-2.jpg');
var pic3 = require('../../../assets/images/products/pic-3.jpg');
var pic4 = require('../../../assets/images/products/pic-4.jpg');
var pic5 = require('../../../assets/images/products/pic-5.jpg');
var pic6 = require('../../../assets/images/products/pic-6.jpg');
var pic7 = require('../../../assets/images/products/pic-7.jpg');
var pic8 = require('../../../assets/images/products/pic-8.jpg');
var pic9 = require('../../../assets/images/products/pic-9.jpg');

var pwpic1 = require('../../../assets/images/products/product-widget/pic1.png');
var pwpic2 = require('../../../assets/images/products/product-widget/pic2.png');
var pwpic3 = require('../../../assets/images/products/product-widget/pic3.png');



const ShopSectionProduct = (props) => {	  	
    return(
	<>
	{/* <!-- SECTION CONTENT START --> */}
	<div className="section-full p-t80 p-b50">
		<div className="container">
			<div className="section-content">
	
				<div className="row d-flex justify-content-center">
				
					<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">                       
					
						<div className="row">
							{/* <!-- COLUMNS 1 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic1} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
										  </div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">DJI Inspire 2</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div> 
																																				 
											<span className="price">
												<ins>
													<span><span className="Price-currencySymbol">$ </span>49.00</span>
												</ins>
											</span>
	
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 2 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic2} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
										  </div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">Mavic Pro Platinum</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div> 
																								
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>99.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 3 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic3} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">DJI Mavic 2 Pro</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>99.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 4 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic4} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
										  </div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">DJI Mavic 2 Zoom</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>199.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 5 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic5} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">DJI Mavic Air 2</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                               
												 <ins>
													<span><span className="Price-currencySymbol">$ </span>139.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 6 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic6} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="wt-info">
										<div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">U49WF FPV Camera Drone</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>26.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 7 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic7} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
										  </div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">F111WF Folding Drone</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>86.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 8 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic8} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">DJI Phantom 4 Pro V2.0</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>56.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>
							
							{/* <!-- COLUMNS 9 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic9} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">Skydio 2</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>99.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
								</div>
							</div>  
							
							{/* <!-- COLUMNS 10 --> */}
							<div className="col-lg-6 col-md-6 m-b30">
								<div className="wt-box wt-product-box   overflow-hide">
									<div className="wt-thum-bx wt-img-overlay1">
										<img src={pic3} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon">
												<Link to="/#">
													<i className="fa fa-cart-plus wt-icon-box-xs"></i>
												</Link>
												<Link className="mfp-link" href="/#">
													<i className="fa fa-heart wt-icon-box-xs"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="wt-info">
										 <div className="p-a20 bg-white">
											<h3 className="wt-title">
												<Link to="product-detail.html">DJI Mavic 2 Pro</Link>
											</h3>
											
											<div className="product-features-item"><span>Camera | </span>48MP, 4K Video</div>  
											<div className="product-features-item"><span>Flight Time | </span>31 Minutes</div>                                                     
											
											<span className="price">                                                
												<ins>
													<span><span className="Price-currencySymbol">$ </span>99.00</span>
												</ins>
											</span>
	
										 </div>
									</div>
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
								
							  {/* <!--PRICE RANGE SLIDER--> */}
							   <div className="widget p-a20 product-range-slider1">
							   
									<div className="text-left m-b30">
										<h3 className="widget-title">Price Range</h3>
									</div>                                       
								  
									<div id="amount"></div>
									<div id="slider-range"></div>
									<form method="post" action="get_items.php">
										<input type="hidden" id="amount1" />
										<input type="hidden" id="amount2" />
									</form>
									
								</div>                                        
								
							   {/* <!-- CATEGORY --> */}   
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
														<Link to="/product-detail" className="product-widget-title">DJI Phantom 4</Link>
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
														<Link to="/product-detail" className="product-widget-title">Ninja Silhouette</Link>
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
														<Link to="/product-detail" className="product-widget-title">Mavic Pro Platinum</Link>
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
								
							   {/* <!-- ARCHIVES --> */}   
							   <div className="widget widget_archives p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Archives</h3>
									</div>
									<ul>
										<li><Link to="/product">August 2023</Link></li>
										<li><Link to="/product">May 2023</Link></li>
										<li><Link to="/product">March 2023</Link></li>
										<li><Link to="/product"> February 2023</Link></li>
										<li><Link to="/product">January 2023</Link></li>
																					 
									</ul>
								</div>                                           
																		
							   {/* <!-- TAGS --> */}
							   <div className="widget widget_tag_cloud p-a20">
									<div className="text-left m-b30">
										<h3 className="widget-title">Tags</h3>
										
									</div>
									
									<div className="tagcloud">
										<Link to="/product">Drone</Link>
										<Link to="/product">Videography </Link>
										<Link to="/product">Long life</Link>                                            
										<Link to="/product">Best rated </Link>
										<Link to="/product">Cheap</Link>
										<Link to="/product">Trending</Link>
										<Link to="/product">Range</Link>
										<Link to="/product">Pearl</Link>
										<Link to="/product">Luxary</Link>
									</div>
								</div>
								
						   </aside>
	
					</div>
					{/* <!-- SIDE BAR END --> */}   
					
										  
				</div>
			</div>
		</div>
	</div>
	 {/* <!-- SECTION CONTENT END --> */}	 	
    </>
    )
}
export default ShopSectionProduct;