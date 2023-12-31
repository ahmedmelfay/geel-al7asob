import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarouselFeaturedProducts from "../../../common/gallery/OwlCarouselFeaturedProducts";
import ImagesOwlCarouselFeaturedProducts from '../../../data/ImagesOwlCarouselFeaturedProducts';
const ShopSectionFeaturedProduct = (props) => {	  	
    return(
	<>	 
	{/* <!-- SECTION CONTENT START --> */}
	<div className="section-full p-t80 p-b50 bg-gray">
		<div className="container">
			<div className="section-content">
			   
				{/* <!-- TITLE START --> */}
					<div className="wt-separator-two-part">
						<div className="row wt-separator-two-part-row">
							<div className="col-lg-8 col-md-6 wt-separator-two-part-left">
								{/* <!-- TITLE START--> */}
								<div className="section-head left wt-small-separator-outer">
									<div className="wt-small-separator site-text-primary">
										<div className="sep-leaf-left"></div>
										<div>Our Best Products</div>
										<div className="sep-leaf-right"></div>
									</div>
									<h2>Featured products</h2>
								</div>
								{/* <!-- TITLE END--> */}
							</div>
							<div className="col-lg-4 col-md-6 wt-separator-two-part-right text-right">
								<Link to="/#" className="site-button site-btn-effect">More Detail</Link>
							</div>
						</div>
					</div>                        
				
				{/* <!-- TITLE END --> */}
				<OwlCarouselFeaturedProducts Images={ImagesOwlCarouselFeaturedProducts} />
				<div className="owl-carousel featured-products owl-btn-vertical-center">					
				   
				</div>
			</div>
		</div>
	</div>
	 {/* <!-- SECTION CONTENT END --> */}  
    </>
    )
}
export default ShopSectionFeaturedProduct;