import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderPabx from "../../../../../data/ImagesLargeSliderPabx";
import { useTranslation } from "react-i18next";

const PabxSupplyGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full  p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderPabx} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("pabx.mainServiceSection.supply.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      نقدم مجموعة متنوعة من السنترالات ذات الجودة العالية التي
                      تناسب احتياجات عملك.
                    </p>
                    <p>
                      سواء كنت تبحث عن سنترال صغير للشركات الناشئة أو سنترال
                      متقدمة للشركات الكبيرة، فإننا نقدم الحلول المناسبة لك.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We offer a variety of high-quality PABX to suit your
                      business needs.
                    </p>

                    <p>
                      Whether you are looking for a small central for startups
                      or an advanced central for large corporations, we have the
                      right solutions for you.
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
export default PabxSupplyGallery;
