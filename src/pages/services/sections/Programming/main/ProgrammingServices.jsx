import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Programming/2.jpg");
var pic2 = require("../../../../../assets/images/Programming/3.jpg");

const ProgrammingServices = (props) => {
  const { t, i18n } = useTranslation();

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
                <div
                  className={`${
                    i18n.language === "en" ? "left" : "right"
                  } section-head wt-small-separator-outer`}
                >
                  <div
                    className="wt-small-separator site-text-primary"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    <div className="sep-leaf-left"></div>
                    <div>{t("programming.allServiceSection.theBest")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("programming.allServiceSection.explore")}</h2>
                </div>
                {/*<!-- TITLE END--> */}
              </div>
            </div>
          </div>

          {/*<!-- TITLE END--> */}

          <div className="section-content">
            <div className="services-style-two">
              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("programming.allServiceSection.cloud.title")}
                    </h3>
                    <p>
                      {t("programming.allServiceSection.cloud.description")}
                    </p>
                    <Link
                      to="cloud-solutions-development-and-web-services"
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
              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t(
                        "programming.allServiceSection.businessAdministration.title"
                      )}
                    </h3>
                    {i18n.language === "en" && (
                      <>
                        <p>
                          {t(
                            "programming.allServiceSection.businessAdministration.description"
                          )}
                        </p>
                        <Link
                          to="development-of-business-administration-programs"
                          className="site-button-link site-text-primary"
                        >
                          {t("readMore")}
                        </Link>
                      </>
                    )}
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
export default ProgrammingServices;
