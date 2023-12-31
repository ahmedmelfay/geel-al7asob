import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';
const MyReactModal2 = (props) => 
{       
	const [isOpen, setOpen] = useState(false)
	return(  
		<>			
			<ModalVideo channel={props.channel} autoplay isOpen={isOpen} videoId={props.videoId} onClose={() => setOpen(false)} />     
			<Link onClick={()=> setOpen(true)}   className="mfp-video site-bg-primary">
				<i className="fa fa-play"></i>				
			</Link>    	  				
	   </>  
	)           
}  
MyReactModal2.defaultProps = {
  channel: "youtube",
  videoId: "c1XNqw2gSbU",
}
export default MyReactModal2;