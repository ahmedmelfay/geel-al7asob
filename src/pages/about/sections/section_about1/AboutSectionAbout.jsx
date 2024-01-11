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
              <div
                className="row justify-content-center d-flex"
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <div className="col-lg-6 col-md-12 m-b30">
                  <div>
                    <div>
                      <img src={untitled1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    <div
                      className="left wt-small-separator-outer"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <h2>{t("home.quality.description")}</h2>
                      <p>{t("home.slider.description")}</p>
                    </div>

                    <ul
                      className="site-list-style-one icon-style"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <li
                        style={{
                          paddingInlineStart: 0,
                        }}
                      >
                        <i
                          className="flaticon-worker"
                          style={{ left: "unset" }}
                        ></i>
                        <p style={{ marginInlineStart: "50px" }}>
                          {t("home.quality.maintenance")}
                        </p>
                      </li>
                      <li
                        style={{
                          paddingInlineStart: 0,
                        }}
                      >
                        <i
                          className="flaticon-remote-control-1"
                          style={{ left: "unset" }}
                        ></i>
                        <p style={{ marginInlineStart: "50px" }}>
                          {t("home.quality.installation")}
                        </p>
                      </li>
                      <li
                        style={{
                          paddingInlineStart: 0,
                        }}
                      >
                        <i
                          className="flaticon-power-supply"
                          style={{ left: "unset" }}
                        ></i>
                        <p style={{ marginInlineStart: "50px" }}>
                          {t("home.quality.deliveries")}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="row justify-content-center d-flex"
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    <div
                      className="left wt-small-separator-outer"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <h2>
                        {i18n.language === "ar"
                          ? "نتطلع أن نكون الأفضل في المجال بالسوق المحلي و العالمي"
                          : "We aspire to be the best in the field in the local and global market"}
                      </h2>
                      <p>{t("home.message.description")}</p>
                    </div>
                    <ul
                      className="site-list-style-one icon-style"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <li
                        style={{
                          paddingInlineStart: 0,
                        }}
                      >
                        <i
                          className="flaticon-drone-7"
                          style={{ left: "unset" }}
                        ></i>
                        <p style={{ marginInlineStart: "50px" }}>
                          {t("home.quality.planning")}
                        </p>
                      </li>
                      <li
                        style={{
                          paddingInlineStart: 0,
                        }}
                      >
                        <i
                          className="flaticon-worker"
                          style={{ left: "unset" }}
                        ></i>
                        <p style={{ marginInlineStart: "50px" }}>
                          {t("home.quality.performance")}
                        </p>
                      </li>
                      <li
                        style={{
                          paddingInlineStart: 0,
                        }}
                      >
                        <i
                          className="flaticon-heart"
                          style={{ left: "unset" }}
                        ></i>
                        <p style={{ marginInlineStart: "50px" }}>
                          {t("home.quality.customerSatisfaction")}
                        </p>
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
