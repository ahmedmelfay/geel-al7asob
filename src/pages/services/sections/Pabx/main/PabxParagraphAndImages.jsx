import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Pabx/paragraph-section/1.jpg");
var pic2 = require("../../../../../assets/images/Pabx/paragraph-section/2.jpg");

const PabxParagraphAndImages = (props) => {
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
                    <div>{t("pabx.ourVision.title")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("pabx.ourVision.description")}</h2>
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
                      We at Computer Generation are committed to providing
                      comprehensive and reliable PABX solutions. Whether you are
                      looking to install a new central or maintain an existing
                      central, we offer the expertise and skills to fully meet
                      your needs. You will benefit from our dedicated team with
                      deep knowledge in the field of exchanges and modern
                      technology.
                    </p>
                    <p>
                      Contact us today to discuss your requirements and improve
                      the communication system in your business. We will work
                      with you to provide the right solutions and implement them
                      with high efficiency. You will receive excellent customer
                      service and ongoing technical support to ensure your
                      complete satisfaction.
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
                      Let Jill Computer be your partner in the supply,
                      installation and maintenance of PABXs, and benefit from
                      reliable and efficient communications in your business.
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
export default PabxParagraphAndImages;
