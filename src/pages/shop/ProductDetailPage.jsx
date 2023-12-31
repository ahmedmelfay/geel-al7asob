import React from 'react'
import { Link } from 'react-router-dom';
import ShopSectionProductDetail from './sections/ShopSectionProductDetail';
import ShopSectionFeaturedProduct from './sections/ShopSectionFeaturedProduct';
var one = require('../../assets/images/banner/1.jpg');

const ProductDetailPage = (props) => {
	  	
    return(
	<>
		{/* <!-- INNER PAGE BANNER --> */}
		<div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${one})`}}>
			<div className="overlay-main site-bg-primary opacity-09"></div>
			<div className="container">
				<div className="wt-bnr-inr-entry">
					<div className="banner-title-outer">
						<div className="banner-title-name">
							<h2 className="site-text-white">Product Detail</h2>
						</div>
					</div>
					{/* <!-- BREADCRUMB ROW --> */}                            
					
						<div>
							<ul className="wt-breadcrumb breadcrumb-style-2">
								<li><Link to="/">Home</Link></li>
								<li>Shop</li>
							</ul>
						</div>
					
					{/* <!-- BREADCRUMB ROW END --> */}                        
				</div>
			</div>
		</div>			
		{/* <!-- INNER PAGE BANNER END --> */}
		
		<ShopSectionProductDetail />
		<ShopSectionFeaturedProduct />
		
    </>
    )
}
export default ProductDetailPage;