import React from "react";
import { useTranslation } from "react-i18next";
var bg1 = require("../../../../assets/images/about-drone/bg-2.jpg");

const Home2SectionAbout = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/*<!-- ABOUT ONE SECTION START -->*/}
      <div className="section-full p-t80 p-b50 bg-white">
        <div className="about-section-two">
          <div className="container">
            <div className="section-content">
              <div
                className="row justify-content-center d-flex"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-drone-three">
                    <div className="about-drone-three-media">
                      <img src={bg1} alt="" />
                    </div>
                    <div className="about-drone-three-info">
                      <span>{t("home.target.title")}</span>
                      <strong
                        style={{
                          letterSpacing: i18n.language === "ar" ? "0px" : "5px",
                        }}
                      >
                        {t("home.target.mini")}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    {/*<!-- TITLE START-->*/}
                    <div
                      className={`${
                        i18n.language === "en" ? "left" : "right"
                      } wt-small-separator-outer`}
                    >
                      <div className="wt-small-separator site-text-primary">
                        <div className="sep-leaf-left"></div>
                        <div>{t("home.target.mini")}</div>
                        <div className="sep-leaf-right"></div>
                      </div>
                      <h2>{t("home.target.title")}</h2>
                      <p>{t("home.target.description")}</p>
                    </div>
                    {/*<!-- TITLE END-->*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ABOUT ONE SECTION END -->*/}
    </>
  );
};
export default Home2SectionAbout;
