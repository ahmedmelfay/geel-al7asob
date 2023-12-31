import React from 'react'
import { Link } from 'react-router-dom';
import GalleryTabGrid from '../../common/gallery/tab_gallery/GalleryTabGrid';
import DataGalleryGridPage from '../../data/DataGalleryGridPage';

var five = require('../../assets/images/banner/5.jpg');

const GalleryGridPage = (props) => {
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${five})`}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Gallery Grid</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Gallery Grid</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		<GalleryTabGrid demoData={DataGalleryGridPage} />
    </>
    )
}
export default GalleryGridPage;