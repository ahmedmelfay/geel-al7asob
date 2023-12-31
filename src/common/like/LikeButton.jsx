import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LikeButton = (props) =>{

	const [state, setState] = useState({liked: false});

	const toggle = () => {
		let localLiked = state.liked;
	
		// Toggle the state variable liked
		localLiked = !localLiked;
		setState({ liked: localLiked });
	};

	return (
	
		<span			
			style={{ top:'0px' }}
			onClick={() => toggle()}
		>
			{state.liked === false ? (
			<FontAwesomeIcon icon={faHeart} />
			) : (
			<FontAwesomeIcon icon={faHeartBroken} style={{ color:'#009000'}} />
			)}
		</span>
	
	);
}
export default LikeButton;
