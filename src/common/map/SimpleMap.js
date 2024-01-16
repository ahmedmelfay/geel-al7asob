/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
export default function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "460px", width: "100%", marginBottom: "0px" }}>
      <div
        style={{
          height: "460px",
          width: "100%",
          marginBottom: "0px",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3714.488775670502!2d39.789460999999996!3d21.410024999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI0JzM2LjEiTiAzOcKwNDcnMjIuMSJF!5e0!3m2!1sen!2seg!4v1705410394342!5m2!1sen!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
