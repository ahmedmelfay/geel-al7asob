import React from 'react';
import { Link } from 'react-router-dom';
var pic2 = require('../../../assets/images/cart/thumb/pic2.jpg');
var pic3 = require('../../../assets/images/cart/thumb/pic3.jpg');
const ShopSectionWishList = (props) => {	  	
    return(
	<>
	{/* <!-- OUR BEST SERVICES SECTION  START--> */}                  
	<div className="section-full text-center p-t80 p-b80">
		<div className="container">
			
			<div className="section-content">
			
				<div id="no-more-tables">
					<table className="table-bordered  table-condensed cf wt-responsive-table shopping-table text-left wish-list-table">
						<thead className="cf">
							<tr>
								<th>Image</th>
								<th>Product Name</th>
								<th className="numeric">Unit Price</th>
								<th className="numeric">Stock Status</th>
								<th className="numeric">Total</th>
								<th className="numeric">Remove</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-title="Code"><img src={pic2} alt="" /></td>
								<td data-title="Company">DJI Inspire 2</td>
								<td data-title="Price" className="numeric">$49.00</td>
								<td data-title="Change" className="numeric">In Stock</td>
								<td data-title="Change %" className="numeric"><Link to="/#" className="text-black">Add to Cart</Link></td>
								<td data-title="Open" className="numeric"><Link to="/#"><i className="fa fa-times"></i></Link></td>
							</tr>
							<tr>
								<td data-title="Code"><img src={pic3} alt="" /></td>
								<td data-title="Company">Mavic Pro Platinum</td>
								<td data-title="Price" className="numeric">$15.00</td>
								<td data-title="Change" className="numeric">In Stock</td>
								<td data-title="Change %" className="numeric"><Link to="/#" className="text-black"> Add to Cart</Link></td>
								<td data-title="Open" className="numeric"><Link to="/#"><i className="fa fa-times"></i></Link></td>
							</tr>

						</tbody>
					</table>
				</div>
			</div>

		</div>
	</div>
	{/* <!-- OUR BEST SERVICES SECTION END --> */}
    </>
    )
}
export default ShopSectionWishList;