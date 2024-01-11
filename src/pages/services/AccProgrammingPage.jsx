import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import AccProgrammingServices from "./sections/AccProgramming/main/AccProgrammingServices";
var one = require("../../assets/images/AccProgramming/1.jpg");

const AccProgrammingPage = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title =
      i18n.language === "ar" ? "الخدمات | جيل الحاسوب" : "Hasoup | Services";
  });

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
                <h2 className="site-text-white">{t("accProgramming.title")}</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul
                className={`wt-breadcrumb ${
                  i18n.language === "ar"
                    ? "breadcrumb-style-2-ar"
                    : "breadcrumb-style-2"
                }`}
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <li>
                  <Link to="/">{t("navigationMenu.home")}</Link>
                </li>
                <li>{t("navigationMenu.services")}</li>
                <li>{t("accProgramming.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      <div
        className="section-full p-t80"
        style={{
          textAlign: i18n.language === "ar" ? "right" : "left",
          direction: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <div className="section-content">
          <div className="container">
            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      في شركة{" "}
                      <strong className="font-weight-bold">جيل الحاسوب</strong>
                      ،نحن ندرك أهمية وضرورة نظام محاسبي قوي وموثوق به في إدارة
                      الشؤون المالية والمحاسبية للشركات والمؤسسات. نحن نقدم حلول
                      برمجية متخصصة في مجال البرامج المحاسبية لتلبية احتياجات
                      عملك وتسهيل عملياتك المالية.
                    </p>
                    <p>تشمل خدماتنا في مجال البرامج المحاسبية ما يلي:</p>
                  </>
                ) : (
                  <>
                    <p>
                      At{" "}
                      <strong className="font-weight-bold">
                        Computer Generation Company
                      </strong>
                      , we recognize the importance and necessity of a strong
                      and reliable accounting system in managing the financial
                      and accounting affairs of companies and institutions. We
                      provide specialized software solutions in the field of
                      accounting software to meet your business needs and
                      facilitate your financial operations.
                    </p>
                    <p>Our accounting software services include:</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AccProgrammingServices />
      <ServicesSectionContactUs />
    </>
  );
};
export default AccProgrammingPage;
