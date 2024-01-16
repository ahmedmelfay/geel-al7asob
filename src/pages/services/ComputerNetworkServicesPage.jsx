import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesSectionAllServices from "./sections/section_ComputerNetworkServicesPage/ServicesSectionAllServices";
import ServicesSectionMainlServices from "./sections/section_ComputerNetworkServicesPage/ServicesSectionMainlServices";
import { useTranslation } from "react-i18next";
import NetworkParagraphAndImages from "./sections/ComputerNetworkServices/main/NetworkParagraphAndImages";
var one = require("../../assets/images/ComputerNetworkServices/1.jpg");

const ComputerNetworkServicesPage = (props) => {
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
                  {t("computerNetworkServices.title")}
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
                <li>{t("computerNetworkServices.title")}</li>
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
                      نحن نفخر بخبرتنا ومعرفتنا الواسعة في مجال تصميم وتنفيذ
                      وصيانة الشبكات.
                    </p>
                    <p>
                      نعمل مع العملاء في مختلف القطاعات بما في ذلك المنازل
                      والشركات الصغيرة والمتوسطة والمؤسسات الكبيرة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We are a computer generation company, and we are pleased
                      to provide high quality and reliable wired and wireless
                      computer network services.
                    </p>
                    <p>
                      We pride ourselves on our extensive experience and
                      knowledge in the design, implementation and maintenance of
                      networks, working with clients in various sectors
                      including homes, SMEs and large enterprises.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesSectionAllServices />
      <ServicesSectionMainlServices />
      {i18n.language === "en" && <NetworkParagraphAndImages />}
    </>
  );
};
export default ComputerNetworkServicesPage;
