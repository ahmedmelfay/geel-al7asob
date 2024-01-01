import React from "react";
import { Link } from "react-router-dom";

var logolight = require("../../assets/images/logo-light.png");

const FooterPage = (props) => {
  return (
    <>
      {/*<!-- FOOTER START -->*/}
      <footer className="site-footer footer-large footer-dark text-white footer-style1">
        {/* <!--FOOTER BLOCKES START --> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget recent-posts-entry">
                  <h3 className="widget-title">Get in Touch</h3>
                  <ul className="widget_address">
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <a
                        style={{ color: "#999" }}
                        href="https://maps.app.goo.gl/g1QySQdK9ZHcp5U38"
                        target="_blank"
                        rel="noreferrer"
                      >
                        60th Street, Riyadh, KSA
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <a
                        style={{ color: "#999" }}
                        href="mailto:batayeb@Jeelalhasuop.com"
                      >
                        batayeb@Jeelalhasuop.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <a style={{ color: "#999" }} href="tel:+966503560334">
                        (+966) 50-356-0334
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget widget_services">
                  <h3 className="widget-title">Useful links</h3>
                  <ul>
                    <li>
                      <Link style={{ color: "#999" }} to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "#999" }} to="/contactus">
                        Contact Us
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/our-prices">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/our-team">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget widget_services">
                  <h3 className="widget-title">Contact Us</h3>
                  <ul>
                    <li>
                      <Link style={{ color: "#999" }} to="/contactus">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget widget_services">
                  <h3 className="widget-title">About Us</h3>
                  <ul>
                    <li>
                      <Link style={{ color: "#999" }} to="/about">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--FOOTER COPYRIGHT --> */}

        <div className="footer-middle">
          <div className="container">
            <div className="footer-middle-content">
              <div className="logo-footer" style={{ width: 100 }}>
                <Link to="/">
                  <img src={logolight} alt="" />
                </Link>
              </div>

              <ul className="copyrights-nav">
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="wt-footer-bot-left d-flex justify-content-center">
              <span className="copyrights-text">
                &copy; {new Date().getFullYear()} Geel AL-Hassob. Designed By
                <span className="site-text-primary"> Taliamedia</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--FOOTER END --> */}
    </>
  );
};
export default FooterPage;
