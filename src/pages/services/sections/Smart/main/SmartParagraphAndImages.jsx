import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Smart/paragraph-section/1.jpg");
var pic2 = require("../../../../../assets/images/Smart/paragraph-section/2.jpg");

const SmartParagraphAndImages = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/*<!-- ALL SERVICES START --> */}
      <div className="section-full p-t80 p-b80 bg-white">
        <div className="container">
          {/*<!-- TITLE START--> */}

          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-lg-12 col-md-12 wt-separator-two-part-left">
                {/*<!-- TITLE START--> */}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div className="sep-leaf-left"></div>
                    <div>{t("smart.ourVision.title")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("smart.ourVision.description")}</h2>
                </div>
                {/*<!-- TITLE END--> */}
              </div>

              {/* <div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
                <p>
                  We provide expert inspection services for your organization's
                  mission critical assets using drone technology.
                </p>
              </div> */}
            </div>
          </div>

          {/*<!-- TITLE END--> */}

          <div className="section-content">
            <div className="services-style-two">
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <p>
                      We at Computer Generation consider the smart home an
                      innovative and sustainable solution for a better life. We
                      provide you with modern technology and experience in
                      implementing a smart home in the best possible way.
                    </p>
                    <p>
                      Contact us today to discuss your requirements and achieve
                      your vision of a smart home. We will work with you step by
                      step to develop customized solutions that suit your needs
                      and budget. Our dedicated team will work on installing and
                      programming the devices and ensuring their integration and
                      ease of use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <p>
                      Let us make your home work for you, where you will enjoy
                      comfort, safety and full control of your home with
                      advanced smart home systems. Contact us today and get
                      ready to transform your home into a smart home that meets
                      your needs and elevates your daily life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ALL SERVICES SECTION END --> */}
    </>
  );
};
export default SmartParagraphAndImages;
