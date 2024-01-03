import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderMarketing from "../../../../../data/ImagesLargeSliderMarketing";
import { useTranslation } from "react-i18next";

const MarketingSemGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderMarketing} />

            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("marketing.mainServiceSection.sem.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      سنقوم بتنفيذ حملات إعلانية مدفوعة على محركات البحث
                      العالمية مثل جوجل آدوردز.
                    </p>
                    <p>
                      سيتم تحسين الإعلانات لتحقيق أقصى قدر من النتائج وزيادة
                      عائد الاستثمار.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We will implement paid advertising campaigns on global
                      search engines such as Google Adwords.
                    </p>
                    <p>
                      Ads will be optimized for maximum results and increased
                      ROI.
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
export default MarketingSemGallery;
