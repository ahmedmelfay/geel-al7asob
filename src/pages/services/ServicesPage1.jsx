import React from 'react'
import { Link } from 'react-router-dom';
import ServicesSectionAllServices from './sections/section_services1/ServicesSectionAllServices';
import ServicesSectionMainlServices from './sections/section_services1/ServicesSectionMainlServices';
import ServicesSectionPricingTable from './sections/section_services1/ServicesSectionPricingTable';
import ServicesSectionContactUs from './sections/section_services1/ServicesSectionContactUs';
var two = require('../../assets/images/banner/2.jpg');

const ServicesPage1 = (props) => {
	  	
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${two})`}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Services 1</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Services 1</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		
		<ServicesSectionAllServices />
		<ServicesSectionMainlServices />
		<ServicesSectionPricingTable />
		<ServicesSectionContactUs />
    </>
    )
}
export default ServicesPage1;