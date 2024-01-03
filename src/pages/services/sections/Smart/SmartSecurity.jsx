import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SmartSecurityGallery from "./components/SmartSecurityGallery";
var smart_security = require("../../../../assets/images/Smart/3.webp");

const SmartSecurity = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${smart_security})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("smart.mainServiceSection.securityAndMonitoring.title")}
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
                  <Link to="/smart-home">{t("smart.title")}</Link>
                </li>
                <li>
                  {t("smart.mainServiceSection.securityAndMonitoring.title")}
                </li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <SmartSecurityGallery />
    </>
  );
};
export default SmartSecurity;
