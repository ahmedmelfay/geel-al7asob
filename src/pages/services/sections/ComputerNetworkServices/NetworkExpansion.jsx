import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NetworkExpansionGallery from "./components/NetworkExpansionGallery";
var network_expansion = require("../../../../assets/images/ComputerNetworkServices/6.webp");

const NetworkExpansion = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${network_expansion})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t(
                    "computerNetworkServices.mainServiceSection.networkExpansion.title"
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
                    "computerNetworkServices.mainServiceSection.networkExpansion.title"
                  )}
                </li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <NetworkExpansionGallery />
    </>
  );
};
export default NetworkExpansion;
