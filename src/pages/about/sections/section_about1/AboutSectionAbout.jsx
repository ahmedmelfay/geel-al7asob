import React from "react";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var untitled1 = require("../../../../assets/images/about-drone/7asob.jpeg");

const AboutSectionAbout = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="about-section-one">
          <div className="container">
            <div className="section-content">
              <div className="row justify-content-center d-flex">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div>
                    <div>
                      <img src={untitled1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    <div className="left wt-small-separator-outer">
                      <h2>{t("home.quality.description")}</h2>
                      <p>{t("home.slider.description")}</p>
                    </div>

                    <ul className="site-list-style-one icon-style">
                      <li>
                        <i className="flaticon-drone-7"></i>
                        {t("home.quality.maintenance")}
                      </li>
                      <li>
                        <i className="flaticon-remote-control-1"></i>
                        {t("home.quality.installation")}
                      </li>
                      <li>
                        <i className="flaticon-control"></i>
                        {t("home.quality.deliveries")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center d-flex">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    <div className="left wt-small-separator-outer">
                      <h2>
                        {i18n.language === "ar"
                          ? "نتطلع أن نكون الأفضل في المجال بالسوق المحلي و العالمي"
                          : "We aspire to be the best in the field in the local and global market"}
                      </h2>
                      <p>{t("home.message.description")}</p>
                    </div>
                    <ul className="site-list-style-one icon-style">
                      <li>
                        <i className="flaticon-drone-7"></i>
                        {t("home.quality.planning")}
                      </li>
                      <li>
                        <i className="flaticon-remote-control-1"></i>
                        {t("home.quality.performance")}
                      </li>
                      <li>
                        <i className="flaticon-control"></i>
                        {t("home.quality.customerSatisfaction")}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-drone-one">
                    <div className="about-drone-one-media">
                      <img src={untitled1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutSectionAbout;
