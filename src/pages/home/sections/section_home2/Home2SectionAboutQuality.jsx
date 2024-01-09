import React from "react";
import { useTranslation } from "react-i18next";

var video2 = require("../../../../assets/images/video-3.jpg");

const Home2SectionAboutQuality = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/*<!-- ViDEO SECTION START -->*/}
      <div
        className="section-full p-t80 p-b50"
        style={{ backgroundColor: "#faa61a" }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row justify-content-center align-items-center video-style2-outer">
              <div className="col-lg-6 col-md-12  m-b30">
                <div className="video-style2-left">
                  <div className="video-style2-circle-outer">
                    <div className="video-style2-ring-outer  rotate-center">
                      <div className="dot-circle one"></div>
                      <div className="dot-circle two"></div>
                      <div className="dot-circle three"></div>
                    </div>
                    <div className="video-style2-media">
                      <img src={video2} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 ">
                <div className="video-style2-right">
                  {/*<!-- TITLE START-->*/}
                  <div className="left wt-small-separator-outer text-white">
                    <div className="wt-small-separator text-white">
                      <div className="sep-leaf-left"></div>
                      <div>{t("home.vision.mini")}</div>
                      <div className="sep-leaf-right"></div>
                    </div>
                    <h2>{t("home.vision.title")}</h2>
                    <p>{t("home.vision.description")}</p>
                  </div>
                  {/*<!-- TITLE END-->*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- VIDEO SECTION SECTION END -->*/}
    </>
  );
};
export default Home2SectionAboutQuality;
