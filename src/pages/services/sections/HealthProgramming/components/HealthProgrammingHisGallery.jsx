import React from "react";
import GalleryLargeSlider from "../../../../../common/gallery/GalleryLargeSlider";
import ImagesLargeSliderHealthProgramming from "../../../../../data/ImagesLargeSliderHealthProgramming";
import { useTranslation } from "react-i18next";

const HealthProgrammingHisGallery = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <!-- SERVICE DETAIL SECTION START --> */}
      <div className="section-full p-t80 p-b80">
        <div className="section-content">
          <div className="container">
            <GalleryLargeSlider Images={ImagesLargeSliderHealthProgramming} />

            <div
              className="wt-box services-etc m-b30"
              style={{
                textAlign: i18n.language === "ar" ? "right" : "left",
                direction: i18n.language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="wt-info">
                <h3 className="wt-title">
                  {t("healthProgramming.allServiceSection.hospital")}
                </h3>
                {i18n.language === "ar" ? (
                  <>
                    <p>تشمل خدماتنا في مجال برامج المستشفيات HIS ما يلي:</p>
                    <ul>
                      <li>تصميم وتطوير نظام المعلومات الصحية المخصص</li>
                      <li>تكامل الأنظمة والتوافق القياسي</li>
                      <li>إدارة السجلات الطبية الإلكترونية</li>
                      <li>إدارة الموارد البشرية والمالية</li>
                      <li>حماية البيانات وأمان المعلومات</li>
                      <li>تدريب ودعم مستمر</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Our services in the field of HIS hospital programs
                      include:
                    </p>
                    <h4>
                      Design and development of a custom health information
                      system
                    </h4>
                    <p>
                      We are developing a personalized health information system
                      that matches the needs of your hospital or health
                      facility. Whether you need to manage patient files and
                      medical history, schedule appointments, or track medical
                      inventory and medications, we offer tailor-made solutions
                      to meet your requirements and streamline your day-to-day
                      operations.
                    </p>
                    <h4>Systems integration and standard compatibility</h4>
                    <p>
                      We are working on integrating the health information
                      system with other systems within the hospital such as
                      laboratory system, medical imaging and pharmacy. We ensure
                      standard compliance with healthcare standards and legal
                      requirements, simplifying and improving the flow of
                      information and achieving comprehensive integration of the
                      health organization.
                    </p>
                    <h4>Electronic Medical Records Management</h4>
                    <p>
                      We provide solutions for electronic patient record
                      management, enabling easy and secure access to patient
                      history, medical reports and previous diagnoses. This
                      helps improve the accuracy of diagnosis and treatment and
                      saves time and effort in the medical process.
                    </p>
                    <h4>Human and Financial Resources Management</h4>
                    <p>
                      We also provide solutions for human and financial resource
                      management in the hospital. Whether you need a system to
                      manage schedules, salaries and bonuses, or a system to
                      manage billing, costs and finances, we provide integrated
                      tools to simplify resource management and improve
                      organizational efficiency.
                    </p>
                    <h4>Data Protection and Information Security</h4>
                    <p>
                      We attach great importance to maintaining the security and
                      confidentiality of medical information. We apply security
                      best practices and techniques to ensure sensitive data is
                      protected and cyber threats are prevented.
                    </p>
                    <h4>Ongoing training and support</h4>
                    <p>
                      We provide ongoing training and support services to your
                      teams at the hospital. Whether you need to train users to
                      use the new system, or get technical support and
                      troubleshooting, we have a dedicated team to help you
                      every step of the way.
                    </p>
                    <br />
                    <br />
                    <p>
                      We at Computer Generation are committed to providing high
                      quality and reliable software solutions for health
                      information systems in hospitals. Based on our previous
                      experience and expertise, we are ready to work with you to
                      develop and implement an integrated health information
                      system that meets your needs and contributes to improving
                      the quality of healthcare and the efficiency of the
                      organization.
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
export default HealthProgrammingHisGallery;
