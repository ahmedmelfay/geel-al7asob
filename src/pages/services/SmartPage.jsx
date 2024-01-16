import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SmartParagraphAndImages from "./sections/Smart/main/SmartParagraphAndImages";
import SmartAllServices from "./sections/Smart/main/SmartAllServices";
import SmartMainServices from "./sections/Smart/main/SmartMainServices";
var one = require("../../assets/images/Smart/1.jpg");

const SmartPage = (props) => {
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
                <h2 className="site-text-white">{t("smart.title")}</h2>
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
                <li>{t("smart.title")}</li>
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
                  <p>
                    شركة جيل الحاسوب تفخر بتقديم خدمات تنفيذ البيت الذكي، حيث
                    نعمل على تحويل منزلك إلى بيئة ذكية متقدمة توفر لك الراحة
                    والأمان والكفاءة العالية.
                  </p>
                ) : (
                  <>
                    <p>
                      <strong className="font-weight-bold">
                        Jeel Computer Company
                      </strong>{" "}
                      is proud to provide smart home implementation services, as
                      we work to transform your home into an advanced smart
                      environment that provides you with comfort, safety and
                      high efficiency.
                    </p>
                    <p>
                      With modern technological advancements, the smart home has
                      become a reality that cannot be ignored. We are here to
                      make that dream a reality in your home. We offer a wide
                      range of services to meet your needs and transform your
                      home into an integrated smart environment.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SmartAllServices />
      <SmartMainServices />
      {i18n.language === "en" && <SmartParagraphAndImages />}
    </>
  );
};
export default SmartPage;
