import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSlider from "../../../../../data/ImagesLargeSlider";
import { useTranslation } from "react-i18next";

const NetworkExpansionGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full  p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSlider} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t(
                    "computerNetworkServices.mainServiceSection.networkExpansion.title"
                  )}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      إذا كنت تخطط لتوسيع شبكتك الحالية أو إضافة موقع جديد،
                      فسنساعدك في توسيع الشبكة بشكل سلس وفعال.
                    </p>
                    <p>
                      سنقوم بتحليل احتياجاتك وتوفير حلول مخصصة لتلبية متطلباتك
                      النامية.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      If you plan to expand your existing network or add a new
                      location, we will help you expand the network smoothly and
                      efficiently.
                    </p>
                    <p>
                      We will analyze your needs and provide customized
                      solutions to meet your growing requirements.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NetworkExpansionGallery;
