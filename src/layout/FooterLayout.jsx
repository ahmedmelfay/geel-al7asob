import React from 'react'
import ScrollToTop from '../common/scroll/ScrollToTop';
import FooterPage from '../pages/footer/FooterPage';

import { Helmet, HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const FooterLayout = () => {
    return(	 	  	
		<>		
		{/*<!-- FOOTER CONTENT -->*/}	
		<FooterPage />		 
		{/*<!-- BUTTON TOP -->*/}		
		<ScrollToTop />
		
		<HelmetProvider context={helmetContext}>
			<Helmet>
					{`
					<script  src="./assets/js/jquery-2.2.0.min.js"></script>
					<script  src="./assets/plugins/revolution/revolution/js/jquery.themepunch.tools.min.js"></script>
					<script  src="./assets/plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js"></script>				
					<script  src="./assets/plugins/revolution/revolution/js/extensions/revolution-plugin.js"></script>
					`}
			</Helmet>
		</HelmetProvider>	
		
		</>	
    )
}
export default FooterLayout;