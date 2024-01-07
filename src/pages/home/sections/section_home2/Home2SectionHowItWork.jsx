import React from "react";
import { useTranslation } from "react-i18next";

var drone2 = require("../../../../assets/images/how-it-work/drone-4.png");

const Home2SectionHowItWork = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- HOW IT WORK SECTION START --> */}
      <div className="section-full p-t80 p-b50">
        <div className="container">
          {/* <!-- TITLE START--> */}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div className="sep-leaf-left"></div>
              <div>{t("home.quality.description")}</div>
              <div className="sep-leaf-right"></div>
            </div>
            <h2>{t("home.quality.title")}</h2>
          </div>
          {/* <!-- TITLE END--> */}

          <div className="section-content">
            <div className="row justify-content-center d-flex how-it-drone3">
              <div className="col-lg-4 col-md-12 m-b30 how-it-drone3-left">
                <div className="wt-box d-icon-box-two m-b40">
                  <div className="wt-icon-box-wraper right ">
                    <div className="icon-md inline-icon">
                      <span className="icon-cell site-text-secondry">
                        <i className="number-style">01</i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="d-icon-box-title title-style-2 site-text-secondry">
                        <h3 className="s-title-one">
                          {t("home.quality.maintenance")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wt-box d-icon-box-two m-b40">
                  <div className="wt-icon-box-wraper right">
                    <div className="icon-md inline-icon">
                      <span className="icon-cell site-text-secondry">
                        <i className="number-style">02</i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="d-icon-box-title title-style-2 site-text-secondry">
                        <h3 className="s-title-one">
                          {t("home.quality.installation")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wt-box d-icon-box-two m-b40">
                  <div className="wt-icon-box-wraper right">
                    <div className="icon-md inline-icon">
                      <span className="icon-cell site-text-secondry">
                        <i className="number-style">03</i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="d-icon-box-title title-style-2 site-text-secondry">
                        <h3 className="s-title-one">
                          {t("home.quality.deliveries")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 m-b30 how-it-drone2-outer">
                <div className="how-it-drone2-border">
                  <div className="how-it-drone2">
                    <div className="how-it-drone-media2">
                      <img src={drone2} alt="" className="wave-effects" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 m-b30 how-it-drone3-right">
                <div className="wt-box d-icon-box-two m-b40">
                  <div className="wt-icon-box-wraper left">
                    <div className="icon-md inline-icon">
                      <span className="icon-cell site-text-secondry">
                        <i className="number-style">04</i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="d-icon-box-title title-style-2 site-text-secondry">
                        <h3 className="s-title-one">
                          {t("home.quality.planning")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wt-box d-icon-box-two m-b40">
                  <div className="wt-icon-box-wraper left">
                    <div className="icon-md inline-icon">
                      <span className="icon-cell site-text-secondry">
                        <i className="number-style">05</i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="d-icon-box-title title-style-2 site-text-secondry">
                        <h3 className="s-title-one">
                          {t("home.quality.performance")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wt-box d-icon-box-two m-b40">
                  <div className="wt-icon-box-wraper left">
                    <div className="icon-md inline-icon">
                      <span className="icon-cell site-text-secondry">
                        <i className="number-style">06</i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="d-icon-box-title title-style-2 site-text-secondry">
                        <h3 className="s-title-one">
                          {t("home.quality.customerSatisfaction")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- HOW IT WORK  SECTION END --> */}
    </>
  );
};
export default Home2SectionHowItWork;
