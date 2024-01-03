import React from "react";
import { useTranslation } from "react-i18next";
var pic1 = require("../../../../../assets/images/ComputerNetworkServices/paragraph-section/1.jpg");
var pic2 = require("../../../../../assets/images/ComputerNetworkServices/paragraph-section/2.jpg");
var pic3 = require("../../../../../assets/images/ComputerNetworkServices/paragraph-section/3.jpg");

const NetworkParagraphAndImages = (props) => {
  const { t } = useTranslation();

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
                    <div>{t("computerNetworkServices.ourVision.title")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("computerNetworkServices.ourVision.description")}</h2>
                </div>
                {/*<!-- TITLE END--> */}
              </div>

              {/* <div className="col-lg-7 col-md-6 wt-separator-two-part-right text-left">
                <p>
                  We provide expert inspection services for your organization's
                  mission critical assets using drone technology.
                </p>
              </div> */}
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
                    <p>
                      We believe that wired and wireless networks are the
                      backbone of any computer system that relies on
                      communication and sharing between devices and users.
                    </p>
                    <p>
                      As Computer Generation Company, we understand the
                      importance of networking in facilitating workflows and
                      achieving seamless and reliable communication between
                      different components of the system.
                    </p>
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
                    <p>
                      Our dedicated and experienced team will provide the right
                      technological solutions to meet your needs. Whether you're
                      looking to set up a small home local network or a complex
                      enterprise network for large corporations, we use the
                      latest technology and industry standards to ensure high
                      performance and security.
                    </p>
                    <p>
                      We care about providing personalized and personalized
                      service to each client. Our team will work with you to
                      understand your needs and analyze your current environment
                      to design and implement an appropriate network. We take
                      care to provide seamless integration between different
                      devices and ensure easy management and operation.
                    </p>
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
                    <p>
                      In addition, we take care to provide excellent after-sales
                      service. We will provide you with the necessary technical
                      support and training on the use of the network, and we
                      will provide you with periodic maintenance plans to ensure
                      the continuity of the network and its optimal performance.
                    </p>
                    <p>
                      At Computer Generation Company, we work to achieve the
                      vision of our customers and meet their aspirations in the
                      field of wired and wireless networks. Based on our
                      experience and technical competence, we strive to provide
                      outstanding services that contribute to your success and
                      technological development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ALL SERVICES SECTION END --> */}
    </>
  );
};
export default NetworkParagraphAndImages;
