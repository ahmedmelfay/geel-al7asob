import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.css';

var pic1 = require('../../assets/images/testimonials/pic1.jpg');
var pic2 = require('../../assets/images/testimonials/pic2.jpg');
var pic3 = require('../../assets/images/testimonials/pic3.jpg');

const ProductTabs = (props) => {	
	return(
	<Tabs className="wt-tabs border bg-tabs">
    <TabList className="nav nav-tabs">
      <Tab> Description</Tab>
      <Tab> Additional information</Tab>
	  <Tab> Review</Tab>
    </TabList>

    <TabPanel>
		<div className=" p-a10">
			<p className="m-b10">Hundreds of thousands a still more glorious nights around art table May 28, 2023 Uncategorized Preserve and cherish that pale blue dot are creatures of the cosmos light years May 27, 2023 Uncategorized Great turbulent clouds hearts of the stars stirred by starlight sky culture</p>
			
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
			
			
		</div>
    </TabPanel>
    <TabPanel>
		<table className="table m-b0 no-border">
		<tbody>
			<tr>
				<td><b>Size</b></td>
				<td>Small, Medium, Large & Extra Large</td>
			</tr>
			<tr>
				<td><b>Color</b></td>
				<td>Read, Blue, Green & Black</td>
			</tr>
			<tr>
				<td><b>Length</b></td>
				<td>35 cm</td>
			</tr>
			<tr>
				<td><b>Fabric</b></td>
				<td>Cotton, Silk & Synthetic</td>
			</tr>
			<tr>
				<td><b>Warranty</b></td>
				<td>6 Months</td>
			</tr>
		</tbody>	
		</table>
    </TabPanel>
	
	 <TabPanel>
		<div className="bg-white p-a10">
			<div id="comments">
				<ol className="commentlist">
					<li className="comment">
						<div className="comment_container">
							<img className="avatar avatar-60 photo" src={pic1} alt="" />
							<div className="comment-text">
								
								<p className="meta">
									<strong className="author">Cobus Bester</strong>
									<span><i className="fa fa-clock-o"></i> March 20, 2023</span>
								</p>
								<div className="description">
									<p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
								</div>
							</div>
						</div>
					</li>
					<li className="comment">
						<div className="comment_container">
							<img className="avatar avatar-60 photo" src={pic2} alt="" />
							<div className="comment-text">
								
								<p className="meta">
									<strong className="author">Cobus Bester</strong>
									<span><i className="fa fa-clock-o"></i> March 12, 2023</span>
								</p>
								<div className="description">
									<p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
								</div>
							</div>
						</div>
					</li>
					<li className="comment">
						<div className="comment_container">
						  <img className="avatar avatar-60 photo" src={pic3} alt="" />
						  <div className="comment-text">
								
								<p className="meta">
									<strong className="author">Cobus Bester</strong>
									<span><i className="fa fa-clock-o"></i> March 11, 2023</span>
								</p>
								<div className="description">
									<p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
								</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
			<div id="review_form_wrapper">
				<div id="review_form">
						<div id="respond" className="comment-respond">                                              
							<h3 className="comment-reply-title" id="reply-title">Add a review</h3>                                              
							<form className="comment-form" method="post"  >                                                  
								<div className="comment-form-author">
									<label>Name <span className="required">*</span></label>
									<input type="text" aria-required="true" size="30" placeholder="" name="author" id="author" defaultValue="" />
								</div>
								<div className="comment-form-email">
									<label>Email <span className="required">*</span></label>
									<input type="text" aria-required="true" size="30" placeholder="" name="email" id="Email" defaultValue="" />
								</div>                                                      
								<div className="comment-form-rating">
									<label>Your Rating</label>
									<div className='star-Rating-input'>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o"></i>
										<i className="fa fa-star-o"></i>
									</div>
								</div>                                                      
								<div className="comment-form-comment">
									<label>Your Review</label>
									<textarea aria-required="true" rows="8" cols="45" name="comment" id="comment"></textarea>
								</div>
								<div className="form-submit">                                                       
									<button className="site-button site-btn-effect" type="submit">Submit</button>
								</div>                                                  
							</form>                                                 
						</div>
					</div>
			</div>
		</div>
		
		
    </TabPanel>
	
	
  	</Tabs>
    )
	
}
export default ProductTabs;