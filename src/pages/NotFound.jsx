import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var bg2 = require("../assets/images/background/bg-4.jpg");
var testimonial = require("../assets/images/how-it-work/drone-4.png");
const NotFound = () => {
  const { t, i18n } = useTranslation();

  useEffect((props) => {
    document.title =
      i18n.language === "ar" ? "خطأ | جيل الحاسوب" : "Hasoup | Error";
    const handleScroll = () => {
      const offset = window.scrollY;

      const stickyheader = document.querySelector(".sticky-header");
      if (stickyheader != null) {
        if (offset >= 100) {
          stickyheader.classList.add("is-fixed");
          stickyheader.classList.add("color-fill");
        } else {
          stickyheader.classList.remove("is-fixed");
          stickyheader.classList.remove("color-fill");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.updateTopMostParent = (logopath) => {
      this.setState({ logo: logopath });
    };
  });
  return (
    <>
      {/* <!-- HEADER START --> */}
      <header className="site-header header-style-4 mobile-sider-drawer-menu">
        <div className="sticky-header main-bar-wraper  navbar-expand-lg"></div>
      </header>
      {/* <!-- HEADER END --> */}
      <div className="page-wraper">
        {/* <!-- CONTENT START --> */}
        <div className="page-content">
          {/* <!-- Error SECTION START --> */}
          <div
            className="error-full-page bg-cover overlay-wraper bg-image-moving"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="overlay-main bg-black opacity-07"></div>

            <div className="error-full-page-inner">
              <div className="error-full-page-inner-info">
                <div className="error-media">
                  <img src={testimonial} className="slide-top" alt="" />
                </div>
                <h3 className="title-style-2">{t("error.title")}</h3>
                <strong style={{ color: "rgb(250, 166, 26)" }}>404</strong>
                <h4
                  className="title-style-2"
                  style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
                >
                  {t("error.message")}
                </h4>
                <p
                  style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
                >
                  {t("error.description")}
                </p>

                <Link to="/" className="site-button site-btn-effect">
                  {t("error.home")}
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Error  SECTION END --> */}
        </div>
        {/*<!-- CONTENT END --> */}
      </div>
    </>
  );
};

export default NotFound;
