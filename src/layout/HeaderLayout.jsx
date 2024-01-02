import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_white from "../assets/images/logo-white.png";
import logo_red from "../assets/images/logo-bg-dark.png";
import logo_black from "../assets/images/logo-dark.png";

import Navigation from "../pages/navigation/Navigation";
import MobileMenu from "../pages/navigation/MobileMenu";
import "../pages/navigation/Navbar.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const helmetContext = {};

const HeaderLayout = () => {
  const { t, i18n } = useTranslation();

  var [state, setState] = useState(false);
  var location = useLocation();
  const [enableMobileMenu, setEnableMenu] = useState(false);
  useEffect(() => {
    var loc = titleCase(location.pathname.replace("/", "")).trim();

    const handleScroll = () => {
      const offset = window.scrollY;

      const stickyheader = document.querySelector(".sticky-header ");

      if (offset >= 300) {
        stickyheader.classList.add("is-fixed");
        stickyheader.classList.add("color-fill");
      } else {
        stickyheader.classList.remove("is-fixed");
        stickyheader.classList.remove("color-fill");
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.updateTopMostParent = (logopath) => {
      this.setState({ logo: logopath });
    };

    loc === "Home3" ? setState(true) : setState(false);

    window.scrollTo(0, 0);
  }, [location]);

  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  function MyImage() {
    var imgRef = useRef(logo_white);
    var location = useLocation();
    var loc = titleCase(location.pathname.replace("/", "")).trim();
    loc = loc === "" ? (loc = "Home") : loc;
    imgRef.imgLogo =
      loc === ""
        ? logo_white
        : loc === "Home2"
        ? logo_red
        : loc === "Home3"
        ? logo_black
        : logo_white;
    useEffect((props) => {
      document.title = "Dronza Templete | " + loc + " Style";
    });
    return <img src={imgRef.imgLogo} alt="Dronza" />;
  }

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          {`
				<script  src="./assets/js/jquery-2.2.0.min.js"></script>
	
			
				<script  src="./assets/js/popper.min.js"></script>
				<script  src="./assets/js/bootstrap.min.js"></script>
				<script  src="./assets/js/bootstrap-select.min.js"></script>
				<script  src="./assets/js/magnific-popup.min.js"></script>
				<script  src="./assets/js/waypoints.min.js"></script>
				<script  src="./assets/js/waypoints-sticky.min.js"></script>
				<script  src="./assets/js/isotope.pkgd.min.js"></script>
				<script  src="./assets/js/owl.carousel.min.js"></script>
				<script  src="./assets/js/stellar.min.js"></script>
				<script  src="./assets/js/theia-sticky-sidebar.js"></script>
				<script  src="./assets/js/jquery.bootstrap-touchspin.js"></script>
				
				<script  src="./assets/js/custom.js" type="text/javascript"></script>
				
				<script  src="./assets/js/jquery.bgscroll.js"></script>

				<script src="./assets/js/jquery-ui.js"></script>
				<script  src="./assets/js/switcher.js"></script>
				`}
        </Helmet>
      </HelmetProvider>
      {/* <!-- HEADER START --> */}
      <header
        className={`site-header  header-style-4 mobile-sider-drawer-menu  ${
          enableMobileMenu ? " active " : ""
        } ${state ? " dark-menu " : ""}`}
      >
        <div className="sticky-header main-bar-wraper  navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              {/*<!-- SITE logo -->*/}
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link to="/" style={{ width: 100, display: "inline-block" }}>
                    <MyImage />
                  </Link>
                </div>
              </div>

              {/*<!-- NAV Toggle Button -->*/}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggler collapsed"
                onClick={() => setEnableMenu(!enableMobileMenu)}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first"></span>
                <span className="icon-bar icon-bar-two"></span>
                <span className="icon-bar icon-bar-three"></span>
              </button>

              <div className="extra-nav header-2-nav">
                <div className="extra-cell">
                  <button
                    className="header-nav-request"
                    style={{ background: "none", border: "none" }}
                    onClick={() =>
                      i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
                    }
                  >
                    {t("navigationMenu.language")}
                  </button>
                </div>
                <div className="extra-cell">
                  <a className="header-nav-request" href="tel:+966503560334">
                    (+966) 50-356-0334
                  </a>
                </div>
              </div>

              {/*<!-- SITE Navigation -->*/}

              <div className="main-menu-desktop-mode">
                <Navigation />
              </div>
              <div className="main-menu-mobile-mode">
                <div className="mobile-menu-area">
                  {enableMobileMenu && <MobileMenu />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER END --> */}
    </>
  );
};
export default HeaderLayout;
