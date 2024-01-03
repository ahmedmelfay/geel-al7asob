import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderMarketing from "../../../../../data/ImagesLargeSliderMarketing";
import { useTranslation } from "react-i18next";

const MarketingAnalyticsGallery = (props) => {
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
                  {t("marketing.mainServiceSection.analytics.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      سنقوم بمراقبة وتحليل أداء حملات التسويق الإلكتروني وتقديم
                      تقارير مفصلة توضح النتائج والتحسينات المطلوبة.
                    </p>
                    <p>
                      ستمكنك هذه التقارير من قياس تأثير استراتيجيات التسويق
                      الخاصة بك واتخاذ القرارات المستنيرة للمستقبل.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We will monitor and analyze the performance of your
                      e-marketing campaigns and provide detailed reports showing
                      the required results and improvements.
                    </p>
                    <p>
                      These reports will enable you to measure the impact of
                      your marketing strategies and make informed decisions for
                      the future.
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
export default MarketingAnalyticsGallery;
