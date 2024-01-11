import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSlider from "../../../../../data/ImagesLargeSlider";
import { useTranslation } from "react-i18next";

const NetworkSecurityGallery = (props) => {
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
                    "computerNetworkServices.mainServiceSection.securityProtection.title"
                  )}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      سنقوم بتنفيذ تدابير الأمان المناسبة لحماية بياناتك
                      ومعلوماتك الحساسة.
                    </p>
                    <p>
                      سنقوم بتكوين جدران الحماية وتشفير الشبكة وتطبيق إجراءات
                      المصادقة للحماية من التهديدات الخارجية.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We understand the importance of security in networks, so
                      we will implement appropriate security measures to protect
                      your sensitive data and information.
                    </p>

                    <p>
                      We will configure firewalls, network encryption, and apply
                      authentication procedures to protect against external
                      threats.
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
export default NetworkSecurityGallery;
