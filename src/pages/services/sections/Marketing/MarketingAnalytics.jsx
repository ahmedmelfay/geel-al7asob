import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarketingAnalyticsGallery from "./components/MarketingAnalyticsGallery";
var marketing_analytics = require("../../../../assets/images/Marketing/6.jpg");

const MarketingAnalytics = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${marketing_analytics})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("marketing.mainServiceSection.analytics.title")}
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
                <li>{t("marketing.mainServiceSection.analytics.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <MarketingAnalyticsGallery />
    </>
  );
};
export default MarketingAnalytics;
