import React from 'react';
import Accordion from "../../../common/accordian/Accordion";
import AccordionData from '../../../data/AccordionData';

const PagesSectionFaq = (props) => {	  	
    return(
	<>
	
	{/*<!-- FAQ SECTION START --> */}
		<div className="section-full p-t80 p-b50 bg-white">
			<div className="container">
			
				<div className="section-content">
					<ul className="wt-accordion acc-bdr faq-accorfion" id="accordion5">
					  {AccordionData.map(({ heading, content }) => (
						<Accordion heading={heading} content={content} key={content} />
					  ))}
					</ul>
		
			
				</div>
			</div>
		</div>   
		{/*<!-- FAQ SECTION END --> */} 

    </>
    )
}
export default PagesSectionFaq;