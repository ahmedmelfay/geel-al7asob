import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import FadeIn from 'react-fade-in';

//import $ from 'jquery';

const GalleryTabMasonry = (props) => {
	const [items, setItems] = useState(props.demoData);
	const [active, setActive] = useState(null);	
	var[slides]=useState(items); 	
	const [imageUrl] = useState([]);
    const [productIndex, setProductIndex] = useState(0);
	
	useEffect(() => {		
			   
			   
			   
    const fetchData = async () => {  		
        slides.forEach(item => {
            imageUrl.push(item.src)		
        })
      }
      fetchData();	
	  
    }, [slides, imageUrl])
	
	
	const navigate = (id, categItem) => {		
		const updateItems = props.demoData.filter((curElem) => 
		{
			  return curElem.category === categItem;
		});	
		if(categItem==='All')
			setItems(props.demoData);
		else
			setItems(updateItems);			
		   // setSlides(items);
		setActive(id);
	};
	
	
	function getUnique(array, key) {
		if (typeof key !== 'function') {
			const property = key;
			key = function(item) { return item[property]; };
		}
		return Array.from(array.reduce(function(map, item) {
			const k = key(item);
			if (!map.has(k)) map.set(k, item);
				return map;
			}, new Map()).values());
	}	
	const NavList = ({ id, category, dataFilter, isActive='false', onClick }) => {	  
		return (
		<li key={id} className={isActive ? "active" : ""}>		
			 <Link
				to="#"
				data-filter={dataFilter}
				onClick={() => navigate(id, category)}        
				//className={isActive ? "nav-link active" : "nav-link"}
			  >
			  {category ? category : "All"}
			  </Link>
		  </li>
		);
	};	
	
	
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	 });

	 function openLightboxOnSlide(number) {
		
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	 }

  return (
    <>
	
	{/*<!-- GALLERY SECTION START --> */}
	<div className="section-full p-t80 p-b50 bg-white">
		<div className="container-fluid">
			 	{/*<!-- PAGINATION START --> */}
				<div className="filter-wrap work-grid p-b30 text-center">
					<ul className="masonry-filter">																			
					  <NavList id={0} category={'All'}  isActive={active === 0} data-filter={'All'} onClick={navigate} key={'All'} />
					  {getUnique(props.demoData, 'category').map((item, index) => (		
							  																				   
							  <NavList {...item} isActive={active === item.id} data-filter={item.category} onClick={navigate} key={item.category} />										
				   	   ))}		 
					</ul>
				</div>
				{/*<!-- PAGINATION END --> */}    				
				{/*<!-- GALLERY CONTENT START --> */}					
				 <ResponsiveMasonry
					columnsCountBreakPoints={{ 300: 1, 700: 2, 900: 3 }}
				  >
				  <FadeIn delay={800} transitionDuration={1200} childClassName={"masonry-wrap"} visible={true}>
				 <Masonry columnsCount={3} gutter="0px" className="masonry-wrap mfp-gallery  row clearfix d-flex justify-content-center flex-wrap">
				 
					{/*<!-- COLUMNS - START --> */}	
					{items.map((elem, index) => {
						const { id, name, src, description, alt } = elem;
						
						return (		
						 <FadeIn delay={100} transitionDuration={1200} childClassName={"masonry-item"} visible={true} key={id}> 		
						  <div className="masonry-item" style={{margin:'4%'}} >
							<div className="galleryhvr-zoom-out-down">								
									<img src={src} alt={alt} onClick={() => setProductIndex(id)} />
								
								<div className="galleryhvr-content">
									<div className="galleryhvr-mid">
										<h3 className="wt-title">{name}</h3>
										<p>{description}</p>
										<Link to="/services-detail"><i className="flaticon-chain-links"></i></Link>
										<Link className="mfp-link1" onClick={() => openLightboxOnSlide(id)} ><i className="fa fa-search-plus"></i></Link>

									</div>
								</div>
								
							</div>     
						</div>
						 </FadeIn>
						);
					  })}	
					   <FsLightbox toggler={lightboxController.toggler} sources={imageUrl} slide={lightboxController.slide} key={productIndex} />		
					  </Masonry>	
					  </FadeIn>
					   </ResponsiveMasonry>			
					{/*<!-- COLUMNS - END --> */}	
								
				{/*<!-- GALLERY CONTENT END --> */} 

		</div>
	</div>   
	{/*<!-- GALLERY SECTION END --> */}   
    </>
  );
};
export default GalleryTabMasonry;