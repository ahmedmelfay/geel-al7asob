import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  useEffect((props) => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript(`${process.env.PUBLIC_URL}/externaljs/js/custom.js`);
  });

  return (
    <>
      {/*<!-- MAIN Vav -->*/}
      <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">{t("navigationMenu.home")}</Link>
          </li>

          <li>
            <Link to="/about">{t("navigationMenu.aboutUs")}</Link>
          </li>

          <li>
            <Link to="/contactus">{t("navigationMenu.contactUs")}</Link>
          </li>

          <li>
            <Link>{t("navigationMenu.services")}</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/computer-network-services">
                  {t("computerNetworkServices.title")}
                </Link>
              </li>
              <li>
                <Link to="/pabx">{t("pabx.title")}</Link>
              </li>
              <li>
                <Link to="/smart-home">{t("smart.title")}</Link>
              </li>
              <li>
                <Link to="/e-marketing">{t("marketing.title")}</Link>
              </li>
              <li>
                <Link to="/programming">{t("programming.title")}</Link>
              </li>
              <li>
                <Link to="/accounting-programming">
                  {t("accProgramming.title")}
                </Link>
              </li>
              <li>
                <Link to="/health-programming">
                  {t("healthProgramming.title")}
                </Link>
              </li>
              <li>
                <Link to="/services2">{t("service2.title")}</Link>
              </li>
              <li>
                <Link to="/services-detail">Services detail</Link>
              </li>
            </ul>
          </li>

          {/* <li>
            <Link>About</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/about">About 1</Link>
              </li>
              <li>
                <Link to="/about2">About 2</Link>
              </li>
            </ul>
          </li> 
          {/* <li>
            <Link>Gallery</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/gallery-grid">Gallery Grid</Link>
              </li>
              <li>
                <Link to="/gallery-masonry">Gallery Masonry</Link>
              </li>
              <li>
                <Link to="/gallery-carousel">Gallery Carousel</Link>
              </li>
              <li>
                <Link to="/gallery-detail">Gallery Detail</Link>
              </li>
            </ul>
          </li> 
          <li>
            <Link>Pages</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/icon-font">Icon Font</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/team-single">Team Single</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/error-404">Error 404</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Shop</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/product">Shop</Link>
              </li>
              <li>
                <Link to="/product-detail">Shop Detail</Link>
              </li>
              <li>
                <Link to="/shopping-cart">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/wish-list">Wishlist</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Blog</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/blog-grid">Blog Grid</Link>
              </li>
              <li>
                <Link to="/blog-list-sidebar">Blog List</Link>
              </li>
              <li>
                <Link to="/blog-post-right-sidebar">Blog Post</Link>
              </li>
            </ul>
          </li>*/}
        </ul>
      </div>
    </>
  );
};
export default Navigation;
