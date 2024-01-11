import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderMarketing from "../../../../../data/ImagesLargeSliderMarketing";
import { useTranslation } from "react-i18next";

const MarketingManagementGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderMarketing} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("marketing.mainServiceSection.contentManagement.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      سنقوم بإنشاء وإدارة محتوى ذو جودة عالية يستهدف الجمهور
                      المستهدف ويعزز تفاعل العملاء.
                    </p>
                    <p>
                      سنقدم استراتيجيات المحتوى المبتكرة وإنتاج المقالات
                      والمدونات والصور والفيديوهات التي تلفت انتباه العملاء
                      المحتملين.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We will create and manage quality content that targets the
                      target audience and enhances customer engagement.
                    </p>
                    <p>
                      We will introduce innovative content strategies and
                      produce articles, blogs, images and videos that catch the
                      attention of potential customers.
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
export default MarketingManagementGallery;
