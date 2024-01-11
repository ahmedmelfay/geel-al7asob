import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesSectionAllServices = (props) => {
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
              <div>
                {t("computerNetworkServices.allServiceSection.theBest")}
              </div>
              <div className="sep-leaf-right"></div>
            </div>
            <h2>{t("computerNetworkServices.allServiceSection.explore")}</h2>
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
                        <i className="flaticon-drone-8"></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-icon-box-title title-style-2 site-text-secondry">
                    <h3 className="s-title-one">
                      {t(
                        "computerNetworkServices.allServiceSection.networkDesign.title"
                      )}
                    </h3>
                  </div>

                  <div className="d-icon-box-content">
                    <p>
                      {t(
                        "computerNetworkServices.allServiceSection.networkDesign.description"
                      )}
                    </p>
                    <Link
                      to="network-design"
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
                      {t(
                        "computerNetworkServices.allServiceSection.networkInstallationConfiguration.title"
                      )}
                    </h3>
                  </div>

                  <div className="d-icon-box-content">
                    <p>
                      {t(
                        "computerNetworkServices.allServiceSection.networkInstallationConfiguration.description"
                      )}
                    </p>
                    <Link
                      to="network-installation-and-configuration"
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
                        <i className="flaticon-drone-2"></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-icon-box-title title-style-2 site-text-secondry">
                    <h3 className="s-title-one">
                      {t(
                        "computerNetworkServices.allServiceSection.securityProtection.title"
                      )}
                    </h3>
                  </div>

                  <div className="d-icon-box-content">
                    <p>
                      {t(
                        "computerNetworkServices.allServiceSection.securityProtection.description"
                      )}
                    </p>
                    <Link
                      to="security-and-protection"
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
export default ServicesSectionAllServices;
