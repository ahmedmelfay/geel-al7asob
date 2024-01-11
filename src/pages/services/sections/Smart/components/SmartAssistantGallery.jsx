import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderSmart from "../../../../../data/ImagesLargeSliderSmart";
import { useTranslation } from "react-i18next";

const SmartAssistantGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderSmart} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("smart.mainServiceSection.personalAssistants.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <p>
                    يمكنك دمج البيت الذكي مع المساعدين الشخصيين مثل آليكسا من
                    أمازون أو غوغل هوم أو آبل هومبود للتحكم الصوتي في منزلك.
                  </p>
                ) : (
                  <p>
                    You can integrate smart home with personal assistants like
                    Amazon's Alexa, Google Home, or Apple HomePod to control
                    your home's voice.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmartAssistantGallery;
