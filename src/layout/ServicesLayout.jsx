import React,{useRef} from 'react'
import { useLocation } from 'react-router-dom'
import ServicesPage1 from '../pages/services/ServicesPage1'
import ServicesPage2 from '../pages/services/ServicesPage2'
import ServicesDetailPage from '../pages/services/ServicesDetailPage'
import HeaderLayout from '../layout/HeaderLayout';
import FooterLayout from '../layout/FooterLayout';
const ServicesLayout = () => {	  	
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
		  var pageRef = useRef(ServicesPage1);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='Services' || loc==='Services1')?<ServicesPage1 />:(loc==='Services2')?<ServicesPage2 />:(loc==='Services-detail')?<ServicesDetailPage />:<ServicesPage1 />;					
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
export default ServicesLayout;