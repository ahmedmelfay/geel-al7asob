import React,{useRef} from 'react'
import { useLocation } from 'react-router-dom'
import AboutPage1 from '../pages/about/AboutPage1'
import AboutPage2 from '../pages/about/AboutPage2'
import HeaderLayout from '../layout/HeaderLayout';
import FooterLayout from '../layout/FooterLayout';
const AboutPage = () => {	  	
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
		  var pageRef = useRef(AboutPage1);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='About')?<AboutPage1 />:(loc==='About2')?<AboutPage2 />:<AboutPage1 />;					
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
export default AboutPage;