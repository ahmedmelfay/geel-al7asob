import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import ProgrammingServices from "./sections/Programming/main/ProgrammingServices";
var one = require("../../assets/images/Programming/1.jpg");

const ProgrammingPage = (props) => {
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
                <h2 className="site-text-white">{t("programming.title")}</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{t("navigationMenu.home")}</Link>
                </li>
                <li>{t("navigationMenu.services")}</li>
                <li>{t("programming.title")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      <div className="section-full p-t80">
        <div className="section-content">
          <div className="container">
            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      في شركة{" "}
                      <strong className="font-weight-bold">جيل الحاسوب</strong>،
                      نحن نقدم خدمات برمجية متخصصة للشركات التي تبحث عن حلول
                      تقنية مبتكرة ومخصصة.
                    </p>
                    <p>
                      نحن نفهم تمامًا أن كل شركة لديها احتياجات فريدة، ولذلك،
                      نحن ملتزمون بتقديم حلول فعالة ومخصصة تلبي تمامًا
                      احتياجاتك.
                    </p>
                    <p>تشمل خدماتنا في مجال البرمجة لصالح الشركات ما يلي:</p>
                  </>
                ) : (
                  <>
                    <p>
                      At{" "}
                      <strong className="font-weight-bold">
                        Computer Generation Company
                      </strong>
                      , we provide specialized software services to companies
                      looking for innovative and customized technical solutions.
                      We fully understand that each company has unique needs,
                      therefore, we are committed to providing effective and
                      customized solutions that fully meet your needs.
                    </p>
                    <p>Our corporate programming services include:</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProgrammingServices />
      <ServicesSectionContactUs />
    </>
  );
};
export default ProgrammingPage;
