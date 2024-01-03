import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarketingManagementGallery from "./components/MarketingManagementGallery";
var marketing_management = require("../../../../assets/images/Marketing/5.jpg");

const MarketingManagement = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${marketing_management})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("marketing.mainServiceSection.contentManagement.title")}
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
                  <Link to="/e-marketing">{t("marketing.title")}</Link>
                </li>
                <li>
                  {t("marketing.mainServiceSection.contentManagement.title")}
                </li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <MarketingManagementGallery />
    </>
  );
};
export default MarketingManagement;
