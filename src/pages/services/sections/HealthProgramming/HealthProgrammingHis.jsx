import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HealthProgrammingHisGallery from "./components/HealthProgrammingHisGallery";
var health_programming_his = require("../../../../assets/images/HealthProgramming/2.jpg");

const HealthProgrammingHis = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${health_programming_his})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("healthProgramming.allServiceSection.hospital")}
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
                  <Link to="/health-programming">
                    {t("healthProgramming.title")}
                  </Link>
                </li>
                <li>{t("healthProgramming.allServiceSection.hospital")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <HealthProgrammingHisGallery />
    </>
  );
};
export default HealthProgrammingHis;
