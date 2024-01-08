import React from "react";
import { useTranslation } from "react-i18next";
var untitled1 = require("../../../../assets/images/about-drone/logo.png");

const HomeSectionAbout = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- ABOUT ONE SECTION START --> */}
      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="about-section-one">
          <div className="container">
            <div className="section-content">
              <div className="row justify-content-center d-flex align-items-center">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-drone-one">
                    <div className="about-drone-one-media">
                      <img src={untitled1} alt="" className="slide-top" />
                    </div>
                    <div className="about-drone-one-info">
                      <span className="outline-title">
                        {t("home.message.mini")}
                      </span>
                      <strong
                        style={{
                          letterSpacing: i18n.language === "ar" ? "0px" : "5px",
                        }}
                      >
                        {t("home.message.title")}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    {/* <!-- TITLE START--> */}
                    <div className="left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div className="sep-leaf-left"></div>
                        <div>{t("home.message.mini")}</div>
                        <div className="sep-leaf-right"></div>
                      </div>
                      <h2>{t("home.message.title")}</h2>
                      <p>{t("home.message.description")}</p>
                    </div>
                    {/* <!-- TITLE END--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT ONE SECTION END --> */}
    </>
  );
};
export default HomeSectionAbout;
