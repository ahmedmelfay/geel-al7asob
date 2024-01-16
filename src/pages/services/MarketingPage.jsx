import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarketingAllServices from "./sections/Marketing/main/MarketingAllServices";
import MarketingMainServices from "./sections/Marketing/main/MarketingMainServices";
import MarketingParagraphAndImages from "./sections/Marketing/main/MarketingParagraphAndImages";
var one = require("../../assets/images/Marketing/1.jpg");

const MarketingPage = (props) => {
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
                <h2 className="site-text-white">{t("marketing.title")}</h2>
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
                <li>{t("marketing.title")}</li>
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
                      تعتبر شركة{" "}
                      <strong className="font-weight-bold">جيل الحاسوب</strong>{" "}
                      خبيرة في مجال التسويق الإلكتروني على منصات التواصل
                      الاجتماعي ومحركات البحث العالمية.
                    </p>
                    <p>
                      نحن نقدم حلولًا مبتكرة وفعالة للشركات التي ترغب في تعزيز
                      وجودها الرقمي وزيادة وعي العملاء المحتملين بمنتجاتها
                      وخدماتها.
                    </p>
                    <p>
                      توفر شركتنا خدمات التسويق الإلكتروني الشاملة التي تشمل
                      العديد من المجالات:
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong className="font-weight-bold">
                        Computer Generation Company
                      </strong>{" "}
                      is an expert in the field of e-marketing on social media
                      platforms and global search engines.
                    </p>
                    <p>
                      We provide innovative and effective solutions for
                      companies that want to enhance their digital presence and
                      increase potential customers' awareness of their products
                      and services.
                    </p>
                    <p>
                      Our company provides comprehensive e-marketing services
                      that include many areas:
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MarketingAllServices />
      <MarketingMainServices />
      {i18n.language === "en" && <MarketingParagraphAndImages />}
    </>
  );
};
export default MarketingPage;
