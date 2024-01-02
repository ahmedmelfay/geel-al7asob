import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSlider from "../../../../../data/ImagesLargeSlider";
import { useTranslation } from "react-i18next";

const NetworkDesignGallery = (props) => {
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
                    "computerNetworkServices.mainServiceSection.networkDesign.title"
                  )}
                </h3>
                {i18n.language === "ar" ? (
                  <p>
                    سنقوم بتخطيط البنية التحتية واختيار التجهيزات المناسبة
                    لتحقيق أداء ممتاز وتوافق بين الأجهزة المختلفة.
                  </p>
                ) : (
                  <>
                    <p>
                      Whether you require a wired or wireless network, our
                      dedicated team has the expertise to analyze your needs and
                      design a dedicated network that meets your exact
                      requirements. We will plan the infrastructure and select
                      the right equipment to achieve excellent performance and
                      compatibility between different devices.
                    </p>

                    <p>
                      Installation and configuration of networks: Thanks to our
                      expertise in installation and configuration, we will
                      properly connect cables and install routers, switches and
                      other devices. We will ensure that the network runs
                      smoothly and efficiently, and we will adjust the necessary
                      settings to get the most out of the network.
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
export default NetworkDesignGallery;
