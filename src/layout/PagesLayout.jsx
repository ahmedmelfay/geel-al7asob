import React,{useRef} from 'react'
import { useLocation } from 'react-router-dom'
import IconFontsPage from '../pages/pages/IconFontsPage';
import TeamPage from '../pages/pages/TeamPage';
import TeamSinglePage from '../pages/pages/TeamSinglePage';
import FaqPage from '../pages/pages/FaqPage';
import ContactUsPage from '../pages/pages/ContactUsPage';
import HeaderLayout from '../layout/HeaderLayout';
import FooterLayout from '../layout/FooterLayout';
const PagesLayout = () => {	  	
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
		  var pageRef = useRef(IconFontsPage);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='Icon-font')?<IconFontsPage />: (loc==='Team')?<TeamPage />:(loc==='Team-single')?<TeamSinglePage />:(loc==='Faq')?<FaqPage />:(loc==='Contactus')?<ContactUsPage />:<IconFontsPage />;					
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
export default PagesLayout;