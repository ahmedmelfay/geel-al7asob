import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderProgramming from "../../../../../data/ImagesLargeSliderProgramming";
import { useTranslation } from "react-i18next";

const ProgrammingCloudGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderProgramming} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("programming.allServiceSection.cloud.title")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      نحن نساعدك في استغلال قوة الحوسبة السحابية وتطوير تطبيقات
                      وخدمات ويب فعالة.
                    </p>
                    <p>
                      تشمل خدماتنا في مجال تصميم المواقع الإلكترونية ما يلي:
                    </p>
                    <ul>
                      <li>تحليل احتياجاتك وتصميم مخصص</li>
                      <li>واجهة مستخدم جذابة وتجربة ممتعة</li>
                      <li>تطوير مواقع الكترونية متقدمة</li>
                      <li>تحسين محركات البحث (SEO)</li>
                      <li>التكامل مع وسائل التواصل الاجتماعي</li>
                      <li>الدعم الفني وصيانة الموقع</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      We help you harness the power of cloud computing and
                      develop effective web applications and services. Whether
                      you want to develop cutting-edge cloud applications or
                      integrate cloud services into your business, we'll work
                      with you to provide the right technology solutions that
                      meet your needs and enhance your competitiveness in the
                      market.
                    </p>
                    <p>Our web design services include:</p>
                    <h4>Analysis of your needs and custom design</h4>
                    <p>
                      We start by understanding your unique vision, goals, and
                      requirements. We will work with you to analyze your needs
                      and design a personalized website that reflects your brand
                      identity and ensures a distinctive user experience. We'll
                      ensure a responsive design that is compatible with all
                      different devices and displays, including smartphones,
                      tablets and desktops.
                    </p>
                    <h4>Attractive user interface and enjoyable experience</h4>
                    <p>
                      We know that user experience is a critical factor for
                      website success. Therefore, we will design an attractive
                      and simple user interface that allows visitors to interact
                      easily and have a pleasant browsing experience. We will
                      coordinate the content and images harmoniously, and
                      facilitate navigation by effectively organizing the
                      structure of the site.
                    </p>
                    <h4>Advanced Website Development</h4>
                    <p>
                      We will use the latest technology and tools to develop
                      your website. We will program and code the site in a clean
                      and organized manner, with attention to improving the
                      site's performance and loading speed. We will integrate
                      advanced features such as contact forms, CMS, and
                      e-commerce if necessary, to enhance the functionality of
                      the site and achieve your business goals.
                    </p>
                    <h4>Search Engine Optimization (SEO)</h4>
                    <p>
                      We believe in the importance of your site appearing in
                      search engine results. We will optimize your site for
                      search engines (SEO) by targeting important keywords and
                      improving site structure and other ranking factors. We
                      will help you increase your site's visibility and attract
                      more target visitors.
                    </p>
                    <h4>Social Media Integration</h4>
                    <p>
                      We will help you strengthen your social media presence by
                      integrating the website with your social accounts. We'll
                      embed social links and share content on your site,
                      boosting engagement and spreading your brand name.
                    </p>
                    <h4>Technical support and site maintenance</h4>
                    <p>
                      After the launch of the site, we will provide you with the
                      necessary technical support to ensure that the site
                      continues to operate efficiently. We will also provide
                      periodic maintenance services to update content, monitor
                      site performance, and fix any technical issues that may
                      arise.
                    </p>
                    <br />
                    <br />
                    <p>
                      At Computer Generation, we are committed to providing
                      outstanding web design solutions that meet your
                      aspirations and achieve your business goals. Contact us
                      today to start your website design journey and turn your
                      vision into an attention-grabbing digital reality.
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
export default ProgrammingCloudGallery;
