import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import OwlCarouselProductShowSlider from '../../../../common/gallery/OwlCarouselProductShowSlider';
import ImagesProductShowSlider from "../../../../data/ImagesProductShowSlider";

var bg9 = require('../../../../assets/images/background/bg-9.jpg');

const HomeSectionProduct = (props) => {	  	
    return(
	<>
	
	
	{/* <!-- PRODUCT SECTION START --> */}
	<div className="section-full overlay-wraper products-section p-t80 p-b50 bg-white bg-cover bg-no-repeat" style={{backgroundImage:`url(${bg9})`}}>
			<div className="overlay-main bg-white opacity-09"></div>                   
	
			<div className="container">
				{/* <!-- TITLE START--> */}
				<div className="section-head center wt-small-separator-outer text-center">
					<div className="wt-small-separator site-text-primary">
						<div  className="sep-leaf-left"></div>
						<div>Best Products</div>
						<div  className="sep-leaf-right"></div>
					</div>
					<h2 data-title="Products">Drone Products</h2>
				</div>
				{/* <!-- TITLE END--> */} 
			</div>
			<div className="section-content"> 
				<div className="product-one-slider p-b80">
				   <OwlCarouselProductShowSlider Images={ImagesProductShowSlider} />
						
				</div>						
	
						
				<div className="container">
	
					<div className="counter-outer">                            
						
						<div className="row justify-content-center">
								
							<div className="col-lg-3 col-md-6 m-b30 ">
								<div className="counter-box">
									<CountUp end={50} redraw={true}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<h2 className="counter">
													<span ref={countUpRef} />
												</h2>	
											</VisibilitySensor>
										)}
									</CountUp>
								    							
									<span className="site-text-secondry title-style-2">Satisfied Clients</span>
								</div>
							</div>
							
							<div className="col-lg-3 col-md-6 m-b30">
								<div className="counter-box">
									<CountUp end={2160} redraw={true}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<h2 className="counter">
													<span ref={countUpRef} />
												</h2>	
											</VisibilitySensor>
										)}
									</CountUp>
																	
									<span className="site-text-secondry title-style-2">4K Resolution</span>
								</div>
							</div>
							
							<div className="col-lg-3 col-md-6 m-b30">
								<div className="counter-box">
									<CountUp end={45} redraw={true}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<h2 className="counter">
													<span ref={countUpRef} />
												</h2>	
											</VisibilitySensor>
										)}
									</CountUp>
								
									<span className="site-text-secondry title-style-2">Flight Time</span>
								</div>
							</div>
							
							<div className="col-lg-3 col-md-6 m-b30">
								<div className="counter-box">
									<CountUp end={120} redraw={true}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<h2 className="counter">
													<span ref={countUpRef} />
												</h2>	
											</VisibilitySensor>
										)}
									</CountUp>
								
									<span className="site-text-secondry title-style-2">Project done</span>
								</div>
							</div>                                    
	
						</div>                            
					
					</div>   
		 
				</div>
			</div>
	
	</div>   
	{/* <!-- PRODUCT SECTION  SECTION END --> */} 			 
    </>
    )
}

export default HomeSectionProduct;