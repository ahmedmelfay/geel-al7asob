import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderSmart from "../../../../../data/ImagesLargeSliderSmart";
import { useTranslation } from "react-i18next";

const SmartSecurityGallery = (props) => {
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
                  {t("smart.mainServiceSection.securityAndMonitoring.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      يمكنك مراقبة وتأمين منزلك عن بُعد من خلال نظام البيت
                      الذكي.
                    </p>
                    <p>
                      يمكنك مشاهدة كاميرات المراقبة وتنشيط أنظمة الإنذار وفتح
                      وإغلاق الأبواب بكل سهولة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      You can monitor and secure your home remotely through the
                      smart home system.
                    </p>
                    <p>
                      You can watch surveillance cameras, activate alarm
                      systems, and open and close doors with ease.
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
export default SmartSecurityGallery;
