import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderSmart from "../../../../../data/ImagesLargeSliderSmart";
import { useTranslation } from "react-i18next";

const SmartTemperatureGallery = (props) => {
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
                  {t("smart.mainServiceSection.temperatureControl.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      يمكنك ضبط الحرارة تلقائيًا وفقًا لجدولك اليومي أو التحكم
                      فيها عن بُعد لتحقيق الراحة القصوى وتوفير الطاقة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      You can intelligently adjust and control the temperature
                      in your home.
                    </p>
                    <p>
                      You can automatically adjust the heat according to your
                      daily schedule or control it remotely for maximum comfort
                      and energy savings.
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
export default SmartTemperatureGallery;
