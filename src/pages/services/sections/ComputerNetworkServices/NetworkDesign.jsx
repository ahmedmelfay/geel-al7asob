import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NetworkDesignGallery from "./components/NetworkDesignGallery";
var network_design = require("../../../../assets/images/ComputerNetworkServices/2.webp");

const NetworkDesign = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${network_design})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t(
                    "computerNetworkServices.mainServiceSection.networkDesign.title"
                  )}
                </h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{t("navigationMenu.home")}</Link>
                </li>
                <li>{t("navigationMenu.services")}</li>
                <li>
                  <Link to="/computer-network-services">
                    {t("computerNetworkServices.title")}
                  </Link>
                </li>
                <li>
                  {t(
                    "computerNetworkServices.mainServiceSection.networkDesign.title"
                  )}
                </li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <NetworkDesignGallery />
    </>
  );
};
export default NetworkDesign;