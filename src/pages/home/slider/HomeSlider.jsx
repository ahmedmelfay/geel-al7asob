import React from 'react';
import { Link } from 'react-router-dom';
//import { Helmet, HelmetProvider } from 'react-helmet-async';
var slide1 = require('../../../assets/images/main-slider/slider1/slide1.jpg');
var d1 = require('../../../assets/images/main-slider/slider1/drone/d-1.png');
var slide2 = require('../../../assets/images/main-slider/slider1/slide2.jpg');
var d2 = require('../../../assets/images/main-slider/slider1/drone/d-2.png');

const Slider = () => {	    
        return (
           <>
			 {/*<!-- SLIDER START --> */}
            <div className="slider-outer">
				<div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{background:'#eeeeee', padding:'0px'}}>
                    <div id="webmax-one" className="rev_slider fullscreenbanner" style={{display:'none'}} data-version="5.4.3.1">
					
						<ul>
							{/* <!-- SLIDE 1 -->*/}
                            <li id="bg-slide-pic-change" data-index="rs-901" 
                            data-transition="fade" 
                            data-slotamount="default" 
                            data-hideafterloop="0" 
                            data-hideslideonmobile="off"  
                            data-easein="default" 
                            data-easeout="default" 
                            data-masterspeed="default"  
                            data-thumb= {slide1}   
                            data-rotate="0"  
                            data-fstransition="fade" 
                            data-fsmasterspeed="300" 
                            data-fsslotamount="7" 
                            data-saveperformance="off"  
                            data-title="Slide Title" 
                            data-param1="Additional Text" 
                            data-param2="" 
                            data-param3="" 
                            data-param4="" 
                            data-param5="" 
                            data-param6="" 
                            data-param7="" 
                            data-param8="" 
                            data-param9="" 
                            data-param10="" 
                            data-description="">
							{/*   <!-- MAIN IMAGE -->*/}
								<img src={slide1}  alt=""  data-lazyload={slide1} data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Power1.easeOut" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg xyz" data-no-retina />
								
								{/*<!-- LAYER NR. 1 [ for overlay ] -->*/}
                                <div className="tp-caption tp-shape tp-shapewrapper " 
                                id="slide-901-layer-0" 
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                data-width="full"
                                data-height="full"
                                data-whitespace="nowrap"
                                data-type="shape" 
                                data-basealign="slide" 
                                data-responsive_offset="off" 
                                data-responsive="off"
                                data-frames='[
                                {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                ]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                

								style={{zIndex:'1', backgroundColor:'rgba(0, 0, 0, 0)', borderColor:'rgba(0, 0, 0, 0)', borderWidth:'0px' }}
								> 
                                </div>
								
								
								{/*<!-- LAYER NR. 1 Drone Img -->*/}
                                <div className="tp-caption   tp-resizeme home-1-change-img-slide1 " 

                                    id="slide-901-layer-1" 
                                    data-x="['right','right','center','center']" data-hoffset="['-254','-100','0','0']" 
                                    data-y="['middle','middle','bottom','bottom']" data-voffset="['-5','-5','20','20']" 
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                         
                                    data-type="image" 
                                    data-responsive_offset="on" 
                        
                                    data-frames='[{"from":"x:right;","speed":1500,"to":"o:1;","delay":2500,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                    data-textalign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                        
									style={{zIndex:'13', borderWidth:'0px'}}
									>
											<div className="rs-wave"  data-speed="10" data-angle="0" data-radius="50px">
											  <img 
												  src={d1}
												  alt="" 
												  data-ww="['738px','500px','350px','250px']" 
												  data-hh="['339px','230px','161px','115px']" 
												  width="738" height="339" 
												  data-no-retina 
												  className="rs-wave" />
											 </div>
                               		</div>	
									
									
									{/* <!-- LAYER NR. 3 [ for title ] -->*/}
									<div className="tp-caption   tp-resizeme" 
									id="slide-901-layer-2" 
									data-x="['left','left','center','center']" data-hoffset="[105','145','0','0']" 
									data-y="['top','top','top','top']" data-voffset="['260','200','170','170']"  
									data-fontsize="['72','52','42','38']"
									data-lineheight="['72','52','42','38']"
									data-width="['600','500','85%','96%']"
									data-height="['none','none','none','none']"
									data-whitespace="['normal','normal','normal','normal']"
								
									data-type="text" 
									data-responsive_offset="on" 
									data-frames='[
									{"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
									{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
									]'
									data-textalign="['left','left','center','center']"
									data-paddingtop="[5,5,5,5]"
									data-paddingright="[0,0,0,0]"
									data-paddingbottom="[0,0,0,0]"
									data-paddingleft="[0,0,0,0]"
								
									style={{zIndex:'11', whiteSpace:'normal', fontWeight:'700', color:'#fff', borderWidth:'0px', fontFamily:"'Rajdhani', sans-serif" }}
									>
										<div className="slider-block-black">Ultraportable Drone for the best Video</div>
									</div>
									
									 {/*<!-- LAYER NR. 4 [ for paragraph] -->*/}
									<div className="tp-caption  tp-resizeme" 
									id="slide-901-layer-3" 
									data-x="['left','left','center','center']" data-hoffset="['65','100','0','0']" 
									data-y="['middle','middle','middle','middle']" data-voffset="['120','80','-20','-40']"  
									data-fontsize="['20','20','18','16']"
									data-lineheight="['30','30','28','22']"
									data-width="['620','600','90%','90%']"
									data-height="['none','none','none','none']"
									data-whitespace="['normal','normal','normal','normal']"
								
									data-type="text" 
									data-responsive_offset="on"
									data-frames='[
									{"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
									{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
									]'
									data-textalign="['left','left','center','center']"
									data-paddingtop="[0,0,0,0]"
									data-paddingright="[0,0,0,0]"
									data-paddingbottom="[0,0,0,0]"
									data-paddingleft="[0,0,0,0]"
								
									style={{zIndex:'11', fontWeight:'500', color:'#fff', borderWidth:'0px', fontFamily:"'Muli', sans-serif" }}
									>
									  There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
									</div>
									
									{/* <!-- LAYER NR. 5 [ for botton ] --> */}
									<div className="tp-caption tp-resizeme rev-btn white" 	
									id="slide-901-layer-4"						
									data-x="['left','left','center','center']" data-hoffset="['65','100','0','0']" 
									data-y="['middle','middle','middle','middle']" data-voffset="['240','200','100','100']"  
									data-lineheight="['none','none','none','none']"
									data-width="['300','300','300','300']"
									data-height="['none','none','none','none']"
									data-whitespace="['normal','normal','normal','normal']"
									
									data-type="text" 
									data-responsive_offset="on"
									data-frames='[ 
									{"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
									{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
									]'
									data-textalign="['left','left','center','center']"
									data-paddingtop="[0,0,0,0]"
									data-paddingright="[0,0,0,0]"
									data-paddingbottom="[0,0,0,0]"
									data-paddingleft="[0,0,0,0]"
									
									style={{zIndex:14, textTransform:'uppercase'}}>
									<Link to="/contactus" className="site-button">Ask for price</Link>
									</div>
									
									{/* <!-- LAYER NR. 6 [ Circle ] -->*/}
									<div className="tp-caption" 	
									id="slide-901-layer-5"						
									data-x="['right','right','center','center']" data-hoffset="['0','50','0','0']" 
									data-y="['middle','middle','bottom','bottom']" data-voffset="['0','0','0','0']"  
									data-lineheight="['0','0','0','0']"
									data-width="['100','100','100','100']"
									data-height="['none','none','none','none']"
									data-whitespace="['normal','normal','normal','normal']"
									
									data-type="text" 
									data-responsive_offset="on"
									data-frames='[ 
									{"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
									{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
									]'
									data-textalign="['right','right','right','right']"
									data-paddingtop="[0,0,0,0]"
									data-paddingright="[0,0,0,0]"
									data-paddingbottom="[0,0,0,0]"
									data-paddingleft="[0,0,0,0]"
									
									style={{zIndex:9}}
									>
										 <div className="mfp-video rev-slider-play">
											<span className="ripple-cirlcle"></span>
										</div>   
									</div> 
								
							</li>
														
							{/*<!-- SLIDE 2 -->*/}
                            
							<li data-index="rs-902" 
                            data-transition="fade" 
                            data-slotamount="default" 
                            data-hideafterloop="0" 
                            data-hideslideonmobile="off"  
                            data-easein="default" 
                            data-easeout="default" 
                            data-masterspeed="default"  
                            data-thumb={slide2}  
                            data-rotate="0"  
                            data-fstransition="fade" 
                            data-fsmasterspeed="300" 
                            data-fsslotamount="7" 
                            data-saveperformance="off"  
                            data-title="Slide Title" 
                            data-param1="Additional Text" 
                            data-param2="" 
                            data-param3="" 
                            data-param4="" 
                            data-param5="" 
                            data-param6="" 
                            data-param7="" 
                            data-param8="" 
                            data-param9="" 
                            data-param10="" 
                            data-description="">
                               {/* <!-- MAIN IMAGE -->*/}
                                
								<img src={slide2}  alt=""  data-lazyload={slide2} data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Power1.easeOut" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />
	                                
                                
                               {/* <!-- LAYER NR. 1 [ for overlay ] -->*/}
                                <div className="tp-caption tp-shape tp-shapewrapper " 
                                id="slide-902-layer-0" 
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                data-width="full"
                                data-height="full"
                                data-whitespace="nowrap"
                                data-type="shape" 
                                data-basealign="slide" 
                                data-responsive_offset="off" 
                                data-responsive="off"
                                data-frames='[
                                {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                ]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                
								style={{zIndex:1, backgroundColor:'rgba(0, 0, 0, 0)', borderColor:'rgba(0, 0, 0, 0)', borderWidth:'0px' }}
								> 
                                </div>
                                

								{/*<!-- LAYER NR. 1 Drone Img -->*/}
                                <div className="tp-caption   tp-resizeme " 
                                    id="slide-902-layer-1" 
                                    data-x="['right','right','center','center']" data-hoffset="['-254','-100','0','0']" 
                                    data-y="['middle','middle','bottom','bottom']" data-voffset="['-5','-5','20','20']" 
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                         
                                    data-type="image" 
                                    data-responsive_offset="on" 
                        
                                    data-frames='[{"from":"x:right;","speed":1500,"to":"o:1;","delay":2500,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                    data-textalign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                        
									style={{zIndex:13, borderWidth:'0px'}}
									>
                                    <div className="rs-wave"  data-speed="10" data-angle="0" data-radius="50px">
                                      <img 
                                      	  src={d2}
                                          alt="" 
                                          data-ww="['637px','400px','350px','250px']" 
                                          data-hh="['428px','269px','235px','168px']" 
                                          width="738" height="339" 
                                          data-no-retina 
                                          className="rs-wave" />
                                     </div>
                               </div>
                           
                               
                               {/* <!-- LAYER NR. 3 [ for title ] -->*/}
                                <div className="tp-caption   tp-resizeme" 
                                id="slide-902-layer-2" 
                                data-x="['left','left','center','center']" data-hoffset="[105','145','0','0']" 
                                data-y="['top','top','top','top']" data-voffset="['260','200','170','170']"  
                                data-fontsize="['72','52','42','38']"
                                data-lineheight="['72','52','42','38']"
                                data-width="['600','500','85%','96%']"
                                data-height="['none','none','none','none']"
                                data-whitespace="['normal','normal','normal','normal']"
                            
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames='[
                                {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                ]'
                                data-textalign="['left','left','center','center']"
                                data-paddingtop="[5,5,5,5]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            
								style={{zIndex:11, whiteSpace:'normal', fontWeight:700, color:'#fff', borderWidth:'0px', fontFamily:"'Rajdhani', sans-serif"}}
								><div className="slider-block-red">Gives you the Visible Difference</div></div>
                            
                               {/* <!-- LAYER NR. 4 [ for paragraph] -->*/}
                                <div className="tp-caption  tp-resizeme" 
                                id="slide-902-layer-3" 
                                data-x="['left','left','center','center']" data-hoffset="['65','100','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['120','80','-20','-40']"  
                                data-fontsize="['20','20','18','16']"
                                data-lineheight="['30','30','28','22']"
                                data-width="['620','600','90%','90%']"
                                data-height="['none','none','none','none']"
                                data-whitespace="['normal','normal','normal','normal']"
                            
                                data-type="text" 
                                data-responsive_offset="on"
                                data-frames='[
                                {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                ]'
                                data-textalign="['left','left','center','center']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                          	
								style={{zIndex:11, fontWeight:500, color:'#fff', borderWidth:'0px', fontFamily:"'Muli', sans-serif"}}
								>
                                  There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                                </div>
                            
                               {/* <!-- LAYER NR. 5 [ for botton ] -->*/}
                                <div className="tp-caption tp-resizeme rev-btn white" 	
                                id="slide-902-layer-4"						
                                data-x="['left','left','center','center']" data-hoffset="['65','100','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['240','200','100','100']"  
                                data-lineheight="['none','none','none','none']"
                                data-width="['300','300','300','300']"
                                data-height="['none','none','none','none']"
                                data-whitespace="['normal','normal','normal','normal']"
                                
                                data-type="text" 
                                data-responsive_offset="on"
                                data-frames='[ 
                                {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                ]'
                                data-textalign="['left','left','center','center']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                
								style={{zIndex:14, textTransform:'uppercase'}}
								>
                                <Link to="/contactus" className="site-button">Ask for price</Link>
                                </div>
                                
                                {/*<!-- LAYER NR. 6 [ Circle ] -->*/}
                                <div className="tp-caption" 	
                                id="slide-902-layer-5"						
                                data-x="['right','right','center','center']" data-hoffset="['0','50','0','0']" 
                                data-y="['middle','middle','bottom','bottom']" data-voffset="['0','0','0','0']"  
                                data-lineheight="['0','0','0','0']"
                                data-width="['100','100','100','100']"
                                data-height="['none','none','none','none']"
                                data-whitespace="['normal','normal','normal','normal']"
                                
                                data-type="text" 
                                data-responsive_offset="on"
                                data-frames='[ 
                                {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                ]'
                                data-textalign="['right','right','right','right']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                
								style={{zIndex:9}}
								>
                                     <div className="mfp-video rev-slider-play">
                                        <span className="ripple-cirlcle"></span>
                                    </div>   
                                </div> 
                                

                            </li> 
							
							
							
							  
						</ul>
						 <div className="tp-bannertimer tp-bottom" style={{visibility:'hidden !important'}}></div>	
					</div>  
				</div>  		
			
			</div>         
            {/*<!-- SLIDER END -->*/}
			
           </>
        );
    }

export default Slider;