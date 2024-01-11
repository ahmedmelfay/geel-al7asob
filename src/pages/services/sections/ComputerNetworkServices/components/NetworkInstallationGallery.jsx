import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSlider from "../../../../../data/ImagesLargeSlider";
import { useTranslation } from "react-i18next";

const NetworkInstallationGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full  p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSlider} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t(
                    "computerNetworkServices.mainServiceSection.networkInstallationConfiguration.title"
                  )}
                </h3>

                <p>
                  بفضل خبرتنا في التثبيت والتكوين، سنقوم بتوصيل الكابلات وتركيب
                  الموجهات والمفاتيح والأجهزة الأخرى بشكل صحيح.
                </p>
                <p>
                  سنضمن أن الشبكة تعمل بشكل سلس وفعال، وسنقوم بضبط الإعدادات
                  اللازمة لتحقيق أقصى استفادة من الشبكة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NetworkInstallationGallery;
