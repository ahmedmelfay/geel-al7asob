import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderPabx from "../../../../../data/ImagesLargeSliderPabx";
import { useTranslation } from "react-i18next";

const PabxProgrammingGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full  p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderPabx} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("pabx.mainServiceSection.programming.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>سنقوم ببرمجة السنترالات وفقًا لاحتياجات عملك الفريدة.</p>
                    <p>
                      سنقوم بتهيئة الميزات وإعدادات الاتصال المخصصة، مثل القوائم
                      الصوتية التلقائية وتحويل المكالمات والبريد الصوتي، لضمان
                      تجربة اتصال سلسة ومنظمة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We will program PABX according to your unique business
                      needs.
                    </p>
                    <p>
                      We'll configure custom features and calling settings, such
                      as automatic voice menus, call forwarding, and voicemail,
                      to ensure a seamless and orderly communication experience.
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
export default PabxProgrammingGallery;
