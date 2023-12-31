import React,{useRef} from 'react'
import {useLocation} from 'react-router-dom'
import HomePage1 from '../pages/home/HomePage1'
import HomePage2 from '../pages/home/HomePage2'
import HomePage3 from '../pages/home/HomePage3'
import HomePage4 from '../pages/home/HomePage4'
import HeaderLayout from '../layout/HeaderLayout';


import FooterLayout from '../layout/FooterLayout';
const HomeLayout = () => {
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
		  var pageRef = useRef(HomePage1);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='')?<HomePage1 />:(loc==='Home2')?<HomePage2 />:(loc==='Home3')?<HomePage3 />:<HomePage4 />;					
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
export default HomeLayout;