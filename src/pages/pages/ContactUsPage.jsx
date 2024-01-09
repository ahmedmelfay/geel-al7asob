import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PagesSectionContactUs from "./sections/PagesSectionContactUs";
import { useTranslation } from "react-i18next";
var five = require("../../assets/images/banner/9.jpg");
const ContactUsPage = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title =
      i18n.language === "ar"
        ? "تواصل معنا | جيل الحاسوب"
        : "Hasoup | Contact Us";
  });

  return (
    <>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${five})` }}
      >
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {t("navigationMenu.contactUs")}
                </h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{t("navigationMenu.home")}</Link>
                </li>
                <li>{t("navigationMenu.contactUs")}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      <PagesSectionContactUs />
    </>
  );
};
export default ContactUsPage;
