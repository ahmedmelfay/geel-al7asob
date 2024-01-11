import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import ComputerServices from "./sections/Computer/main/ComputerServices";
var one = require("../../assets/images/Computer/1.jpg");

const ComputerPage = (props) => {
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
                <h2 className="site-text-white">
                  {t("computerMaintenance.title")}
                </h2>
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
                <li>{t("computerMaintenance.title")}</li>
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
                      <strong className="font-weight-bold">جيل الحاسوب</strong>،
                      نحن متخصصون في تقديم خدمات صيانة أجهزة الحاسوب بجودة عالية
                      واحترافية. سواء كنت تعاني من مشاكل تقنية في أجهزتك الحالية
                      أو ترغب في الحفاظ على أداء ممتاز واستقرار لأجهزتك، فإننا
                      هنا لمساعدتك.
                    </p>
                    <p>خدماتنا تشمل:</p>
                  </>
                ) : (
                  <>
                    <p>
                      At{" "}
                      <strong className="font-weight-bold">
                        Computer Generation Company
                      </strong>
                      , we specialize in providing high quality and professional
                      computer maintenance services. Whether you are
                      experiencing technical issues with your current hardware
                      or want to maintain excellent performance and stability
                      for your devices, we are here to help.
                    </p>
                    <p>Our services include:</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComputerServices />
      <ServicesSectionContactUs />
    </>
  );
};
export default ComputerPage;
