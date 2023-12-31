import React,{useRef} from 'react'
import { useLocation } from 'react-router-dom'
import ProductPage from '../pages/shop/ProductPage'
import ProductDetailPage from '../pages/shop/ProductDetailPage'
import ProductShoppingCart from '../pages/shop/ProductShoppingCart'
import ProductCheckout from '../pages/shop/ProductCheckout'
import ProductWishList from '../pages/shop/ProductWishList'
import HeaderLayout from '../layout/HeaderLayout';
import FooterLayout from '../layout/FooterLayout';
const ShopLayout = () => {	  	
	  	function titleCase(str) 
		{
		  str = str.toLowerCase().split(' ');
		  for (var i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
		  }
		  return str.join(' ');
		}	   
		function MyPage() 
		{
		  var pageRef = useRef(ProductPage);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='Product')?<ProductPage />:(loc==='Product-detail')?<ProductDetailPage />:(loc==='Shopping-cart')?<ProductShoppingCart />:(loc==='Checkout')?<ProductCheckout />:(loc==='Wish-list')?<ProductWishList />:<ProductPage />;					
		  return pageRef.displayPage;
		}				
    return(
	<>		
	<HeaderLayout/>		
		<div className="page-content">                   
			<MyPage />	 			
		</div>	
	<FooterLayout />	
	</>
    )
}
export default ShopLayout;