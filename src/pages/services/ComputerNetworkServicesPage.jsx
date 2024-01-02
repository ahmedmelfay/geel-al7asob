import React from "react";
import { Link } from "react-router-dom";
import ServicesSectionAllServices from "./sections/section_ComputerNetworkServicesPage/ServicesSectionAllServices";
import ServicesSectionMainlServices from "./sections/section_ComputerNetworkServicesPage/ServicesSectionMainlServices";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import { useTranslation } from "react-i18next";
var one = require("../../assets/images/ComputerNetworkServices/1.jpg");

const ComputerNetworkServicesPage = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${one})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("computerNetworkServices.title")}
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
                <li>{t("computerNetworkServices.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      <ServicesSectionAllServices />
      <ServicesSectionMainlServices />
      <ServicesSectionContactUs />
    </>
  );
};
export default ComputerNetworkServicesPage;
