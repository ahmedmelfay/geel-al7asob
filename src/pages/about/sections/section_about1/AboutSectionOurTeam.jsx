import React from "react";
import { Link } from "react-router-dom";
var pic1 = require("../../../../assets/images/team/pic1.jpg");
var pic2 = require("../../../../assets/images/team/pic2.jpg");
var pic3 = require("../../../../assets/images/team/pic3.jpg");

const AboutSectionOurTeam = (props) => {
  const data = [
    { title: "Wired and wireless computer network", link: "/" },
    { title: "Supply installation and maintenance of PABX", link: "/" },
    { title: "Smart Home Implementation", link: "/" },
    { title: "Digital Marketing", link: "/" },
    { title: "Programming", link: "/" },
    { title: "Supply and installation of surveillance cameras", link: "/" },
    { title: "Computer Maintenance", link: "/" },
  ];

  return (
    <>
      {/* <!-- OUR TEAM START -->*/}
      <div className="section-full p-t80 p-b50">
        <div className="container">
          {/* <!-- TITLE START-->*/}
          <div className="section-head center wt-small-separator-outer text-center">
            <h2>Our Services</h2>
          </div>
          {/* <!-- TITLE END-->*/}

          <div className="section-content quality-section-outer">
            <div className="container">
              <div className="quality-section-content">
                <div className="row justify-content-center">
                  {data.map((item) => (
                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="corner-line">
                        <div
                          className="wt-box d-icon-box-one bg-white shadow"
                          style={{ maxHeight: "310PX", height: "310px" }}
                        >
                          <div className="wt-icon-box-wraper m-b40">
                            <div className="icon-xl inline-icon">
                              <span className="icon-cell site-text-primary">
                                <i className="flaticon"></i>
                              </span>
                            </div>
                          </div>

                          <div className="d-icon-box-title title-style-2 site-text-secondry">
                            <h3 className="s-title-one">{item.title}</h3>
                          </div>

                          <div className="d-icon-box-content">
                            <Link
                              to={item.link}
                              className="site-button-link site-text-primary"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OUR TEAM SECTION END -->*/}
    </>
  );
};
export default AboutSectionOurTeam;
