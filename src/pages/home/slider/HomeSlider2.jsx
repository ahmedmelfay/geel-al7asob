import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var slide1 = require("../../../assets/images/main-slider/slider3/slide1.jpg");
var d1 = require("../../../assets/images/main-slider/slider3/d-1.png");
var slide2 = require("../../../assets/images/main-slider/slider3/slide2.jpg");
var d2 = require("../../../assets/images/main-slider/slider3/d-2.png");
var slide3 = require("../../../assets/images/main-slider/slider3/slide3.jpg");
var d3 = require("../../../assets/images/main-slider/slider3/d-3.png");
const Slider2 = () => {
  const { t } = useTranslation();

  return (
    <>
      {/*<!-- SLIDER START -->*/}
      <div className="slider-outer">
        <div
          id="welcome_wrapper"
          className="rev_slider_wrapper fullscreen-container"
          data-alias="goodnews-header"
          data-source="gallery"
          style={{ background: "#eeeeee", padding: "0px" }}
        >
          <div
            id="webmax-three"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
            data-version="5.4.3.1"
          >
            <ul>
              {/*<!-- SLIDE 1 -->*/}
              <li
                data-index="rs-901"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={slide1}
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
                data-description=""
              >
                {/*<!-- MAIN IMAGE -->*/}

                <img
                  src={slide1}
                  alt=""
                  data-lazyload={slide1}
                  data-bgposition="center center"
                  data-kenburns="on"
                  data-duration="10000"
                  data-ease="Power1.easeOut"
                  data-scalestart="110"
                  data-scaleend="100"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  className="rev-slidebg"
                  data-no-retina
                />

                {/*<!-- LAYER NR. 0 [ for overlay ] -->*/}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-901-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
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
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: "0px",
                  }}
                ></div>

                {/*<!-- LAYER NR. 1 Drone Img -->*/}
                <div
                  className="tp-caption   tp-resizeme change-img-slide1"
                  id="slide-901-layer-1"
                  data-x="['right','right','center','center']"
                  data-hoffset="['-254','-100','0','0']"
                  data-y="['middle','middle','bottom','bottom']"
                  data-voffset="['-5','-5','20','20']"
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
                  style={{ zIndex: 13, borderWidth: "0px" }}
                >
                  <div
                    className="rs-wave"
                    data-speed="10"
                    data-angle="0"
                    data-radius="50px"
                  >
                    <img
                      src={d1}
                      alt=""
                      data-ww="['886px','500px','350px','250px']"
                      data-hh="['464px','262px','183px','131px']"
                      width="886"
                      height="464"
                      data-no-retina
                      className="rs-wave"
                    />
                  </div>
                </div>

                {/*<!-- LAYER NR. 2 [ for title ] -->*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-901-layer-2"
                  data-x="['left','left','center','center']"
                  data-hoffset="[60','60','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['260','200','160','160']"
                  data-fontsize="['42','42','32','28']"
                  data-lineheight="['42','42','32','28']"
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
                  style={{
                    zIndex: 11,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#fff",
                    borderWidth: "0px",
                    fontFamily: "'Rajdhani','sans-serif'",
                  }}
                >
                  Capturing moments
                </div>

                {/*<!-- LAYER NR. 3 [ for title ] -->*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-901-layer-3"
                  data-x="['left','left','center','center']"
                  data-hoffset="[60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-60','-60','-100','-100']"
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
                  style={{
                    zIndex: 11,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#fff",
                    borderWidth: "0px",
                    fontFamily: "'Rajdhani','sans-serif'",
                    textTransform: "uppercase",
                  }}
                >
                  <div className="site-text-primary">
                    {t("home.slider.title")}
                  </div>
                </div>

                {/*<!-- LAYER NR. 4 [ for paragraph] -->*/}
                <div
                  className="tp-caption  tp-resizeme"
                  id="slide-901-layer-4"
                  data-x="['left','left','center','center']"
                  data-hoffset="['60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['40','40','0','0']"
                  data-fontsize="['20','20','18','16']"
                  data-lineheight="['30','30','28','22']"
                  data-width="['520','520','80%','90%']"
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
                  style={{
                    zIndex: 11,
                    fontWeight: 500,
                    color: "#d3d3d3",
                    borderWidth: "0px",
                    fontFamily: "'Muli','sans-serif'",
                  }}
                >
                  There are many variations of passages of lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </div>

                {/*<!-- LAYER NR. 5 [ for botton ] -->*/}
                <div
                  className="tp-caption tp-resizeme rev-btn"
                  id="slide-901-layer-5"
                  data-x="['left','left','center','center']"
                  data-hoffset="['60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['150','150','110','110']"
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
                  style={{ zIndex: 14, textTransform: "uppercase" }}
                >
                  <Link to="/contactus" className="site-button">
                    Ask for price
                  </Link>
                </div>

                <div
                  className="tp-caption rev-btn  tp-resizeme slider-block"
                  id="slide-901-layer-7"
                  data-x="['right','right','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                    {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['right','right','right','right']"
                  data-paddingtop="[200,200,200,200]"
                  data-paddingright="[180,180,180,180]"
                  data-paddingbottom="[200,200,200,200]"
                  data-paddingleft="[180,180,180,180]"
                  style={{ zIndex: 8 }}
                >
                  <div
                    className="rs-wave"
                    data-speed="3"
                    data-angle="0"
                    data-radius="10px"
                  ></div>
                </div>
              </li>

              {/*<!-- SLIDE 2 -->*/}
              <li
                data-index="rs-902"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb="./assets/images/main-slider/slider3/slide2.jpg"
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
                data-description=""
              >
                {/*<!-- MAIN IMAGE -->*/}

                <img
                  src={slide2}
                  alt=""
                  data-lazyload={slide2}
                  data-bgposition="center center"
                  data-kenburns="on"
                  data-duration="10000"
                  data-ease="Power1.easeOut"
                  data-scalestart="110"
                  data-scaleend="100"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  className="rev-slidebg"
                  data-no-retina
                />

                {/*<!-- LAYER NR. 0 [ for overlay ] -->*/}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-902-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
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
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: "0px",
                  }}
                ></div>

                {/*<!-- LAYER NR. 1 Drone Img -->*/}
                <div
                  className="tp-caption   tp-resizeme   change-img-slide2"
                  id="slide-902-layer-1"
                  data-x="['right','right','center','center']"
                  data-hoffset="['-254','-100','0','0']"
                  data-y="['middle','middle','bottom','bottom']"
                  data-voffset="['-5','-5','20','20']"
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
                  style={{ zIndex: 13, borderWidth: "0px" }}
                >
                  <div
                    className="rs-wave"
                    data-speed="10"
                    data-angle="0"
                    data-radius="50px"
                  >
                    <img
                      src={d2}
                      alt=""
                      data-ww="['800px','500px','350px','250px']"
                      data-hh="['447px','280px','196px','140px']"
                      width="946"
                      height="529"
                      data-no-retina
                      className="rs-wave"
                    />
                  </div>
                </div>

                {/*<!-- LAYER NR. 2 [ for title ] -->*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-902-layer-2"
                  data-x="['left','left','center','center']"
                  data-hoffset="[60','60','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['260','200','160','160']"
                  data-fontsize="['42','42','32','28']"
                  data-lineheight="['42','42','32','28']"
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
                  style={{
                    zIndex: 11,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#fff",
                    borderWidth: "0px",
                    fontFamily: "'Rajdhani','sans-serif'",
                  }}
                >
                  Gives You the
                </div>

                {/*<!-- LAYER NR. 3 [ for title ] -->*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-902-layer-3"
                  data-x="['left','left','center','center']"
                  data-hoffset="[60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-60','-60','-100','-100']"
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
                  style={{
                    zIndex: 11,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#fff",
                    borderWidth: "0px",
                    fontFamily: "'Rajdhani','sans-serif'",
                    textTransform: "uppercase",
                  }}
                >
                  <div className="site-text-primary">Visible Difference</div>
                </div>

                {/*<!-- LAYER NR. 4 [ for paragraph] -->*/}
                <div
                  className="tp-caption  tp-resizeme"
                  id="slide-902-layer-4"
                  data-x="['left','left','center','center']"
                  data-hoffset="['60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['40','40','0','0']"
                  data-fontsize="['20','20','18','16']"
                  data-lineheight="['30','30','28','22']"
                  data-width="['520','520','80%','90%']"
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
                  style={{
                    zIndex: 11,
                    fontWeight: 500,
                    color: "#d3d3d3",
                    borderWidth: "0px",
                    fontFamily: "'Muli', 'sans-serif'",
                  }}
                >
                  There are many variations of passages of lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </div>

                {/*<!-- LAYER NR. 5 [ for botton ] -->*/}
                <div
                  className="tp-caption tp-resizeme rev-btn"
                  id="slide-902-layer-5"
                  data-x="['left','left','center','center']"
                  data-hoffset="['60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['150','150','110','110']"
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
                  style={{ zIndex: 14, textTransform: "uppercase" }}
                >
                  <Link to="/contactus" className="site-button">
                    Ask for price
                  </Link>
                </div>

                <div
                  className="tp-caption rev-btn  tp-resizeme slider-block"
                  id="slide-902-layer-7"
                  data-x="['right','right','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                    {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['right','right','right','right']"
                  data-paddingtop="[200,200,200,200]"
                  data-paddingright="[180,180,180,180]"
                  data-paddingbottom="[200,200,200,200]"
                  data-paddingleft="[180,180,180,180]"
                  style={{ zIndex: 8 }}
                >
                  <div
                    className="rs-wave"
                    data-speed="3"
                    data-angle="0"
                    data-radius="10px"
                  ></div>
                </div>
              </li>

              {/*<!-- SLIDE 3 -->*/}
              <li
                data-index="rs-903"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={slide3}
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
                data-description=""
              >
                {/*<!-- MAIN IMAGE -->*/}

                <img
                  src={slide3}
                  alt=""
                  data-lazyload={slide3}
                  data-bgposition="center center"
                  data-kenburns="on"
                  data-duration="10000"
                  data-ease="Power1.easeOut"
                  data-scalestart="110"
                  data-scaleend="100"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  className="rev-slidebg"
                  data-no-retina
                />

                {/*<!-- LAYER NR. 0 [ for overlay ] -->*/}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-903-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
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
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: "0px",
                  }}
                ></div>

                {/*<!-- LAYER NR. 1 Drone Img -->*/}
                <div
                  className="tp-caption   tp-resizeme change-img-slide3"
                  id="slide-903-layer-1"
                  data-x="['right','right','center','center']"
                  data-hoffset="['-254','-100','0','0']"
                  data-y="['middle','middle','bottom','bottom']"
                  data-voffset="['-5','-5','20','20']"
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
                  style={{ zIndex: 13, borderWidth: "0px" }}
                >
                  <div
                    className="rs-wave"
                    data-speed="10"
                    data-angle="0"
                    data-radius="50px"
                  >
                    <img
                      src={d3}
                      alt=""
                      data-ww="['845px','500px','350px','250px']"
                      data-hh="['429px','254px','178px','127px']"
                      width="845"
                      height="429"
                      data-no-retina
                      className="rs-wave"
                    />
                  </div>
                </div>

                {/*<!-- LAYER NR. 2 [ for title ] -->*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-903-layer-2"
                  data-x="['left','left','center','center']"
                  data-hoffset="[60','60','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['260','200','160','160']"
                  data-fontsize="['42','42','32','28']"
                  data-lineheight="['42','42','32','28']"
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
                  style={{
                    zIndex: 11,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#fff",
                    borderWidth: "0px",
                    fontFamily: "'Rajdhani','sans-serif'",
                  }}
                >
                  We Capture the
                </div>

                {/*<!-- LAYER NR. 3 [ for title ] -->*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-904-layer-3"
                  data-x="['left','left','center','center']"
                  data-hoffset="[60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-60','-60','-100','-100']"
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
                  style={{
                    zIndex: 11,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#fff",
                    borderWidth: "0px",
                    fontFamily: "'Rajdhani','sans-serif'",
                    textTransform: "uppercase",
                  }}
                >
                  <div className="site-text-primary">Precious Moments </div>
                </div>

                {/*<!-- LAYER NR. 4 [ for paragraph] -->*/}
                <div
                  className="tp-caption  tp-resizeme"
                  id="slide-905-layer-4"
                  data-x="['left','left','center','center']"
                  data-hoffset="['60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['40','40','0','0']"
                  data-fontsize="['20','20','18','16']"
                  data-lineheight="['30','30','28','22']"
                  data-width="['520','520','80%','90%']"
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
                  style={{
                    zIndex: 11,
                    fontWeight: 500,
                    color: "#d3d3d3",
                    borderWidth: "0px",
                    fontFamily: "'Muli', 'sans-serif'",
                  }}
                >
                  There are many variations of passages of lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </div>

                {/*<!-- LAYER NR. 5 [ for botton ] -->*/}
                <div
                  className="tp-caption tp-resizeme rev-btn"
                  id="slide-906-layer-5"
                  data-x="['left','left','center','center']"
                  data-hoffset="['60','60','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['150','150','110','110']"
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
                  style={{ zIndex: 14, textTransform: "uppercase" }}
                >
                  <Link to="/contactus" className="site-button">
                    Ask for price
                  </Link>
                </div>

                <div
                  className="tp-caption rev-btn  tp-resizeme slider-block"
                  id="slide-907-layer-7"
                  data-x="['right','right','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                    {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['right','right','right','right']"
                  data-paddingtop="[200,200,200,200]"
                  data-paddingright="[180,180,180,180]"
                  data-paddingbottom="[200,200,200,200]"
                  data-paddingleft="[180,180,180,180]"
                  style={{ zIndex: 8 }}
                >
                  <div
                    className="rs-wave"
                    data-speed="3"
                    data-angle="0"
                    data-radius="10px"
                  ></div>
                </div>
              </li>
            </ul>
            <div
              className="tp-bannertimer tp-bottom"
              style={{ visibility: "hidden !important" }}
            ></div>
          </div>
        </div>
      </div>
      {/*<!-- SLIDER END -->*/}
    </>
  );
};

export default Slider2;
