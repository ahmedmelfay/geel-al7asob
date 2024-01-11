import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderSmart from "../../../../../data/ImagesLargeSliderSmart";
import { useTranslation } from "react-i18next";

const SmartLightingGallery = (props) => {
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
                  {t("smart.mainServiceSection.lightingControl.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      يمكنك التحكم في إضاءة منزلك بسهولة عبر هاتفك الذكي أو لوحة
                      التحكم المركزية.
                    </p>
                    <p>
                      يمكنك ضبط الإضاءة وتغيير الألوان وإنشاء أجواء مناسبة لكل
                      مناسبة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      You can easily control your home lighting via your
                      smartphone or central control panel.
                    </p>
                    <p>
                      You can adjust the lighting, change colors and create the
                      right atmosphere for every occasion.
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
export default SmartLightingGallery;
