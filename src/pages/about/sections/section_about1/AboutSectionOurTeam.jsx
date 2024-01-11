import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// var pic1 = require("../../../../assets/images/team/pic1.jpg");
// var pic2 = require("../../../../assets/images/team/pic2.jpg");
// var pic3 = require("../../../../assets/images/team/pic3.jpg");

const AboutSectionOurTeam = (props) => {
  const { t, i18n } = useTranslation();

  const data = [
    { title: t("home.services.network"), link: "/computer-network-services" },
    { title: t("home.services.pabx"), link: "/pabx" },
    { title: t("home.services.home"), link: "/smart-home" },
    { title: t("home.services.marketing"), link: "/e-marketing" },
    { title: t("home.services.programming"), link: "/programming" },
    { title: t("home.services.supply"), link: "/surveillance-cameras" },
    { title: t("home.services.maintenance"), link: "/computer-maintenance" },
  ];

  return (
    <>
      <div className="section-full p-t80 p-b50">
        <div className="container">
          <div className="section-head center wt-small-separator-outer text-center">
            <h2>{t("home.services.title")}</h2>
          </div>

          <div className="section-content quality-section-outer">
            <div className="container">
              <div className="quality-section-content">
                <div
                  className="row justify-content-center"
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                  }}
                >
                  {data.map((item) => (
                    <div
                      className="col-lg-4 col-md-6 m-b30"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <div className="corner-line">
                        <div
                          className="wt-box d-icon-box-one bg-white shadow"
                          style={{ maxHeight: "310PX", height: "310px" }}
                        >
                          <div className="wt-icon-box-wraper m-b40">
                            <div className="icon-xl inline-icon">
                              <span className="icon-cell site-text-primary">
                                <i className="flaticon"></i>
                              </span>
                            </div>
                          </div>

                          <div className="d-icon-box-title title-style-2 site-text-secondry">
                            <h3 className="s-title-one">{item.title}</h3>
                          </div>

                          <div className="d-icon-box-content">
                            <Link
                              to={item.link}
                              className={`${
                                i18n.language === "ar"
                                  ? "site-button-link-right"
                                  : "site-button-link"
                              } site-text-primary`}
                            >
                              {t("readMore")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OUR TEAM SECTION END -->*/}
    </>
  );
};
export default AboutSectionOurTeam;
