import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Pabx/2.webp");
var pic2 = require("../../../../../assets/images/Pabx/3.jpg");
var pic3 = require("../../../../../assets/images/Pabx/4.jpg");
var pic4 = require("../../../../../assets/images/Pabx/5.jpg");

const PabxMainServices = (props) => {
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
                    <div>{t("pabx.mainServiceSection.all")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("pabx.mainServiceSection.explore")}</h2>
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
                        {t("pabx.mainServiceSection.supply.title")}
                      </h3>
                      <p>{t("pabx.mainServiceSection.supply.description")}</p>
                      <Link
                        to="supply-of-pabx"
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
                        {t("pabx.mainServiceSection.installation.title")}
                      </h3>
                      <p>
                        {t("pabx.mainServiceSection.installation.description")}
                      </p>
                      <Link
                        to="pabx-installation"
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
                        {t("pabx.mainServiceSection.programming.title")}
                      </h3>
                      <p>
                        {t("pabx.mainServiceSection.programming.description")}
                      </p>
                      <Link
                        to="pabx-programming"
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
                        {t("pabx.mainServiceSection.maintenance.title")}
                      </h3>
                      <p>
                        {t("pabx.mainServiceSection.maintenance.description")}
                      </p>
                      <Link
                        to="pabx-maintenance"
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
export default PabxMainServices;
