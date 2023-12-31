import React,{useRef} from 'react'
import { useLocation } from 'react-router-dom'
import BlogBlogGrid from '../pages/blog/BlogBlogGrid'
import BlogBlogListSidebar from '../pages/blog/BlogBlogListSidebar'
import BlogBlogPostRightSidebar from '../pages/blog/BlogBlogPostRightSidebar'
import HeaderLayout from '../layout/HeaderLayout';
import FooterLayout from '../layout/FooterLayout';
const BlogLayout = () => {	  	
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
		  var pageRef = useRef(BlogBlogGrid);
		  var location = useLocation();  
		  var loc= titleCase(location.pathname.replace( "/",'')).trim();	
		  pageRef.displayPage = (loc==='Blog-grid')?<BlogBlogGrid />:(loc==='Blog-list-sidebar')?<BlogBlogListSidebar />:(loc==='Blog-post-right-sidebar')?<BlogBlogPostRightSidebar />:<BlogBlogGrid />;					
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
export default BlogLayout;