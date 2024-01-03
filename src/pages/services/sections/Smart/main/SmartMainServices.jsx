import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Smart/2.jpg");
var pic2 = require("../../../../../assets/images/Smart/3.webp");
var pic3 = require("../../../../../assets/images/Smart/4.jpg");
var pic4 = require("../../../../../assets/images/Smart/5.webp");
var pic5 = require("../../../../../assets/images/Smart/6.jpg");

const SmartMainServices = (props) => {
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
                    <div>{t("smart.mainServiceSection.all")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("smart.mainServiceSection.explore")}</h2>
                </div>
                {/* <!-- TITLE END-->*/}
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
                        {t("smart.mainServiceSection.lightingControl.title")}
                      </h3>
                      <p>
                        {t(
                          "smart.mainServiceSection.lightingControl.description"
                        )}
                      </p>
                      <Link
                        to="lighting-control"
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
                          "smart.mainServiceSection.securityAndMonitoring.title"
                        )}
                      </h3>
                      <p>
                        {t(
                          "smart.mainServiceSection.securityAndMonitoring.description"
                        )}
                      </p>
                      <Link
                        to="security-and-monitoring"
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
                        {t("smart.mainServiceSection.temperatureControl.title")}
                      </h3>
                      <p>
                        {t(
                          "smart.mainServiceSection.temperatureControl.description"
                        )}
                      </p>
                      <Link
                        to="temperature-control"
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
                        {t("smart.mainServiceSection.applianceControl.title")}
                      </h3>
                      <p>
                        {t(
                          "smart.mainServiceSection.applianceControl.description"
                        )}
                      </p>
                      <Link
                        to="home-appliance-control"
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
                        {t("smart.mainServiceSection.personalAssistants.title")}
                      </h3>
                      <p>
                        {t(
                          "smart.mainServiceSection.personalAssistants.description"
                        )}
                      </p>
                      <Link
                        to="compatibility-with-personal-assistants"
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
export default SmartMainServices;
