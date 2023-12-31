import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Home2SectionCounter = (props) => {	  	
    return(
	<>
	{/* <!-- COUNTER SECTION START --> */}
	<div className="section-full counter-outer3 p-t80 p-b50">
		<div className="container">
			<div className="section-content"> 
				<div className="counter-outer">                            
					
					<div className="row justify-content-center">
							
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 ">
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
								
								<span className="site-text-primary title-style-2">Satisfied Clients</span>
							</div>
						</div>
						
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 ">
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
								
								<span className="site-text-primary title-style-2">4K Resolution</span>
							</div>
						</div>
						
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 ">
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
								
								<span className="site-text-primary title-style-2">Flight Time</span>
							</div>
						</div>
						
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 ">
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
								
								<span className="site-text-primary title-style-2">Project done</span>
							</div>
						</div>                                    
	
					</div>                            
				
				</div> 
			</div> 
		</div>
	</div>   
	{/* <!-- COUNTER SECTION  SECTION END --> */}  
    </>
    )
}
export default Home2SectionCounter;