import React from 'react';

var drone2 = require('../../../../assets/images/how-it-work/drone-2.png');

const Home2SectionHowItWork = (props) => {	  	
    return(
	<>
	{/* <!-- HOW IT WORK SECTION START --> */}
	<div className="section-full p-t80 p-b50">

			<div className="container">

				{/* <!-- TITLE START--> */}
				<div className="section-head center wt-small-separator-outer">
					<div className="wt-small-separator site-text-primary">
						<div  className="sep-leaf-left"></div>
						<div>You Will Love It.</div>
						<div  className="sep-leaf-right"></div>
					</div>
					<h2>How It Works</h2>
					
				</div>
				{/* <!-- TITLE END--> */}

				<div className="section-content"> 
					<div className="row justify-content-center d-flex how-it-drone3">
					
						<div className="col-lg-4 col-md-12 m-b30 how-it-drone3-left">
							
							<div className="wt-box d-icon-box-two m-b40">
								<div className="wt-icon-box-wraper right ">
									
									<div className="icon-md inline-icon">
										<span className="icon-cell site-text-secondry"><i className="number-style">01</i></span>
									</div>
									<div className="icon-content">
										<div className="d-icon-box-title title-style-2 site-text-secondry">
											<h3  className="s-title-one">How To Use Battery</h3>
										</div>
										
										<div className="d-icon-box-content">
											<p>The majority have suffered alteration insome form, by injected humour,</p>
										</div>                                        
									</div>
									
								</div> 
							</div>
														 
							<div className="wt-box d-icon-box-two m-b40">
								<div className="wt-icon-box-wraper right">
									<div className="icon-md inline-icon">
										<span className="icon-cell site-text-secondry"><i className="number-style">02</i></span>
									</div>
									<div className="icon-content">
										<div className="d-icon-box-title title-style-2 site-text-secondry">
											<h3  className="s-title-one">How To Fly Ready</h3>
										</div>
										
										<div className="d-icon-box-content">
											<p>The majority have suffered alteration in some form, by injected humour,</p>
										</div>                                        
									</div>
								</div> 
							</div>

							<div className="wt-box d-icon-box-two m-b40">
								<div className="wt-icon-box-wraper right">
									<div className="icon-md inline-icon">
										<span className="icon-cell site-text-secondry"><i className="number-style">03</i></span>
									</div>
									<div className="icon-content">
										<div className="d-icon-box-title title-style-2 site-text-secondry">
											<h3  className="s-title-one">How To Control Camera</h3>
										</div>
										
										<div className="d-icon-box-content">
											<p>The majority have suffered alteration in some form, by injected humour,</p>
										</div>                                        
									</div>
								</div> 
							</div>  
																													   
						</div>  
											  
						<div className="col-lg-4 col-md-12 m-b30 how-it-drone2-outer">
							<div className="how-it-drone2-border">
								<div className="how-it-drone2">
									<div className="how-it-drone-media2"><img src={drone2} alt="" className="wave-effects" /></div>
								</div>
							</div>
						</div>  
											  
						<div className="col-lg-4 col-md-12 m-b30 how-it-drone3-right">
							
							<div className="wt-box d-icon-box-two m-b40">
								<div className="wt-icon-box-wraper left">
									<div className="icon-md inline-icon">
										<span className="icon-cell site-text-secondry"><i className="number-style">04</i></span>
									</div>
									<div className="icon-content">
										<div className="d-icon-box-title title-style-2 site-text-secondry">
											<h3  className="s-title-one">How To Fly Drone</h3>
										</div>                                          
										<div className="d-icon-box-content">
											<p>The majority have suffered alteration in some form, by injected humour,</p>
										</div>  
																			
									</div>
								</div> 
							</div>
															
							<div className="wt-box d-icon-box-two m-b40">
								<div className="wt-icon-box-wraper left">
									<div className="icon-md inline-icon">
										<span className="icon-cell site-text-secondry"><i className="number-style">05</i></span>
									</div>
									<div className="icon-content">
										<div className="d-icon-box-title title-style-2 site-text-secondry">
											<h3  className="s-title-one">How To Use Controler</h3>
										</div>
										
										<div className="d-icon-box-content">
											<p>The majority have suffered alteration in some form, by injected humour,</p>
										</div>                                        
									</div>
								</div> 
							</div>                              
							
							<div className="wt-box d-icon-box-two m-b40">
								<div className="wt-icon-box-wraper left">
									<div className="icon-md inline-icon">
										<span className="icon-cell site-text-secondry"><i className="number-style">06</i></span>
									</div>
									<div className="icon-content">
										<div className="d-icon-box-title title-style-2 site-text-secondry">
											<h3  className="s-title-one">How To Play Video</h3>
										</div>
										
										<div className="d-icon-box-content">
											<p>The majority have suffered alteration insome form, by injected humour,</p>
										</div>                                        
									</div>
								</div> 
							</div> 

						</div>

					</div>
				</div>
				
			</div> 

	</div>   
	{/* <!-- HOW IT WORK  SECTION END --> */} 
    </>
    )
}
export default Home2SectionHowItWork;