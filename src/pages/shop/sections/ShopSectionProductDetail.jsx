import React  from 'react';
import { Link } from 'react-router-dom';
import ShopSectionProductTabContent from './ShopSectionProductTabContent';

import GalleryProductDetail from "../../../common/gallery/GalleryProductDetail";
import ImagesProductDetail from '../../../data/ImagesProductDetail';

const ShopSectionProductDetail = (props) => {	
 
    return(
	<>
	  {/* <!-- SECTION CONTENT START --> */}
		<div className="section-full p-t80 p-b80">
		
			{/* <!-- PRODUCT DETAILS --> */}
			<div className="container woo-entry">
			
				<div className="row m-b30">
					{/* <!-- PRODUCT DETAILS PAGE SIDE GALLERY START --> */}
					<div className="col-lg-6 col-md-12  m-b30">
						<div className="wt-box wt-product-gallery on-show-slider"> 
							
							
							<GalleryProductDetail Images={ImagesProductDetail}  />	
							
							
							
							
							
						</div>
					</div>
					{/* <!-- PRODUCT DETAILS PAGE SIDE GALLERY END --> */}
					
					{/* <!-- PRODUCT DETAILS SIDE BAR START --> */}
					<div className="col-lg-6 col-md-12">
						<div className="product-detail-info p-a30">
							<div className="single-product-title ">
								<h2 className="post-title"><Link to="/">DJI Mavic 2 Pro</Link></h2>
							</div>
							<div className="product-single-price">
								<span className="p-single-old-price">$149.00 USD</span>
								<span className="p-single-new-price">$99.00 USD </span>
							</div>
							
						<div className="product-single-availability">
							Availability: <span>In Stock</span>
						</div>                                
							<div className="product-single-rating">
								<span className="rating-bx">
								 <i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</span>
								<span className="font-weight-600 text-black">(4 customer reviews)</span>
							</div>                                   
	
									
							<div className="wt-product-text">
								<p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by mour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the lorem ...</p> 
							</div>
							<form method="post" className="cart clearfix">
								<div className="quantity btn-quantity m-b20">
									<input id="demo_vertical2" type="text" defaultValue="1" name="demo_vertical2" />
								</div>
								<button className="site-button site-btn-effect m-b20">Add to Cart</button>
							</form>
							<div className="product_meta"> 
								<div className="sku_wrapper">SKU: 
									<span className="sku">1240-1-1</span>
								</div> 
								<div className="posted_in">Categories: 
									<Link to="#" rel="tag">Metal,</Link>
									<Link to="#" rel="tag">Drone</Link>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- PRODUCT DETAILS SIDE BAR END --> */}
					
					
					
				</div>
			
			<ShopSectionProductTabContent />
				
									
	
	
			</div>
			{/* <!-- PRODUCT DETAILS --> */}    
				
		</div>
		{/* <!-- CONTENT CONTENT END --> */}	
    </>
    )
}
export default ShopSectionProductDetail;