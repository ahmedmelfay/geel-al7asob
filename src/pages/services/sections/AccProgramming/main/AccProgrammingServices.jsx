import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/AccProgramming/2.jpg");
var pic2 = require("../../../../../assets/images/AccProgramming/3.jpg");
var pic3 = require("../../../../../assets/images/AccProgramming/4.jpg");
var pic4 = require("../../../../../assets/images/AccProgramming/5.jpg");
var pic5 = require("../../../../../assets/images/AccProgramming/6.jpg");

const AccProgrammingServices = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/*<!-- ALL SERVICES START --> */}
      <div className="section-full p-t80 p-b80 bg-white">
        <div className="container">
          {/*<!-- TITLE START--> */}

          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-lg-12 col-md-12 wt-separator-two-part-left">
                {/*<!-- TITLE START--> */}
                <div
                  className={`${
                    i18n.language === "en" ? "left" : "right"
                  } section-head wt-small-separator-outer`}
                >
                  <div
                    className="wt-small-separator site-text-primary"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    <div className="sep-leaf-left"></div>
                    <div>{t("accProgramming.allServiceSection.theBest")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("accProgramming.allServiceSection.explore")}</h2>
                </div>
                {/*<!-- TITLE END--> */}
              </div>
            </div>
          </div>

          {/*<!-- TITLE END--> */}

          <div className="section-content">
            <div className="services-style-two">
              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("accProgramming.allServiceSection.custom")}
                    </h3>
                    {i18n.language === "en" && (
                      <p>
                        We develop custom accounting software that suits your
                        company's unique needs. Whether you need to manage
                        general accounts, accounts receivable and payable,
                        financial reporting and budgeting, or payroll
                        management, we offer tailor-made solutions to facilitate
                        your accounting processes and improve financial
                        efficiency.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("accProgramming.allServiceSection.integration")}
                    </h3>
                    {i18n.language === "en" && (
                      <p>
                        We integrate the accounting system with other systems
                        within your company such as inventory management system
                        and procurement management system. We ensure standard
                        compliance with International Accounting Standards and
                        legal requirements, helping to streamline and optimize
                        the flow of information and achieve comprehensive
                        integration of financial operations.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic3} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("accProgramming.allServiceSection.reporting")}
                    </h3>
                    {i18n.language === "en" && (
                      <p>
                        We provide tools and features for account management and
                        financial reporting in a simplified and efficient
                        manner. You can track revenues and expenses, analyze
                        profits and losses, and prepare monthly and annual
                        financial reports easily and accurately.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic4} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("accProgramming.allServiceSection.budget")}
                    </h3>
                    {i18n.language === "en" && (
                      <p>
                        We provide tools for managing budgets and financial
                        planning, allowing you to set financial goals and
                        monitor expenditures and investments. You can create a
                        custom budget, track the company's financial
                        performance, and make strategic decisions based on
                        financial analytics.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="row no-gutters"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
              >
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic5} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("accProgramming.allServiceSection.security")}
                    </h3>
                    {i18n.language === "en" && (
                      <p>
                        We ensure the safety and security of your financial
                        statements. We use continuous protection technologies
                        and follow strict security practices to protect your
                        information from unauthorized access.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ALL SERVICES SECTION END --> */}

      {i18n.language === "en" && (
        <div className="section-full p-t20 p-b80">
          <div className="section-content">
            <div className="container">
              <div className="wt-box services-etc m-b30">
                <div className="wt-info">
                  <>
                    <p>
                      Our dedicated team of developers and accountants has
                      extensive experience in the field of accounting software.
                      We always strive to provide innovative and reliable
                      solutions that help you improve your business efficiency
                      and make sound financial decisions.
                    </p>
                    <p>
                      If you are looking for a company that provides integrated
                      solutions in the field of accounting software, Computer
                      Generation is the ideal choice.
                    </p>
                    <p>
                      Contact us today to discuss your needs and start
                      developing a customized solution that meets your
                      expectations and helps you achieve your financial success.
                    </p>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AccProgrammingServices;
