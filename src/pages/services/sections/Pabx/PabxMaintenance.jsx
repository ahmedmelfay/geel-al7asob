import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PabxMaintenanceGallery from "./components/PabxMaintenanceGallery";
var pabx_maintenance = require("../../../../assets/images/Pabx/5.jpg");

const PabxMaintenance = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${pabx_maintenance})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("pabx.mainServiceSection.maintenance.title")}
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
                  <Link to="/pabx">{t("pabx.title")}</Link>
                </li>
                <li>{t("pabx.mainServiceSection.maintenance.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      <PabxMaintenanceGallery />
    </>
  );
};
export default PabxMaintenance;
