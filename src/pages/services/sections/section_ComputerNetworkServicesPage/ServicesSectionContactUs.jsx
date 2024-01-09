import React from "react";
import { useTranslation } from "react-i18next";

var bg3 = require("../../../../assets/images/background/contact-us.jpg");

const ServicesSectionContactUs = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- VISION SECTION START --> */}
      <div
        className="section-full  p-t80 p-b80 overlay-wraper  bg-bottom-right bg-no-repeat"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="overlay-main bg-black opacity-07"></div>
        <div className="container">
          {/* <!-- TITLE START--> */}
          <div className="section-head center wt-small-separator-outer text-center text-white">
            <div className="wt-small-separator site-text-primary">
              <div className="sep-leaf-left"></div>
              <div className="text-white">{t("contactUs.title")}</div>
              <div className="sep-leaf-right"></div>
            </div>
            <h2>{t("contactUs.description")}</h2>
          </div>
          {/* <!-- TITLE END--> */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="home-contact-section p-a50">
                <form
                  className="cons-contact-form"
                  method="post"
                  action="form-handler2.php"
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder={t("contactUs.form.name")}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          required
                          placeholder={t("contactUs.form.email")}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          className="form-control"
                          required
                          placeholder={t("contactUs.form.phone")}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          required
                          placeholder={t("contactUs.form.subject")}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          rows="4"
                          placeholder={t("contactUs.form.message")}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="site-button site-btn-effect"
                      >
                        {t("contactUs.form.send")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- VISION SECTION END --> */}
    </>
  );
};
export default ServicesSectionContactUs;
