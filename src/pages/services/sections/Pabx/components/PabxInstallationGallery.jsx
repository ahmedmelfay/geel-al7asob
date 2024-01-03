import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderPabx from "../../../../../data/ImagesLargeSliderPabx";
import { useTranslation } from "react-i18next";

const PabxInstallationGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full  p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderPabx} />

            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("pabx.mainServiceSection.installation.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      يعتبر تركيب السنترالات عملية حساسة ومعقدة، ولكن لا داعي
                      للقلق.
                    </p>
                    <p>
                      فريقنا المتخصص من الفنيين لديه الخبرة الواسعة في تركيب
                      السنترالات بشكل صحيح وموثوق.
                    </p>
                    <p>
                      سنتأكد من أن السنترالات تعمل بكفاءة عالية وتلبي توقعاتك.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      PABX installation is a delicate and complex process, but
                      you don't have to worry.
                    </p>
                    <p>
                      Our dedicated team of technicians has extensive experience
                      in installing PABX correctly and reliably.
                    </p>
                    <p>
                      We will make sure that the exchanges operate with high
                      efficiency and meet your expectations.
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
export default PabxInstallationGallery;
