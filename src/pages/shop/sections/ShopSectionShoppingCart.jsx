import React from 'react';
import { Link } from 'react-router-dom';
var pic2 = require('../../../assets/images/cart/thumb/pic2.jpg');
var pic3 = require('../../../assets/images/cart/thumb/pic3.jpg');
const ShopSectionShoppingCart = (props) => {	  	
    return(
	<>
	 {/*<!-- SHOPPING CART SECTION  START-->*/}                  
            <div className="section-full  p-t80 p-b80">
                <div className="container">
                    
                    <div className="section-content">
                    
                        <div id="no-more-tables">
                            <table className="table-bordered  table-condensed cf wt-responsive-table shopping-table">
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
                                        <td data-title="Code"><img src={pic2} alt=""/></td>
                                        <td data-title="Company">DJI Inspire 2</td>
                                        <td data-title="Price" className="numeric">$35.00</td>
                                        <td data-title="Change" className="numeric">In Stock</td>
                                        <td data-title="Change %" className="numeric"><Link to="#" className="text-black">Add to Cart</Link></td>
                                        <td data-title="Open" className="numeric"><Link to="#"><i className="fa fa-times"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code"><img src={pic3} alt=""/></td>
                                        <td data-title="Company">Mavic Pro Platinum</td>
                                        <td data-title="Price" className="numeric">$15.00</td>
                                        <td data-title="Change" className="numeric">In Stock</td>
                                        <td data-title="Change %" className="numeric"><Link to="#" className="text-black"> Add to Cart</Link></td>
                                        <td data-title="Open" className="numeric"><Link to="#"><i className="fa fa-times"></i></Link></td>
                                    </tr>
    
                                </tbody>
                            </table>
                            <div className="cart-buttons text-left">
                                <Link to="#" className="m-b15 site-button-secondry m-r15">Update Cart</Link>
                                <Link to="#" className="m-b15 site-button">Continue Shopping</Link>
                            </div>
                            
							<div className="cart-total-table shopping-cart-total">
                                <div className="sub_total">
                                       <ul className="top">
                                          <li>Subtotal</li>
                                          <li><span>$50.00</span></li>
                                       </ul>
                                       <div className="shipping">
                                          <ul>
                                             <li> Free Shiping <span>+ $00.00</span></li>
                                          </ul>
                                       </div>
                                       <div className="total">
                                          <ul>
                                             <li>Total</li>
                                             <li><span>$50.00</span></li>
                                          </ul>
                                       </div>
                                       
                                </div>
                                
                                <div className="proceed-to-checkout text-right">
                                	<Link to="#" className="m-t15 site-button">Proceed to checkout</Link>
                                </div>                                   
                                
                            
                            </div>                     
                            
                        </div>
                    </div>

                </div>
            </div>
            {/*<!-- SHOPPING CART SECTION END -->*/}	
    </>
    )
}
export default ShopSectionShoppingCart;