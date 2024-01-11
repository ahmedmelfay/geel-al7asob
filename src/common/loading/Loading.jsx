import React from "react";
import { useTranslation } from "react-i18next";

const Loading = (props) => {
  const { i18n } = useTranslation();

  return (
    <div className="loading-area">
      <div className="loading-box"></div>
      <div className="loading-pic">
        <div
          className={
            i18n.language === "ar" ? "cssload-loader-ar" : "cssload-loader"
          }
        ></div>
      </div>
    </div>
  );
};
export default Loading;
