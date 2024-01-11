import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/HealthProgramming/2.jpg");
var pic2 = require("../../../../../assets/images/HealthProgramming/3.jpg");
var pic3 = require("../../../../../assets/images/HealthProgramming/4.jpg");

const HealthProgrammingServices = (props) => {
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
                    <div>
                      {t("healthProgramming.allServiceSection.theBest")}
                    </div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("healthProgramming.allServiceSection.explore")}</h2>
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
                      {t("healthProgramming.allServiceSection.hospital")}
                    </h3>
                    <Link
                      to="his-hospital-program"
                      className={`${
                        i18n.language === "ar"
                          ? "site-button-link-right"
                          : "site-button-link"
                      } site-text-primary`}
                    >
                      {t("readMore")}
                    </Link>
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
                      {t("healthProgramming.allServiceSection.quality")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        نحن نولي أهمية كبيرة لجودة البرمجيات التي نقدمها. سنقوم
                        بإجراء اختبارات شاملة للتأكد من أن البرامج النهائية تعمل
                        بشكل صحيح وتلبي متطلباتك. سنقوم أيضًا بتوفير خدمات
                        الضمان والصيانة للحفاظ على استقرار وأداء البرامج على
                        المدى الطويل.
                      </p>
                    ) : (
                      <p>
                        We attach great importance to the quality of the
                        software we provide. We will conduct thorough tests to
                        ensure that the final programs are working properly and
                        meeting your requirements. We will also provide warranty
                        and maintenance services to maintain the stability and
                        performance of programs in the long term.
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
                      {t("healthProgramming.allServiceSection.training")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        نحن نقدم دعمًا فنيًا شاملاً للتأكد من استقرار وسلامة
                        البرامج التي نقدمها. سواء كانت لديك استفسارات تقنية أو
                        تحتاج إلى مساعدة في استخدام البرامج، فإن فريق الدعم
                        الفني لدينا متاح لمساعدتك. بالإضافة إلى ذلك، نقدم
                        تدريبًا مكثفًا لموظفيك لضمان تفهمهم الكامل للبرامج
                        والتطبيقات التي نقوم بتطويرها.
                      </p>
                    ) : (
                      <p>
                        We provide comprehensive technical support to ensure the
                        stability and integrity of the programs we offer.
                        Whether you have technical queries or need help using
                        the software, our technical support team is available to
                        help. In addition, we provide extensive training to your
                        employees to ensure they fully understand the software
                        and applications we develop.
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
                      At the computer generation, we believe that technology can
                      be a pivotal factor in the success of businesses.
                      Therefore, we are committed to providing innovative and
                      customized software solutions that fully meet your
                      business needs and help you achieve your business goals.
                    </p>
                    <p>
                      Contact us today to discuss your requirements and start
                      working on your software project.
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
export default HealthProgrammingServices;
