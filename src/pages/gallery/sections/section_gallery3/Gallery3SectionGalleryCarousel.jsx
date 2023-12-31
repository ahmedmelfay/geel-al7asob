import React from 'react';
import OwlCarouselIndustruyBox from "../../../../common/gallery/OwlCarouselIndustruyBox";
import Image from '../../../../data/ImagesIndustruyBoxSlider';
const Gallery3SectionGalleryCarousel = (props) => {	  	
    return(
	<>	
	{/* <!-- GALLERY SECTION START --> */}
	   <OwlCarouselIndustruyBox Images={Image} />
	{/* <!-- GALLERY SECTION END --> */} 
    </>
    )
}
export default Gallery3SectionGalleryCarousel;