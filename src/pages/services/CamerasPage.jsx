import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesSectionContactUs from "./sections/section_ComputerNetworkServicesPage/ServicesSectionContactUs";
import CamerasServices from "./sections/Cameras/main/CamerasServices";
var one = require("../../assets/images/Cameras/1.jpg");

const CamerasPage = (props) => {
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
                <h2 className="site-text-white">{t("cameras.title")}</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{t("navigationMenu.home")}</Link>
                </li>
                <li>{t("navigationMenu.services")}</li>
                <li>{t("cameras.title")}</li>
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
                      نحن نفتخر بتقديم خدمات توريد وتركيب كاميرات المراقبة ذات
                      الجودة العالية والتكنولوجيا المتقدمة. إذا كنت تبحث عن حلول
                      مراقبة موثوقة وفعالة لأعمالك أو منزلك، فإننا هنا لمساعدتك.
                    </p>
                    <p>
                      تشمل خدماتنا في مجال توريد وتركيب كاميرات المراقبة ما يلي:
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      At{" "}
                      <strong className="font-weight-bold">
                        Computer Generation Company
                      </strong>
                      , we pride ourselves on providing services for the supply
                      and installation of high-quality surveillance cameras and
                      advanced technology. If you are looking for reliable and
                      effective monitoring solutions for your business or home,
                      we are here to help.
                    </p>
                    <p>
                      Our services in the field of supply and installation of
                      surveillance cameras include:
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CamerasServices />
      <ServicesSectionContactUs />
    </>
  );
};
export default CamerasPage;
