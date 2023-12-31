import React from 'react';
import OwlCarouselProjectDetail from '../../../../common/gallery/OwlCarouselProjectDetail';
import Images from '../../../../data/ImagesProjectDetail';
const Gallery4SectionGalleryDetail = (props) => {	  	
    return(
	<>
	<OwlCarouselProjectDetail Images={Images} />
	
	<div className="section-full p-t80 p-b50">
		<div className="container">
	
					<div className="sing-gallery-detail">
						<h3 className="m-t0">Aerial Photography and Video Production Services</h3>
						<p>All this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, builder of human happiness. Great explorer of the truth, the master-builder of human happinessbut because those who do not to pursue seds. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit.</p> 
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit.</p> 
					   
					</div> 
					
					<div className="  gallery-detail-single-list">
						<h3 className="wt-tilte">Highlights of the DJI Phantom 4 Pro:</h3>
						<ul className="list-check">
							<li>Mechanical shutter that eliminates rolling distortion</li>
							<li>Dual-frequency transmission to avoid interference</li>
							<li>12MP stills in 14fps bursts</li>
							<li>Mechanical shutter that eliminates rolling distortion</li>
							<li>Dual-frequency transmission to avoid interference</li>
							<li>Active-Track for locking onto and tracking subjects in three modes</li>
						</ul>
					</div>                            
	
	   </div>
	</div>     
    </>
    )
}
export default Gallery4SectionGalleryDetail;