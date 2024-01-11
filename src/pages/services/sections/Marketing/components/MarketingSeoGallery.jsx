import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderMarketing from "../../../../../data/ImagesLargeSliderMarketing";
import { useTranslation } from "react-i18next";

const MarketingSeoGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderMarketing} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("marketing.mainServiceSection.seo.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      سنساعدك في زيادة ظهور موقعك الإلكتروني في نتائج محركات
                      البحث العالمية مثل جوجل.
                    </p>
                    <p>
                      سنقوم بتحسين هيكل الموقع والكلمات المفتاحية وإنشاء محتوى
                      مؤثر وملائم للعملاء المستهدفين.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We will help you increase the visibility of your website
                      in the results of global search engines such as Google.
                    </p>
                    <p>
                      We will improve the structure of the site and keywords and
                      create impactful and relevant content for your target
                      customers.
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
export default MarketingSeoGallery;
