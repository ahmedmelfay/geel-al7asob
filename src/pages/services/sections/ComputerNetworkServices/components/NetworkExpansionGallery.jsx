import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSlider from "../../../../../data/ImagesLargeSlider";
import { useTranslation } from "react-i18next";

const NetworkExpansionGallery = (props) => {
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
                    "computerNetworkServices.mainServiceSection.networkExpansion.title"
                  )}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      إذا كنت تخطط لتوسيع شبكتك الحالية أو إضافة موقع جديد،
                      فسنساعدك في توسيع الشبكة بشكل سلس وفعال.
                    </p>
                    <p>
                      سنقوم بتحليل احتياجاتك وتوفير حلول مخصصة لتلبية متطلباتك
                      النامية.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      If you plan to expand your existing network or add a new
                      location, we will help you expand the network smoothly and
                      efficiently.
                    </p>
                    <p>
                      We will analyze your needs and provide customized
                      solutions to meet your growing requirements.
                    </p>
                    <p>
                      We believe that wired and wireless networks are the
                      backbone of any computer system that relies on
                      communication and sharing between devices and users.
                    </p>
                    <p>
                      As Computer Generation Company, we understand the
                      importance of networking in facilitating workflows and
                      achieving seamless and reliable communication between
                      different components of the system.
                    </p>
                    <p>
                      Our dedicated and experienced team will provide the right
                      technological solutions to meet your needs. Whether you're
                      looking to set up a small home local network or a complex
                      enterprise network for large corporations, we use the
                      latest technology and industry standards to ensure high
                      performance and security.
                    </p>
                    <p>
                      We care about providing personalized and personalized
                      service to each client. Our team will work with you to
                      understand your needs and analyze your current environment
                      to design and implement an appropriate network. We take
                      care to provide seamless integration between different
                      devices and ensure easy management and operation.
                    </p>
                    <p>
                      In addition, we take care to provide excellent after-sales
                      service. We will provide you with the necessary technical
                      support and training on the use of the network, and we
                      will provide you with periodic maintenance plans to ensure
                      the continuity of the network and its optimal performance.
                    </p>
                    <p>
                      At Computer Generation Company, we work to achieve the
                      vision of our customers and meet their aspirations in the
                      field of wired and wireless networks. Based on our
                      experience and technical competence, we strive to provide
                      outstanding services that contribute to your success and
                      technological development.
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
export default NetworkExpansionGallery;
