import React from "react";
import { Link } from "react-router-dom";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import { useTranslation } from "react-i18next";
import PabxAllServices from "./sections/Pabx/main/PabxAllServices";
import PabxMainServices from "./sections/Pabx/main/PabxMainServices";
import PabxParagraphAndImages from "./sections/Pabx/main/PabxParagraphAndImages";
var one = require("../../assets/images/Pabx/1.jpg");

const PabxPage = (props) => {
  const { t, i18n } = useTranslation();

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
                <h2 className="site-text-white">{t("pabx.title")}</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{t("navigationMenu.home")}</Link>
                </li>
                <li>{t("navigationMenu.services")}</li>
                <li>{t("pabx.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {i18n.language === "en" && (
        <div className="section-full p-t80">
          <div className="section-content">
            <div className="container">
              <div className="wt-box services-etc m-b30">
                <div className="wt-info">
                  <p>
                    <strong className="font-weight-bold">
                      Jeel Computer Company
                    </strong>{" "}
                    is the leading company in the field of supply, installation
                    and maintenance of PABX.
                  </p>
                  <p>
                    We understand the importance of smooth and efficient
                    communications in the modern work environment, and therefore
                    strive to provide advanced and reliable communication
                    solutions to our customers.
                  </p>
                  <p>
                    PABX is a basic system in any business communication system,
                    enabling you to route and distribute incoming and outgoing
                    calls between employees easily and effectively. We
                    understand that every communication is an opportunity for
                    success and enhanced business relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <PabxAllServices />
      <PabxMainServices />
      {i18n.language === "en" && <PabxParagraphAndImages />}
      <ServicesSectionContactUs />
    </>
  );
};
export default PabxPage;
