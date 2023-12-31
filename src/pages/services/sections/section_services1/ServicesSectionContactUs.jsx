import React from 'react';
var bg3 = require('../../../../assets/images/background/bg3.jpg');
const ServicesSectionContactUs = (props) => {	  	
    return(
	<>
	{/* <!-- VISION SECTION START --> */}
	<div className="section-full  p-t80 p-b80 overlay-wraper  bg-bottom-right bg-no-repeat" style={{backgroundImage:`url(${bg3})`}}>
		<div className="overlay-main bg-black opacity-07"></div>
		<div className="container">
				{/* <!-- TITLE START--> */}
				<div className="section-head center wt-small-separator-outer text-center text-white">
					<div className="wt-small-separator site-text-primary">
						<div  className="sep-leaf-left"></div>
						<div>Contact us</div>
						<div  className="sep-leaf-right"></div>
					</div>
					<h2>Feel free to get in touch!</h2>
				</div>
				{/* <!-- TITLE END--> */}                
			<div className="row justify-content-center">
				
				<div className="col-lg-8 col-md-12">
				
					 <div className="home-contact-section p-a50">
						<form className="cons-contact-form" method="post" action="form-handler2.php">
																	
							<div className="row">
							   <div className="col-md-6 col-sm-6">
									<div className="form-group">
										<input name="username" type="text" required className="form-control" placeholder="Name"/>
									</div>
								</div>
								
								<div className="col-md-6 col-sm-6">
									<div className="form-group">
									   <input name="email" type="text" className="form-control" required placeholder="Email"/>
									</div>
								</div>
								
								<div className="col-md-6 col-sm-6">
									<div className="form-group">
										<input name="phone" type="text" className="form-control" required placeholder="Phone"/>
									 </div>
								</div>
								
								<div className="col-md-6 col-sm-6">
									<div className="form-group">
										 <input name="subject" type="text" className="form-control" required placeholder="Subject"/>
									 </div>
								</div>
								
								<div className="col-md-12">
									<div className="form-group">
									   <textarea name="message" className="form-control" rows="4" placeholder="Message"></textarea>
									 </div>
								</div>
								
							   <div className="col-md-12">
									<button type="submit" className="site-button site-btn-effect">Send us a message</button>
								</div>
								
							</div>
					   </form>                                        
					</div>
										
				</div>
		   </div>
		</div>
		
	</div>
	{/* <!-- VISION SECTION END --> */} 
    </>
    )
}
export default ServicesSectionContactUs;