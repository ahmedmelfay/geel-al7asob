import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Marketing/2.jpg");
var pic2 = require("../../../../../assets/images/Marketing/3.jpg");
var pic3 = require("../../../../../assets/images/Marketing/4.jpg");
var pic4 = require("../../../../../assets/images/Marketing/5.jpg");
var pic5 = require("../../../../../assets/images/Marketing/6.jpg");

const MarketingMainServices = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- ALL SERVICES START -->*/}
      <div className="section-full p-t80 p-b40 bg-gray">
        <div className="container">
          {/* <!-- TITLE START-->*/}

          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-lg-12 col-md-12 wt-separator-two-part-left">
                {/* <!-- TITLE START-->*/}
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
                    <div>{t("marketing.mainServiceSection.all")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("marketing.mainServiceSection.explore")}</h2>
                </div>
                {/* <!-- TITLE END-->*/}
              </div>
            </div>
          </div>

          {/* <!-- TITLE END-->*/}

          <div className="section-content">
            <div
              className="row justify-content-center d-flex"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="imghvr-zoom-out-down grayscale-img">
                  <img src={pic1} alt="" />
                  <div className="imghvr-content">
                    <div className="imghvr-mid">
                      <h3 className="wt-title">
                        {t("marketing.mainServiceSection.socialMedia.title")}
                      </h3>
                      <p>
                        {t(
                          "marketing.mainServiceSection.socialMedia.description"
                        )}
                      </p>
                      <Link
                        to="social-media-advertising"
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

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="imghvr-zoom-out-down grayscale-img">
                  <img src={pic2} alt="" />
                  <div className="imghvr-content">
                    <div className="imghvr-mid">
                      <h3 className="wt-title">
                        {t("marketing.mainServiceSection.seo.title")}
                      </h3>
                      <p>{t("marketing.mainServiceSection.seo.description")}</p>
                      <Link
                        to="seo"
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

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="imghvr-zoom-out-down grayscale-img">
                  <img src={pic3} alt="" />
                  <div className="imghvr-content">
                    <div className="imghvr-mid">
                      <h3 className="wt-title">
                        {t("marketing.mainServiceSection.sem.title")}
                      </h3>
                      <p>{t("marketing.mainServiceSection.sem.description")}</p>
                      <Link
                        to="sem"
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

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="imghvr-zoom-out-down grayscale-img">
                  <img src={pic4} alt="" />
                  <div className="imghvr-content">
                    <div className="imghvr-mid">
                      <h3 className="wt-title">
                        {t(
                          "marketing.mainServiceSection.contentManagement.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "marketing.mainServiceSection.contentManagement.description"
                        )}
                      </p>
                      <Link
                        to="content-management"
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

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="imghvr-zoom-out-down grayscale-img">
                  <img src={pic5} alt="" />
                  <div className="imghvr-content">
                    <div className="imghvr-mid">
                      <h3 className="wt-title">
                        {t("marketing.mainServiceSection.analytics.title")}
                      </h3>
                      <p>
                        {t(
                          "marketing.mainServiceSection.analytics.description"
                        )}
                      </p>
                      <Link
                        to="analytics-and-reports"
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
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ALL SERVICES SECTION END -->*/}
    </>
  );
};
export default MarketingMainServices;
