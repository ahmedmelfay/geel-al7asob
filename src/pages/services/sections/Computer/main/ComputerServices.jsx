import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Computer/2.jpg");
var pic2 = require("../../../../../assets/images/Computer/3.jpg");
var pic3 = require("../../../../../assets/images/Computer/4.jpg");
var pic4 = require("../../../../../assets/images/Computer/5.jpg");
var pic5 = require("../../../../../assets/images/Computer/6.jpg");

const ComputerServices = (props) => {
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
                      {t("computerMaintenance.allServiceSection.theBest")}
                    </div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("computerMaintenance.allServiceSection.explore")}</h2>
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
                      {t("computerMaintenance.allServiceSection.malfunctions")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        يعمل فريقنا المتخصص على تحديد وتشخيص الأعطال المختلفة
                        التي قد تواجهها في أجهزتك. سواء كانت مشكلة في الأجهزة
                        العتادية أو برامج الحاسوب، فإننا نستخدم المعدات والأدوات
                        المناسبة لإصلاح الأعطال واستعادة الأجهزة إلى حالتها
                        الأمثل.
                      </p>
                    ) : (
                      <p>
                        Our dedicated team identifies and diagnoses various
                        malfunctions you may encounter in your devices. Whether
                        it's a hardware or software issue, we use the right
                        equipment and tools to fix faults and restore devices to
                        their optimal state.
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
                      {t("computerMaintenance.allServiceSection.maintenance")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        نقدم خدمات صيانة دورية لأجهزتك للحفاظ على أدائها المثلى
                        والتخلص من أي مشاكل محتملة. سنقوم بتنظيف الأجهزة من
                        الأتربة والشوائب، وفحص المكونات الداخلية للتأكد من
                        سلامتها، وتطبيق التحديثات اللازمة للبرامج والأنظمة.
                      </p>
                    ) : (
                      <p>
                        We provide regular maintenance services for your devices
                        to maintain their optimal performance and eliminate any
                        potential problems. We will clean the devices from dust
                        and impurities, check the internal components for
                        safety, and apply the necessary software and systems
                        updates.
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
                      {t("computerMaintenance.allServiceSection.hardware")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        إذا كنت ترغب في تحسين أداء أجهزتك الحالية، فإننا نقدم
                        خدمات الترقية المناسبة. سنقوم بتحليل احتياجاتك وتوفير
                        القطع البديلة والتحديثات اللازمة لتحسين أداء الأجهزة
                        وزيادة قدرتها على مواجهة التحديات التقنية الحديثة.
                      </p>
                    ) : (
                      <p>
                        If you want to improve the performance of your existing
                        devices, we offer the right upgrade services. We will
                        analyze your needs and provide replacement parts and
                        updates to improve the performance of the devices and
                        increase their ability to meet modern technical
                        challenges.
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
                      {t("computerMaintenance.allServiceSection.recovery")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        إذا كنت تواجه مشكلة في فقدان البيانات أو حدوث عطل في
                        وحدة التخزين، فإن فريقنا المتخصص يمتلك الخبرة في استعادة
                        البيانات المفقودة وإصلاح وحدات التخزين المعطوبة. سنبذل
                        قصارى جهدنا لاستعادة البيانات الهامة بأعلى معدل نجاح
                        ممكن.
                      </p>
                    ) : (
                      <p>
                        If you are having a data loss issue or storage failure,
                        our dedicated team has experience in recovering lost
                        data and repairing damaged volumes. We will do our best
                        to recover important data with the highest possible
                        success rate.
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
                      {t("computerMaintenance.allServiceSection.consultations")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        إذا كنت تخطط لشراء أجهزة جديدة أو تحديث نظامك الحالي،
                        فإن فريقنا سيوفر لك الاستشارات اللازمة. سنقوم بتحليل
                        متطلباتك وتوفير الحلول المناسبة التي تلبي احتياجاتك
                        التقنية وتتناسب مع ميزانيتك.
                      </p>
                    ) : (
                      <p>
                        If you plan to purchase new hardware or update your
                        existing system, our team will provide you with the
                        necessary consultations. We will analyze your
                        requirements and provide the right solutions that meet
                        your technical needs and fit your budget.
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
                      We understand the importance of computers in your daily
                      life and in your work, and therefore we strive to provide
                      reliable and efficient maintenance services to ensure the
                      continuity of your business without interruption.
                    </p>
                    <p>
                      To contact us and inquire about our services, you can
                      visit our website or contact us by phone. Our dedicated
                      team will be happy to receive your inquiries and help you
                      solve any problem you may encounter with your devices.
                    </p>
                    <p>
                      Thank you for choosing Jill Computer Company, and we look
                      forward to serving you and meeting your needs in the field
                      of computer maintenance.
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
export default ComputerServices;
