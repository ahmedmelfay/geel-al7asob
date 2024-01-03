import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderSmart from "../../../../../data/ImagesLargeSliderSmart";
import { useTranslation } from "react-i18next";

const SmartApplianceGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderSmart} />

            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("smart.mainServiceSection.applianceControl.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      يمكنك التحكم في الأجهزة المنزلية الرئيسية مثل التلفزيونات
                      والمكيفات والأجهزة الصوتية عبر تقنية البيت الذكي.
                    </p>
                    <p>يمكنك تشغيل وإيقاف تشغيل الأجهزة وضبطها حسب تفضيلاتك.</p>
                  </>
                ) : (
                  <>
                    <p>
                      You can control major home appliances such as TVs, air
                      conditioners, and audio devices via smart home technology.
                    </p>
                    <p>
                      You can turn devices on and off and adjust them to your
                      preference.
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
export default SmartApplianceGallery;
