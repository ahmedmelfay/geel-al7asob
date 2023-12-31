import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../../../assets/css/dropdown.css';

const ShopSectionCheckout = (props) => {	
const optionsCountry = [
  'Usa', 'China', 'India','Australia','Japan'
]; 
const defaultOptionCountry = optionsCountry[0];	  	

const optionsState = [
  'Los Angeles', 'Chicago', 'Phoenix','San Diego','Dallas'
]; 
const defaultOptionState = optionsState[0];	

const optionsTwon = [
  'Columbia', 'Berkeley', 'The Woodlands','Plano','Boulder'
];
const defaultOptionTwon = optionsTwon[0];   	
    return(
	<>
	{/* <!-- SECTION CONTENT START --> */}
	<div className="section-full p-t80 p-b50">
	
		{/* <!-- PRODUCT DETAILS --> */}
		<div className="container woo-entry">
	   
			{/* <!-- SECTION CONTENT START --> */}
				<div className="section-content">
					<div className="row justify-content-center">
	
						<div className="col-lg-6 col-md-12 m-b30">
							
							
							
							<div className="checkout-billing-form">
							
								<div className="wt-title m-b30">
									<h3>Billing Information</h3>
								</div>                                     
								<form>
								
									<div className="row">
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>First Name</label>
												<input type="text" className="form-control"  placeholder="First Name" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>Last Name</label>
												<input type="text" className="form-control"  placeholder="Last Name" />
											</div>
										</div>
									</div>
									
									<div className="form-group">
										<label>Company Name</label>
										<input type="text" className="form-control" placeholder="Company Name" />
									</div>
									
									<div className="row">
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>Phone</label>
												<input type="text" className="form-control"  placeholder="Enter Phone Number" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>Email Address</label>
												<input type="email" className="form-control"  placeholder="Enter email" />
											</div>
										</div>
									</div>
									
									<div className="row">
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>Country</label>
												<Dropdown options={optionsCountry} controlClassName='form-control selectpicker' style={{minHeight:'500px'}}  className='bootstrap-select mainClass'  menuClassName='myMenuClassName'  value={defaultOptionCountry} placeholderClassName='myPlaceholderClassName' placeholder="Select an option" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>State / City</label>
												<Dropdown options={optionsState} controlClassName='form-control selectpicker' style={{minHeight:'500px'}}  className='bootstrap-select mainClass'  menuClassName='myMenuClassName'  value={defaultOptionState} placeholderClassName='myPlaceholderClassName' placeholder="Select an option" />
											</div>
										</div>
									</div>
									
									<div className="row">
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>Town</label>
												<Dropdown options={optionsTwon} controlClassName='form-control selectpicker' style={{minHeight:'500px'}}  className='bootstrap-select mainClass'  menuClassName='myMenuClassName'  value={defaultOptionTwon} placeholderClassName='myPlaceholderClassName' placeholder="Select an option" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="form-group">
												<label>EZIP / Post Code</label>
												<input type="text" className="form-control"  placeholder="EZIP / Post Code" />
											</div>
										</div>
									</div>
									
									<div className="form-group">
										<label>Address</label>
										<input type="text" className="form-control m-b30"  placeholder="Address 1" />
										<input type="text" className="form-control"  placeholder="Address 2" />
									</div>
									
									<div className="form-group form-inline">
										<div className="radio">
											<input id="checkmeout1" name="Public" value="checkmeout" type="checkbox" />
											<label htmlFor="checkmeout1">Ship to the same address</label>
										</div>
									</div>
									
									<button type="submit" value="submit"  className="site-button site-btn-effect">Save and Deliver Here</button>
									
								</form>
							</div>                    
						</div>
						
						<div className="col-lg-6 col-md-12 m-b30">
						
						 
							
							
							<div className="your-order-list">
								<div className="wt-title m-b30">
									<h3>Your Order</h3>
								</div>                                      
								<ul>
									<li>DJI Inspire <strong>$15.00</strong></li>
									<li>Mavic Pro Platinum<strong>$150.00</strong></li>
									<li><b> Cart Subtotal</b><strong>$165.00</strong></li>
									<li><b> Shipping</b><strong>$50.00</strong></li>
									<li><b> Cart Total</b><strong>$215.00</strong></li>
								</ul>
								<div className="place-order text-right">
									<Link to="/#" className="site-button site-btn-effect">Place Order</Link>
								</div>
							</div>                    
						</div>                                    
					</div>
				</div>
			{/* <!-- SECTION CONTENT END --> */}                    
			
		</div>
		{/* <!-- PRODUCT DETAILS --> */}	
			
	</div>
	{/* <!-- CONTENT CONTENT END --> */}                    
	
    </>
    )
}
export default ShopSectionCheckout;