import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutSectionAbout from "./sections/section_about1/AboutSectionAbout";
import AboutSectionOurTeam from "./sections/section_about1/AboutSectionOurTeam";
import { useTranslation } from "react-i18next";

var three = require("../../assets/images/banner/10.jpg");

const AboutPage1 = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title =
      i18n.language === "ar" ? "نبذة عنا | جيل الحاسوب" : "Hasoup | About Us";
  });

  return (
    <>
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${three})` }}
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
            <ul className="wt-breadcrumb breadcrumb-style-2">
              <li>
                <Link to="/">{t("navigationMenu.home")}</Link>
              </li>
              <li>{t("navigationMenu.contactUs")}</li>
            </ul>
          </div>
        </div>
      </div>
      <AboutSectionAbout />
      <AboutSectionOurTeam />
    </>
  );
};
export default AboutPage1;
