import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/Cameras/2.jpg");
var pic2 = require("../../../../../assets/images/Cameras/3.jpg");
var pic3 = require("../../../../../assets/images/Cameras/4.jpg");
var pic4 = require("../../../../../assets/images/Cameras/5.jpg");
var pic5 = require("../../../../../assets/images/Cameras/6.jpg");

const CamerasServices = (props) => {
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
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div className="sep-leaf-left"></div>
                    <div>{t("cameras.allServiceSection.theBest")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("cameras.allServiceSection.explore")}</h2>
                </div>
                {/*<!-- TITLE END--> */}
              </div>
            </div>
          </div>

          {/*<!-- TITLE END--> */}

          <div className="section-content">
            <div className="services-style-two">
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("cameras.allServiceSection.consulting")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        نحن نقدم استشارات متخصصة لتحديد احتياجاتك في مجال
                        المراقبة وتصميم نظام مراقبة مخصص يناسب متطلباتك الفردية.
                        سنقوم بتقييم المساحة والمخاطر المحتملة وتحديد الأماكن
                        الحيوية التي يجب مراقبتها، واقتراح الحلول المناسبة
                        لتلبية احتياجاتك.
                      </p>
                    ) : (
                      <p>
                        We provide specialized consulting to identify your
                        surveillance needs and design a customized monitoring
                        system to suit your individual requirements. We will
                        assess the space and potential risks, identify vital
                        places to monitor, and propose appropriate solutions to
                        meet your needs.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("cameras.allServiceSection.monitoring")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <>
                        <p>
                          نحن نعمل مع العلامات التجارية الموثوقة والمعروفة
                          لتوريد أحدث تقنيات كاميرات المراقبة.
                        </p>
                        <p>
                          سواء كنت بحاجة إلى كاميرات مراقبة داخلية أو خارجية، أو
                          كاميرات ثابتة أو قابلة للتحريك، فإننا نقدم مجموعة
                          واسعة من الخيارات لتناسب احتياجاتك وميزانيتك.
                        </p>
                      </>
                    ) : (
                      <p>
                        We work with reliable and well-known suppliers to supply
                        the latest surveillance camera technology. Whether you
                        need indoor or outdoor surveillance cameras, fixed or
                        movable cameras, we offer a wide range of options to
                        suit your needs and budget.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic3} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("cameras.allServiceSection.configuration")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        يقوم فريقنا المتخصص بتركيب وتكوين النظام بدقة واحترافية.
                        سنقوم بتوصيل الكاميرات وتجهيز الأسلاك وتكوين الأجهزة
                        والبرامج المرافقة. سنضمن أن يتم تركيب الكاميرات في
                        المواقع المثلى لتحقيق أقصى تغطية وكفاءة في المراقبة.
                      </p>
                    ) : (
                      <p>
                        Our dedicated team installs and configures the system
                        accurately and professionally. We will connect cameras,
                        equip wiring, configure accompanying hardware and
                        software. We will ensure that cameras are installed in
                        optimal locations for maximum coverage and efficient
                        surveillance.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic4} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("cameras.allServiceSection.training")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        سنقوم بتكوين البرمجيات المرافقة لنظام المراقبة وضبطها
                        وفقًا لمتطلباتك. كما سنوفر التدريب اللازم لك ولفريقك
                        لضمان الاستفادة الكاملة من النظام وفهم الوظائف والتحكم
                        فيه بكفاءة.
                      </p>
                    ) : (
                      <p>
                        We will configure the software accompanying the
                        monitoring system and adjust it according to your
                        requirements. We will also provide the necessary
                        training for you and your team to ensure that you take
                        full advantage of the system and efficiently understand
                        and control functions.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12">
                  <div className="wt-media our-story-pic">
                    <img src={pic5} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service-style2-detail">
                    <h3 className="wt-title">
                      {t("cameras.allServiceSection.support")}
                    </h3>
                    {i18n.language === "ar" ? (
                      <p>
                        نحن نقدم دعمًا فنيًا شاملاً وصيانة مستمرة لنظام المراقبة
                        الخاص بك. سنكون متاحين للإجابة على أي استفسارات تقنية
                        ومساعدتك في حل المشاكل التي قد تواجهها. سنقوم أيضًا
                        بتطوير وتحديث النظام بمرور الوقت لضمان عمله بكفاءة عالية
                        وفقًا لاحتياجاتك المتغيرة.
                      </p>
                    ) : (
                      <p>
                        We provide comprehensive technical support and ongoing
                        maintenance of your monitoring system. We will be
                        available to answer any technical queries and help you
                        solve problems you may encounter. We will also develop
                        and update the system over time to ensure it works
                        efficiently according to your changing needs.
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
                      At Computer Generation Company, we are keen to provide
                      comprehensive monitoring solutions that meet your needs
                      and provide you with safety and comfort. We believe in the
                      importance of quality and reliability, and strive to
                      achieve your complete satisfaction as a customer.
                    </p>
                    <p>
                      For a free consultation or more information about our
                      services, you can contact us by phone or visit our
                      website. Our team will be ready to answer all your
                      inquiries and help you meet your needs in the field of
                      supplying and installing surveillance cameras.
                    </p>
                    <p>
                      Thank you for choosing Jeel Computer. We look forward to
                      serving you and providing the best solutions to meet your
                      needs in the field of surveillance and security.
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
export default CamerasServices;
