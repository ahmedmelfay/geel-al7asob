import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarketingSeoGallery from "./components/MarketingSeoGallery";
var marketing_seo = require("../../../../assets/images/Marketing/3.jpg");

const MarketingSeo = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${marketing_seo})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("marketing.mainServiceSection.seo.title")}
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
                <li>{t("marketing.mainServiceSection.seo.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <MarketingSeoGallery />
    </>
  );
};
export default MarketingSeo;
