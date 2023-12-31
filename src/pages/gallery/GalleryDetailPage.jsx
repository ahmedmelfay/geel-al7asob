import React from 'react'
import { Link } from 'react-router-dom';
import Gallery4SectionGalleryDetail from './sections/section_gallery4/Gallery4SectionGalleryDetail';

const GalleryDetailPage = (props) => {
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:"url(/assets/images/banner/8.jpg)"}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Gallery Detail</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Gallery Detail</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		<Gallery4SectionGalleryDetail />
    </>
    )
}
export default GalleryDetailPage;