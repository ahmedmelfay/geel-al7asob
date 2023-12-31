import React from 'react';

import OwlCarouselProductShowSlider2 from '../../../../common/gallery/OwlCarouselProductShowSlider2';
import ImagesProductShowSlider2 from "../../../../data/ImagesProductShowSlider2";
const Home3SectionProduct = (props) => {	  	
    return(
	<>
	{/*<!-- PRODUCT SECTION START --> */}
	<div className="section-full products-section p-t80 p-b80 bg-gray">
	
			<div className="container">
				{/*<!-- TITLE START--> */}
				<div className="section-head center wt-small-separator-outer text-center">
					<div className="wt-small-separator site-text-primary">
						<div  className="sep-leaf-left"></div>
						<div>Best Products</div>
						<div  className="sep-leaf-right"></div>
					</div>
					<h2>Drone Products</h2>
				</div>
				{/*<!-- TITLE END--> */} 
			</div>
			 <OwlCarouselProductShowSlider2 Images={ImagesProductShowSlider2} />
								
	
	</div>   
	{/*<!-- PRODUCT SECTION  SECTION END --> */}
    </>
    )
}

export default Home3SectionProduct;