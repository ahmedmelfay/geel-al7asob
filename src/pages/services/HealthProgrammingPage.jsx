import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import HealthProgrammingServices from "./sections/HealthProgramming/main/HealthProgrammingServices";
var one = require("../../assets/images/HealthProgramming/1.jpg");

const HealthProgrammingPage = (props) => {
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
                  {t("healthProgramming.title")}
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
                <li>{t("healthProgramming.title")}</li>
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
                      نحن نفهم أهمية الأنظمة الصحية المتكاملة والفعالة في إدارة
                      المعلومات الطبية في المستشفيات والمرافق الصحية. نحن نقدم
                      حلول برمجية متخصصة في نظم المعلومات الصحية (HIS) لتلبية
                      احتياجات المؤسسات الصحية المتنوعة.
                    </p>
                    <p>تشمل خدماتنا في مجال برامج المستشفيات HIS ما يلي:</p>
                  </>
                ) : (
                  <>
                    <p>
                      At{" "}
                      <strong className="font-weight-bold">
                        Computer Generation Company
                      </strong>
                      , we understand the importance of integrated and effective
                      health systems in managing medical information in
                      hospitals and health facilities. We provide specialized
                      software solutions in health information systems (HIS) to
                      meet the needs of diverse health institutions.
                    </p>
                    <p>
                      Our services in the field of HIS hospital programs
                      include:
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HealthProgrammingServices />
      <ServicesSectionContactUs />
    </>
  );
};
export default HealthProgrammingPage;
