import React from 'react'
import { Link } from 'react-router-dom';
import PagesSectionOurTeam1 from './sections/PagesSectionOurTeam1';
import PagesSectionOurTeam2 from './sections/PagesSectionOurTeam2';

const TeamPage = (props) => {
	  	
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:'url(/assets/images/banner/7.jpg)'}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Team</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Team</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		
		<PagesSectionOurTeam1 />
		<PagesSectionOurTeam2 />
		
    </>
    )
}
export default TeamPage;