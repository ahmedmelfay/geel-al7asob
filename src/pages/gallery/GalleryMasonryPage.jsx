import React from 'react'
import { Link } from 'react-router-dom';
import DataGalleryMasonryPage from '../../data/DataGalleryMasonryPage';
import GalleryTabMasonry from '../../common/gallery/tab_gallery/GalleryTabMasonry';

var eight = require('../../assets/images/banner/8.jpg');
const GalleryMasonryPage = (props) => {
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${eight})`}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Gallery masonry</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Gallery masonry</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
	
		
		<GalleryTabMasonry demoData={DataGalleryMasonryPage} />
    </>
    )
}
export default GalleryMasonryPage;