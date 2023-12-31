import React from 'react'
import { Link } from 'react-router-dom';
var rbpic1 = require('../../assets/images/blog/recent-blog/pic1.jpg');
var rbpic2 = require('../../assets/images/blog/recent-blog/pic2.jpg');

var logolight = require('../../assets/images/logo-light.png');


const FooterPage = (props) => {	  	
    return(
	<>
		{/*<!-- FOOTER START -->*/}
        <footer className="site-footer footer-large footer-dark text-white footer-style1" >

        
            {/* <!--FOOTER BLOCKES START --> */} 
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-lg-3 col-md-6"> 

                            <div className="widget recent-posts-entry">
                                <h3 className="widget-title">Get in Touch</h3>                            
                               <ul className="widget_address"> 
                                    <li><i className="fa fa-map-marker"></i>92 Princess Road, parkvenue Greater London, NW18JR, UK</li>
                                    <li><i className="fa fa-envelope"></i>contact123@gmail.com</li>
                                    <li> <i className="fa fa-phone"></i>(+291) 912-3456-073</li>
                                </ul>  
                            </div>

                            
                        </div> 


                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget_services">
                                <h3 className="widget-title">Useful links</h3>
                                <ul>
                                    <li><Link to="/about">About</Link></li>
									<li><Link to="/our-prices">Pricing Plan</Link></li>
									<li><Link to="/faq">FAQ</Link></li>
									<li><Link to="/our-team">Our Team</Link></li>
									<li><Link to="/services">Services</Link></li>
									
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
							<div className="widget recent-posts-entry">
                                <h3 className="widget-title">Recent Post</h3>
                                <div className="section-content">
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="wt-post-media">
                                                <img src={rbpic1} alt="" />
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta">
                                                    <ul>
                                                        <li className="post-author">25 May</li>
                                                    </ul>
                                                </div>                                            
                                                <div className="wt-post-header">

													<Link to="/blog-post-right-sidebar" className="post-title">Planning approved for restoration town hall.</Link>
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
                                                        <li className="post-author">28 Dec</li>
                                                    </ul>
                                                </div>                                            
                                                <div className="wt-post-header">
												<Link to="/blog-list-sidebar" className="post-title">Planning approved for restoration town hall.</Link>
                                                   
													
													
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       <div className="col-lg-3 col-md-6">  
                        <div className="widget widget_newsletter">
                            <h3 className="widget-title">Newsletter</h3>
                                <p>Join our subscribers list to get the latest news, updates and special offers delivered directly in your inbox.</p>
                                <div className="newsletter-input">
                                  <div className="input-group">
                                    <input id="email" type="text" className="form-control" name="email" placeholder="Enter your email" />
                                    <div className="input-group-append">
                                      <button type="submit" className="input-group-text nl-search-btn text-black site-bg-primary title-style-2">Subscribe</button>
                                    </div>
                                  </div>
                                </div>
                        </div>
                        
                       </div> 

                    </div>
                </div>
            </div>
            
			{/* <!--FOOTER COPYRIGHT --> */}
			
			<div className="footer-middle">
            
           	 	<div className="container">
                    <div className="footer-middle-content">
                        <div className="logo-footer">
							<Link to="/"><img src={logolight} alt="" /></Link>
                        </div>
                        
                        <ul className="copyrights-nav"> 
						
							<li><Link to="/terms_conditions">Terms  &amp; Condition</Link></li>
							<li><Link to="/privacy_policy">Privacy Policy</Link></li>
							<li><Link to="/contactus">Contact Us</Link></li>
							
                        </ul>
                        
                        <ul className="social-icons  wt-social-links footer-social-icon">
							<li><Link to="https://www.facebook.com/dronza" target="_blank" className="fa fa-facebook">&nbsp;</Link></li>
							<li><Link to="https://www.twitter.com/dronza" target="_blank" className="fa fa-twitter">&nbsp;</Link></li>
							<li><Link to="https://www.linkedin.com/dronza" target="_blank" className="fa fa-linkedin">&nbsp;</Link></li>						
                        </ul>                     
                    </div>
                </div>  
                                                  
            </div>                    
            <div className="footer-bottom">
              <div className="container">
                <div className="wt-footer-bot-left d-flex justify-content-center">
                    <span className="copyrights-text">&copy; {new Date().getFullYear()} Your Company. Designed By <span className="site-text-primary">Thewebmax</span></span>
                </div>
              </div>   
            </div>   


        </footer>
        {/* <!--FOOTER END --> */}
    </>
    )
}
export default FooterPage;