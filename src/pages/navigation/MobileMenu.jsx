import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function MobileMenu() {
	
	const [isNavExpanded1, setIsNavExpanded1] = useState(false);
	const [isNavExpanded2, setIsNavExpanded2] = useState(false); 
	const [isNavExpanded3, setIsNavExpanded3] = useState(false); 
	const [isNavExpanded4, setIsNavExpanded4] = useState(false); 
	const [isNavExpanded5, setIsNavExpanded5] = useState(false); 
	const [isNavExpanded6, setIsNavExpanded6] = useState(false); 
	const [isNavExpanded7, setIsNavExpanded7] = useState(false); 
  return (
  <>
  	  
	 <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center" style={{display:'block!important', left:'15px', minHeight:'300px!important'}}>
          
		<ul className=" nav navbar-nav" style={{height:'300px!important'}}>
			<li className={`has-child ${isNavExpanded1 ? 'nav-active' : ''} `}>
					<Link to="/">Home</Link>
					<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded1(!isNavExpanded1);}}></div>
				<ul className="sub-menu" style={{display: isNavExpanded1 ? 'block' : 'none'}}>
					<li><Link to="/">Home 1</Link></li>
					<li><Link to="/Home2">Home 2</Link></li>
					<li><Link to="/Home3">Home 3</Link></li>
					<li><Link to="/Home4">Home 4</Link></li>                                                                                                                               
				</ul>                                 
			</li>
			
			<li className={`has-child ${isNavExpanded2 ? 'nav-active' : ''} `}>
				<Link>About</Link>
				<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded2(!isNavExpanded2);}}></div>
				<ul className="sub-menu" style={{display: isNavExpanded2 ? 'block' : 'none'}}>
					<li><Link to="/about">About 1</Link></li>
					<li><Link to="/about2">About 2</Link></li>											
				</ul>                                
			</li>                                    
			<li className={`has-child ${isNavExpanded3 ? 'nav-active' : ''} `}>
				<Link>Services</Link>
				<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded3(!isNavExpanded3);}}></div>									
				<ul className="sub-menu" style={{display: isNavExpanded3 ? 'block' : 'none'}}>
					<li><Link to="/services1">Services one</Link></li>
					<li><Link to="/services2">Services Two</Link></li>
					<li><Link to="/services-detail">Services detail</Link></li>
				</ul>                                
			</li>
			<li className={`has-child ${isNavExpanded4 ? 'nav-active' : ''} `}>
				<Link>Gallery</Link>
				<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded4(!isNavExpanded4);}}></div>									
				<ul className="sub-menu" style={{display: isNavExpanded4 ? 'block' : 'none'}}>
					<li><Link to="/gallery-grid">Gallery Grid</Link></li>
					<li><Link to="/gallery-masonry">Gallery Masonry</Link></li>
					<li><Link to="/gallery-carousel">Gallery Carousel</Link></li>
					<li><Link to="/gallery-detail">Gallery Detail</Link></li>
						
				</ul>                                
		   </li>
			<li className={`has-child ${isNavExpanded5 ? 'nav-active' : ''} `}>
				<Link>Pages</Link>
				<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded5(!isNavExpanded5);}}></div>
				<ul className="sub-menu" style={{display: isNavExpanded5 ? 'block' : 'none'}}>										
					<li><Link to="/icon-font">Icon Font</Link></li>
					<li><Link to="/team">Team</Link></li>
					<li><Link to="/team-single">Team Single</Link></li>
					<li><Link to="/faq">FAQ</Link></li>
					<li><Link to="/error-404">Error 404</Link></li>
					<li><Link to="/contactus">Contact us</Link></li>
				</ul>
			</li>                                   
			<li className={`has-child ${isNavExpanded6 ? 'nav-active' : ''} `}>
				<Link>Shop</Link>
				<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded6(!isNavExpanded6);}}></div>									
				<ul className="sub-menu" style={{display: isNavExpanded6 ? 'block' : 'none'}}>											
					<li><Link to="/product">Shop</Link></li>
					<li><Link to="/product-detail">Shop Detail</Link></li>
					<li><Link to="/shopping-cart">Shopping Cart</Link></li>
					<li><Link to="/checkout">Checkout</Link></li>											
					<li><Link to="/wish-list">Wishlist</Link></li>										                                          
				</ul>                                
		   </li>                                   
			<li className={`has-child ${isNavExpanded7 ? 'nav-active' : ''} `}>
				<Link>Blog</Link>
				<div className="fa fa-angle-right submenu-toogle" onClick={() => {setIsNavExpanded7(!isNavExpanded7);}}></div>
				<ul className="sub-menu" style={{display: isNavExpanded7 ? 'block' : 'none'}}>											
					<li><Link to="/blog-grid">Blog Grid</Link></li>
					<li><Link to="/blog-list-sidebar">Blog List</Link></li>
					<li><Link to="/blog-post-right-sidebar">Blog Post</Link></li>
				</ul>                                
			</li>                                                                
		</ul>
	</div>				
	</>
  );
}
