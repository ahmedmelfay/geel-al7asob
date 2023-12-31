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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.4615273436107!2d47.17921972390974!3d25.556307617060483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2de04d3f6df173%3A0xc9b8ec3c64a472bc!2z2LTYp9ix2Lkg2KfZhNiz2KrZitmGLi4g2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1704016706001!5m2!1sar!2seg"
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
