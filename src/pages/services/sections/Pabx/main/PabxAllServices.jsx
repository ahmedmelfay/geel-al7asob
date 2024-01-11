import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PabxAllServices = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/*<!-- ALL SERVICES START -->*/}
      <div className="section-full p-t80 p-b40 bg-no-repeat bg-bottom-right bg-cover">
        <div className="container">
          {/*<!-- TITLE START-->*/}
          <div
            className={`${
              i18n.language === "en" ? "left" : "right"
            } section-head wt-small-separator-outer`}
          >
            <div
              className="wt-small-separator site-text-primary"
              style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
            >
              <div className="sep-leaf-left"></div>
              <div>{t("pabx.allServiceSection.theBest")}</div>
              <div className="sep-leaf-right"></div>
            </div>
            <h2>{t("pabx.allServiceSection.explore")}</h2>
          </div>
          {/*<!-- TITLE END-->*/}

          <div className="section-content">
            <div
              className="row justify-content-center d-flex"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="wt-box d-icon-box-one bg-white shadow card1">
                  <div className="wt-icon-box-wraper m-b40">
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell site-text-primary">
                        <i className="flaticon-chain-links"></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-icon-box-title title-style-2 site-text-secondry">
                    <h3 className="s-title-one">
                      {t("pabx.allServiceSection.supply.title")}
                    </h3>
                  </div>

                  <div className="d-icon-box-content">
                    <p>{t("pabx.allServiceSection.supply.description")}</p>
                    <Link
                      to="supply-of-pabx"
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

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="wt-box d-icon-box-one bg-white shadow card1">
                  <div className="wt-icon-box-wraper m-b40">
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell site-text-primary">
                        <i className="flaticon-viewfinder"></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-icon-box-title title-style-2 site-text-secondry">
                    <h3 className="s-title-one">
                      {t("pabx.allServiceSection.installation.title")}
                    </h3>
                  </div>

                  <div className="d-icon-box-content">
                    <p>
                      {t("pabx.allServiceSection.installation.description")}
                    </p>
                    <Link
                      to="pabx-installation"
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

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="wt-box d-icon-box-one bg-white shadow card1">
                  <div className="wt-icon-box-wraper m-b40">
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell site-text-primary">
                        <i className="flaticon-quality"></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-icon-box-title title-style-2 site-text-secondry">
                    <h3 className="s-title-one">
                      {t("pabx.allServiceSection.programming.title")}
                    </h3>
                  </div>

                  <div className="d-icon-box-content">
                    <p>{t("pabx.allServiceSection.programming.description")}</p>
                    <Link
                      to="pabx-programming"
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
      {/*<!-- ALL SERVICES SECTION END -->*/}
    </>
  );
};
export default PabxAllServices;
