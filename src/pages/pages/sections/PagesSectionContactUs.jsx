import React from "react";
import SimpleMap from "../../../common/map/SimpleMap";
import { useTranslation } from "react-i18next";

const PagesSectionContactUs = (props) => {
  const { t, i18n } = useTranslation();
  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { username, email, phone, subject, message } = e.target.elements;

  //   let details = {
  //     username: username.value,
  //     email: email.value,
  //     phone: phone.value,
  //     subject: subject.value,
  //     message: message.value,
  //   };

  //   let response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/form-handler2.php`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });

  //   setStatus(status);
  //   let result = await response.json();
  //   alert(result.status);
  // };

  return (
    <>
      {/*<!-- SECTION CONTENTG START --> */}
      {/*<!-- GOOGLE MAP --> */}
      <div className="section-full bg-white p-t80">
        <div className="section-content">
          <div className="container">
            <div className="gmap-outline">
              <SimpleMap />
            </div>
          </div>
        </div>
      </div>

      {/*<!-- CONTACT FORM --> */}
      <div
        className="section-full  p-t80 p-b50 bg-cover"
        style={{
          backgroundImage: "url(/assets/images/background/bg-7.jpg)",
        }}
      >
        <div className="section-content">
          <div className="container">
            <div className="contact-one">
              {/*<!-- CONTACT FORM--> */}
              <div className="row d-flex justify-content-center flex-wrap">
                <div className="col-md-12 m-b30">
                  <div className="contact-info">
                    <div
                      className="contact-info-inner"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {/*<!-- TITLE START--> */}
                      <div
                        className="section-head left wt-small-separator-outer"
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                      >
                        <h3>{t("contactUs.fullInfo")}</h3>
                      </div>
                      {/*<!-- TITLE END--> */}

                      <div
                        className="contact-info-section"
                        style={{
                          backgroundImage:
                            "url(/assets/images/background/bg-map2.png)",
                        }}
                      >
                        <div className="wt-icon-box-wraper left m-b30">
                          <div className="icon-content">
                            <span className="m-t0">
                              {t("contactUs.form.email")}
                            </span>
                            <a
                              style={{ color: "#404040" }}
                              href="mailto:contact@Jeelalhasuop.com"
                            >
                              contact@Jeelalhasuop.com
                            </a>
                          </div>
                        </div>

                        {/* Address */}
                        {/* <div className="wt-icon-box-wraper left m-b30">
                          <div className="icon-content">
                            <span className="m-t0">
                              {t("contactUs.form.address")}
                            </span>
                            <a
                              style={{ color: "#404040" }}
                              href="https://maps.app.goo.gl/1ERZW931G2SBfDAT9"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t("contactUs.address")}
                            </a>
                          </div>
                        </div> */}

                        {/* Phones */}
                        <div className="wt-icon-box-wraper left m-b30">
                          <div className="icon-content">
                            <span className="m-t0">
                              {t("contactUs.form.phone")}
                            </span>
                            <a
                              className="d-block"
                              style={{ color: "#404040" }}
                              href="tel:0564040029"
                              target="_blank"
                              rel="noreferrer"
                            >
                              0564040029
                            </a>
                            <a
                              className="d-block"
                              style={{ color: "#404040" }}
                              href="tel:0508852443"
                              target="_blank"
                              rel="noreferrer"
                            >
                              0508852443
                            </a>
                          </div>
                        </div>

                        {/* <div className="wt-icon-box-wraper left">
                          <div className="icon-content">
                            <span className="m-t0">Opening Hours</span>
                            <ul className="list-unstyled m-b0">
                              <li>Mon-Fri: 9 am - 6 pm</li>
                              <li>Saturday: 9 am - 4 pm</li>
                              <li>Sunday: Closed</li>
                            </ul>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-6 m-b30">
                  <form
                    className="cons-contact-form"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                  
                    <div className="section-head left wt-small-separator-outer">
                      <h3>Get In Touch</h3>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Phone"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Subject"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="site-button site-btn-effect"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- SECTION CONTENTG END --> */}
    </>
  );
};
export default PagesSectionContactUs;
