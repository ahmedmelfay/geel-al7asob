import React, { useEffect } from "react";

import Slider from "./slider/HomeSlider";
import HomeSectionAbout from "./sections/section_home1/HomeSectionAbout";
import Home2SectionHowItWork from "./sections/section_home2/Home2SectionHowItWork";
import Home2SectionAboutQuality from "./sections/section_home2/Home2SectionAboutQuality";
import Home2SectionAbout from "./sections/section_home2/Home2SectionAbout";
import Home4SectionOurBlog from "./sections/section_home4/Home4SectionOurBlog";
import { useTranslation } from "react-i18next";

const HomePage1 = (props) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = `${process.env.REACT_APP_PUBLIC_URL}/externaljs/js/rev-script-1.js`;
    script.async = true;

    document.body.appendChild(script);
    document.title =
      i18n.language === "ar" ? "الرئيسية | جيل الحاسوب" : "Hasoup | Home";

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <>
      <Slider />
      <Home2SectionHowItWork />
      <Home2SectionAboutQuality />
      <HomeSectionAbout />
      <Home2SectionAbout />
      <Home4SectionOurBlog />
    </>
  );
};
export default HomePage1;
