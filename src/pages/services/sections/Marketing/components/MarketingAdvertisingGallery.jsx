import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderMarketing from "../../../../../data/ImagesLargeSliderMarketing";
import { useTranslation } from "react-i18next";

const MarketingAdvertisingGallery = (props) => {
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
                  {t("marketing.mainServiceSection.socialMedia.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <p>
                    نقدم خدمات إنشاء وتنفيذ حملات إعلانية متكاملة على منصات
                    التواصل الاجتماعي مثل فيسبوك، تويتر، إنستغرام ولينكد إن
                    ......الخ.
                  </p>
                ) : (
                  <>
                    <p>
                      We provide integrated advertising campaign creation and
                      implementation services on social media platforms such as
                      Facebook, Twitter, Instagram and LinkedIn.
                    </p>
                    <p>
                      We will analyze the target audience and develop an
                      appropriate marketing strategy to increase awareness and
                      generate more leads.
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
export default MarketingAdvertisingGallery;
