import React from "react";
// import { Link } from "react-router-dom";
var untitled1 = require("../../../../assets/images/about-drone/7asob.jpeg");
const AboutSectionAbout = (props) => {
  return (
    <>
      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="about-section-one">
          <div className="container">
            <div className="section-content">
              <div className="row justify-content-center d-flex">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div>
                    <div>
                      <img src={untitled1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    <div className="left wt-small-separator-outer">
                      <h2>
                        We seek to harmonize the quality and professionalism of
                        the services we provide
                      </h2>
                      <p>
                        Computer Generation Foundation, was established in
                        (2022) AD, and we seek to gain preference and excellence
                        among companies in providing service with high quality,
                        integrity in dealing with all, and customer trust.
                      </p>
                    </div>

                    <ul className="site-list-style-one icon-style">
                      <li>
                        <i className="flaticon-drone-7"></i>Maintenance and
                        repair operations.
                      </li>
                      <li>
                        <i className="flaticon-remote-control-1"></i>
                        Installation and commissioning operations.
                      </li>
                      <li>
                        <i className="flaticon-control"></i>Deliveries
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center d-flex">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-section-one-right">
                    <div className="left wt-small-separator-outer">
                      <h2>
                        We aspire to be the best in the field in the local
                        market
                      </h2>
                      <p>
                        Our mission lies in harmonizing and spreading the
                        culture of quality in its true concept in the field of
                        computer and technology in the Kingdom of Saudi Arabia,
                        in order to create real competition between all
                        institutions and companies that provide the same
                        service, whether they are large institutions and
                        companies or start-ups, and this message that we adopt
                        is in order to provide the best services at appropriate
                        costs.
                      </p>
                    </div>
                    <ul className="site-list-style-one icon-style">
                      <li>
                        <i className="flaticon-drone-7"></i>Planning and
                        construction operations
                      </li>
                      <li>
                        <i className="flaticon-remote-control-1"></i>How the
                        performance indicator works for all employees
                      </li>
                      <li>
                        <i className="flaticon-control"></i>Measuring customer
                        satisfaction
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="about-drone-one">
                    <div className="about-drone-one-media">
                      <img src={untitled1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutSectionAbout;
