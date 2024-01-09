import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
var one = require("../../../../assets/images/blog/default/thumb/4.jpg");
var two = require("../../../../assets/images/blog/default/thumb/5.jpg");
var three = require("../../../../assets/images/blog/default/thumb/6.jpg");
var four = require("../../../../assets/images/blog/default/thumb/7.jpg");
var five = require("../../../../assets/images/blog/default/thumb/8.jpg");
var six = require("../../../../assets/images/blog/default/thumb/9.jpg");
var seven = require("../../../../assets/images/blog/default/thumb/10.jpg");

const Home4SectionOurBlog = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- OUR BLOG START -->*/}
      <div className="section-full  p-t80 p-b50   bg-gray">
        <div className="container">
          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-lg-12 col-md-12 wt-separator-two-part-left">
                {/* <!-- TITLE START-->*/}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div className="sep-leaf-left"></div>
                    <div>{t("home.services.mini")}</div>
                    <div className="sep-leaf-right"></div>
                  </div>
                  <h2>{t("home.services.title")}</h2>
                </div>
                {/* <!-- TITLE END-->*/}
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/computer-network-services">
                      <img src={one} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        {t("home.services.network")}
                      </h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link
                        to="/computer-network-services"
                        className="site-button-link black"
                      >
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/pabx">
                      <img src={two} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">{t("home.services.pabx")}</h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link to="/pabx" className="site-button-link black">
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/smart-home">
                      <img src={three} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">{t("home.services.home")}</h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link to="/smart-home" className="site-button-link black">
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/e-marketing">
                      <img src={four} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        {t("home.services.marketing")}
                      </h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link
                        to="/e-marketing"
                        className="site-button-link black"
                      >
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/programming">
                      <img src={five} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        {t("home.services.programming")}
                      </h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link
                        to="/programming"
                        className="site-button-link black"
                      >
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/surveillance-cameras">
                      <img src={six} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        {t("home.services.supply")}
                      </h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link
                        to="/surveillance-cameras"
                        className="site-button-link black"
                      >
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                {/* <!--Block one-->*/}
                <div className="blog-post blog-style-1">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <Link to="/computer-maintenance">
                      <img src={seven} alt="" />
                    </Link>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        {t("home.services.maintenance")}
                      </h3>
                    </div>
                    <div className="wt-post-readmore ">
                      <Link
                        to="/computer-maintenance"
                        className="site-button-link black"
                      >
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OUR BLOG END -->*/}
    </>
  );
};
export default Home4SectionOurBlog;
