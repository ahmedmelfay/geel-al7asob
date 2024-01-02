import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSlider from "../../../../../data/ImagesLargeSlider";
import { useTranslation } from "react-i18next";

const NetworkMaintenanceGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full  p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSlider} />

            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                <h3 className="wt-title">
                  {t(
                    "computerNetworkServices.mainServiceSection.maintenanceSupport.title"
                  )}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      سنقوم بإدارة ومراقبة الشبكة وتحديث البرامج والتعامل مع أي
                      مشاكل فنية تنشأ.
                    </p>
                    <p>نحن هنا لضمان استمرارية الشبكة وأدائها المثلى.</p>
                  </>
                ) : (
                  <>
                    <p>
                      After the network is installed, we will provide ongoing
                      maintenance and support services.
                    </p>
                    <p>
                      We will manage and monitor the network, update the
                      software and deal with any technical problems that arise.
                    </p>
                    <p>
                      We are here to ensure network continuity and optimal
                      performance.
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
export default NetworkMaintenanceGallery;
