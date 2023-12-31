import React from 'react';
var video1 = require('../../../assets/media/images/video1.jpg');
var d1 = require('../../../assets/images/main-slider/slider2/d-1.png');
var video1mp4 = require('../../../assets/media/video/video1.mp4');


const Slider3 = () => {
    return(
	<>		 
        	{/* <!-- SLIDER START --> */} 
          
            <div className="slider-outer">
               
                <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{background:'#eeeeee', padding:'0px'}}>
                    <div id="webmax-two" className="rev_slider fullscreenbanner" style={{display:'none'}} data-version="5.4.3.1">
                        <ul>	
                        
                            {/* <!-- SLIDE 1 --> */}
                            <li data-index="rs-901" 
                            data-transition="fade" 
                            data-slotamount="default" 
                            data-hideafterloop="0" 
                            data-hideslideonmobile="off"  
                            data-easein="default" 
                            data-easeout="default" 
                            data-masterspeed="default"  
                            ddata-thumb={video1}
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
                                {/* <!-- MAIN IMAGE --> */}
                                
                                
                                {/* <!-- LAYER NR. 1 [ for overlay ] --> */}
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
                                
                                style={{zIndex:1, backgroundColor:'rgba(0, 0, 0, 0.7)', borderColor:'rgba(0, 0, 0, 0)', borderWidth:'0px'}}> 
                                </div>
                                

								{/* <!-- LAYER NR. 1 Drone Img --> */}
                                <div className="tp-caption   tp-resizeme " 
                                    id="slide-901-layer-1" 
                                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-5','-5','20','20']" 
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
                        
                                    style={{zIndex:13, borderWidth:'0px'}}>
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
                               
                                {/* <!-- LAYER NR. 2 [ for video ] --> */}
                                <div className="rs-background-video-layer" 
                                data-forcerewind="on" 
                                data-volume="mute" 
                                data-videowidth="100%" 
                                data-videoheight="100%" 
                                data-videomp4={video1mp4} 
                                data-videopreload="auto" 
                                data-videoloop="loop" 
                                data-aspectratio="16:9" 
                                data-autoplay="true" 
                                data-autoplayonlyfirsttime="false">
                                </div>                                 
                           
                               
                                {/* <!-- LAYER NR. 3 [ for title ] --> */}
                                <div className="tp-caption   tp-resizeme" 
                                id="slide-901-layer-2" 
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                data-y="['top','top','top','top']" data-voffset="['260','200','300','300']"  
                                data-fontsize="['72','52','42','38']"
                                data-lineheight="['72','52','42','38']"
                                data-width="['800','800','85%','90%']"
                                data-height="['none','none','none','none']"
                                data-whitespace="['normal','normal','normal','normal']"
                            
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames='[
                                {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                ]'
                                data-textalign="['center','center','center','center']"
                                data-paddingtop="[5,5,5,5]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                            
                                style={{zIndex:11, whiteSpace: 'normal', fontWeight:700, color:'#fff', borderWidth:'0px',  fontFamily:"'Rajdhani', 'sans-serif'"}}><div className="slider-block-video">Ultraportable Drone for the best Video</div></div>
                             
                            </li>
                            
                             
                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{visibility:'hidden!important'}}></div>	
                    </div>
                </div>
         
            </div>
            {/* <!-- SLIDER END --> */}		
	 </>
    )
}

export default Slider3;