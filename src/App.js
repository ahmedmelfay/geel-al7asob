import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome/css/font-awesome.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/loader.min.css";
import "./assets/css/style.css";
import "./assets/css/flaticon.min.css";
//import './assets/css/skin/skin-1.css';
//import './assets/css/switcher.css';

import Loading from "./common/loading/Loading";
const HomeLayout = lazy(() => import("./layout/HomeLayout"));
const AboutLayout = lazy(() => import("./layout/AboutLayout"));
const ServicesLayout = lazy(() => import("./layout/ServicesLayout"));
const GalleryLayout = lazy(() => import("./layout/GalleryLayout"));
const PagesLayout = lazy(() => import("./layout/PagesLayout"));
const ShopLayout = lazy(() => import("./layout/ShopLayout"));
const BlogLayout = lazy(() => import("./layout/BlogLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page-wraper">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<HomeLayout />} />
            <Route exact path="/" element={<HomeLayout />} />
            <Route exact path="/home2" element={<HomeLayout />} />
            <Route exact path="/home3" element={<HomeLayout />} />
            <Route exact path="/home4" element={<HomeLayout />} />
            <Route exact path="/about" element={<AboutLayout />} />
            <Route exact path="/about2" element={<AboutLayout />} />
            {/* Computer Network Services */}
            <Route
              exact
              path="/computer-network-services"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/computer-network-services/network-design"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/computer-network-services/network-installation-and-configuration"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/computer-network-services/security-and-protection"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/computer-network-services/maintenance-and-support"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/computer-network-services/network-expansion"
              element={<ServicesLayout />}
            />
            {/* PABX */}
            <Route exact path="/pabx" element={<ServicesLayout />} />
            <Route
              exact
              path="/pabx/supply-of-pabx"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/pabx/pabx-installation"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/pabx/pabx-programming"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/pabx/pabx-maintenance"
              element={<ServicesLayout />}
            />
            {/* Smart */}
            <Route exact path="/smart-home" element={<ServicesLayout />} />
            <Route
              exact
              path="/smart-home/lighting-control"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/smart-home/security-and-monitoring"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/smart-home/temperature-control"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/smart-home/home-appliance-control"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/smart-home/compatibility-with-personal-assistants"
              element={<ServicesLayout />}
            />
            {/* Marketing */}
            <Route exact path="/e-marketing" element={<ServicesLayout />} />
            <Route
              exact
              path="/e-marketing/social-media-advertising"
              element={<ServicesLayout />}
            />
            <Route exact path="/e-marketing/seo" element={<ServicesLayout />} />
            <Route exact path="/e-marketing/sem" element={<ServicesLayout />} />
            <Route
              exact
              path="/e-marketing/content-management"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/e-marketing/analytics-and-reports"
              element={<ServicesLayout />}
            />
            {/* Programming */}
            <Route exact path="/programming" element={<ServicesLayout />} />
            <Route
              exact
              path="/programming/cloud-solutions-development-and-web-services"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/programming/development-of-business-administration-programs"
              element={<ServicesLayout />}
            />
            {/* AccProgramming */}
            <Route
              exact
              path="/accounting-programming"
              element={<ServicesLayout />}
            />
            {/* HealthProgramming */}
            <Route
              exact
              path="/health-programming"
              element={<ServicesLayout />}
            />
            <Route
              exact
              path="/health-programming/his-hospital-program"
              element={<ServicesLayout />}
            />
            {/* Cameras */}
            <Route
              exact
              path="/surveillance-cameras"
              element={<ServicesLayout />}
            />
            {/* Computer */}
            <Route
              exact
              path="/computer-maintenance"
              element={<ServicesLayout />}
            />
            <Route exact path="/services2" element={<ServicesLayout />} />
            <Route exact path="/services-detail" element={<ServicesLayout />} />
            <Route exact path="/gallery-grid" element={<GalleryLayout />} />
            <Route exact path="/gallery-masonry" element={<GalleryLayout />} />
            <Route exact path="/gallery-carousel" element={<GalleryLayout />} />
            <Route exact path="/gallery-detail" element={<GalleryLayout />} />
            <Route exact path="/icon-font" element={<PagesLayout />} />
            <Route exact path="/team" element={<PagesLayout />} />
            <Route exact path="/team-single" element={<PagesLayout />} />
            <Route exact path="/faq" element={<PagesLayout />} />
            <Route exact path="/contactus" element={<PagesLayout />} />
            <Route exact path="/product" element={<ShopLayout />} />
            <Route exact path="/product-detail" element={<ShopLayout />} />
            <Route exact path="/shopping-cart" element={<ShopLayout />} />
            <Route exact path="/checkout" element={<ShopLayout />} />
            <Route exact path="/wish-list" element={<ShopLayout />} />
            <Route exact path="/blog-grid" element={<BlogLayout />} />
            <Route exact path="/blog-list-sidebar" element={<BlogLayout />} />
            <Route
              exact
              path="/blog-post-right-sidebar"
              element={<BlogLayout />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
export default App;
