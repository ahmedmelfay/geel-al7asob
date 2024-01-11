import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderPabx from "../../../../../data/ImagesLargeSliderPabx";
import { useTranslation } from "react-i18next";

const PabxMaintenanceGallery = (props) => {
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
                  {t("pabx.mainServiceSection.maintenance.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      نحن نقدم خدمات الصيانة المنتظمة للسنترالات لضمان استمرارية
                      العمل السلس والمنتجية العالية.
                    </p>
                    <p>
                      سيقوم فريق الصيانة بمراجعة وفحص السنترالات بانتظام وإجراء
                      الإصلاحات اللازمة عند الحاجة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We provide regular PABX maintenance services to ensure
                      smooth business continuity and high productivity.
                    </p>
                    <p>
                      The maintenance team will regularly review and inspect the
                      exchanges and carry out the necessary repairs when needed.
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
export default PabxMaintenanceGallery;
