import React from 'react'
import { Link } from 'react-router-dom';
import Gallery3SectionGalleryCarousel from './sections/section_gallery3/Gallery3SectionGalleryCarousel';
import Gallery3SectionBestVideoGallery from './sections/section_gallery3/Gallery3SectionBastVideoGallery';
import Gallery3SectionDroneGallery from './sections/section_gallery3/Gallery3SectionDroneGallery';
import Gallery3SectionVideoGallery from './sections/section_gallery3/Gallery3SectionVideoGallery';
var eight = require('../../assets/images/banner/8.jpg');
const GalleryCarouselPage = (props) => {
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${eight})`}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Gallery Carousel</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Gallery Carousel</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		<Gallery3SectionGalleryCarousel />		
		<Gallery3SectionBestVideoGallery />
		<Gallery3SectionDroneGallery />
		<Gallery3SectionVideoGallery />
		
    </>
    )
}
export default GalleryCarouselPage;