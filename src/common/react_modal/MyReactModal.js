import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';
const MyReactModal = (props) => 
{       
	const [isOpen, setOpen] = useState(false)
	return(  
		<>			
			<ModalVideo channel={props.channel} autoplay isOpen={isOpen} videoId={props.videoId} onClose={() => setOpen(false)} />     
			<Link onClick={()=> setOpen(true)}  className="mfp-video play-now">
				<i className="icon fa fa-play"></i>
				<span className="ripple"></span>
			</Link>    	  				
	   </>  
	)           
}  
MyReactModal.defaultProps = {
  channel: "youtube",
  videoId: "c1XNqw2gSbU",
}
export default MyReactModal;