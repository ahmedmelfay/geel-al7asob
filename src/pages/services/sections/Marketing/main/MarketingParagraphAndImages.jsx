import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Marketing/paragraph-section/1.jpg");
var pic2 = require("../../../../../assets/images/Marketing/paragraph-section/2.jpg");

const MarketingParagraphAndImages = (props) => {
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
                    <div>{t("marketing.ourVision.title")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("marketing.ourVision.description")}</h2>
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
                      We at Computer Generation consider e-marketing on social
                      media platforms and global search engines to be crucial to
                      the success of companies in the current digital age. We
                      understand the importance of a strong and effective
                      presence across these channels, so we provide our services
                      in an integrated and customized manner to meet your
                      business needs.
                    </p>
                    <p>
                      Feel free to reach out to us to discuss your marketing
                      needs and goals. We will develop a strategy that is
                      appropriate for your company, and implement it
                      professionally and perfectly.
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
                      We are committed to achieving positive results and raising
                      capital for our clients through their e-marketing.
                    </p>
                    <p>
                      Take advantage of our experience and specialization in the
                      field of e-marketing, and leave us the task of building
                      and strengthening your digital presence on social media
                      platforms and global search engines.
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
export default MarketingParagraphAndImages;
