import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../assets/images/ComputerNetworkServices/2.webp");
var pic2 = require("../../../../assets/images/ComputerNetworkServices/3.jpg");
var pic3 = require("../../../../assets/images/ComputerNetworkServices/4.webp");
var pic4 = require("../../../../assets/images/ComputerNetworkServices/5.webp");
var pic5 = require("../../../../assets/images/ComputerNetworkServices/6.webp");

const ServicesSectionMainServices = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- ALL SERVICES START -->*/}
      <div className="section-full p-t80 p-b40 bg-gray">
        <div className="container">
          {/* <!-- TITLE START-->*/}

          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-lg-5 col-md-6 wt-separator-two-part-left">
                {/* <!-- TITLE START-->*/}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div className="sep-leaf-left"></div>
                    <div>
                      {t("computerNetworkServices.mainServiceSection.all")}
                    </div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>
                    {t("computerNetworkServices.mainServiceSection.explore")}
                  </h2>
                </div>
                {/* <!-- TITLE END-->*/}
              </div>

              <div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
                <p>
                  {t("computerNetworkServices.mainServiceSection.description")}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- TITLE END-->*/}

          <div className="section-content">
            <div className="row justify-content-center d-flex">
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="imghvr-zoom-out-down grayscale-img">
                  <img src={pic1} alt="" />
                  <div className="imghvr-content">
                    <div className="imghvr-mid">
                      <h3 className="wt-title">
                        {t(
                          "computerNetworkServices.mainServiceSection.networkDesign.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "computerNetworkServices.mainServiceSection.networkDesign.description"
                        )}
                      </p>
                      <Link
                        to="network-design"
                        className="site-button-link site-text-primary"
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
                        {t(
                          "computerNetworkServices.mainServiceSection.networkInstallationConfiguration.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "computerNetworkServices.mainServiceSection.networkInstallationConfiguration.description"
                        )}
                      </p>
                      <Link
                        to="network-installation-and-configuration"
                        className="site-button-link site-text-primary"
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
                        {t(
                          "computerNetworkServices.mainServiceSection.securityProtection.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "computerNetworkServices.mainServiceSection.securityProtection.description"
                        )}
                      </p>
                      <Link
                        to="security-and-protection"
                        className="site-button-link site-text-primary"
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
                          "computerNetworkServices.mainServiceSection.maintenanceSupport.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "computerNetworkServices.mainServiceSection.maintenanceSupport.description"
                        )}
                      </p>
                      <Link
                        to="maintenance-and-support"
                        className="site-button-link site-text-primary"
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
                        {t(
                          "computerNetworkServices.mainServiceSection.networkExpansion.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "computerNetworkServices.mainServiceSection.networkExpansion.description"
                        )}
                      </p>
                      <Link
                        to="network-expansion"
                        className="site-button-link site-text-primary"
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
export default ServicesSectionMainServices;
