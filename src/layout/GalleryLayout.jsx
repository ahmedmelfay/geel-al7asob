import React,{useRef} from 'react'
import { useLocation } from 'react-router-dom'
import GalleryGridPage from '../pages/gallery/GalleryGridPage'
import GalleryMasonryPage from '../pages/gallery/GalleryMasonryPage'
import GalleryCarouselPage from '../pages/gallery/GalleryCarouselPage'
import GalleryDetailPage from '../pages/gallery/GalleryDetailPage'
import HeaderLayout from '../layout/HeaderLayout';
import FooterLayout from '../layout/FooterLayout';

const GalleryLayout = () => {	  	
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
		  var pageRef = useRef(GalleryCarouselPage);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='Gallery-grid')?<GalleryGridPage />:(loc==='Gallery-masonry')?<GalleryMasonryPage />:(loc==='Gallery-carousel')?<GalleryCarouselPage />:(loc==='Gallery-detail')?<GalleryDetailPage />:<GalleryCarouselPage />;					
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
export default GalleryLayout;