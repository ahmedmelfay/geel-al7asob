import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderProgramming from "../../../../../data/ImagesLargeSliderProgramming";
import { useTranslation } from "react-i18next";

const ProgrammingBusinessGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderProgramming} />

            <div className="wt-box services-etc m-b30">
              <div className="wt-info">
                <h3 className="wt-title">
                  {t(
                    "programming.allServiceSection.businessAdministration.title"
                  )}
                </h3>
                {i18n.language === "en" && (
                  <>
                    <p>
                      We provide customized software solutions to manage the
                      company's day-to-day operations.
                    </p>
                    <p>
                      Whether you are looking for an inventory management
                      system, accounting system, or data analytics tools, we
                      offer integrated solutions that meet exactly your needs.
                      Programs will be designed to streamline internal
                      processes, increase efficiency, and improve your business
                      outcomes.
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
export default ProgrammingBusinessGallery;
