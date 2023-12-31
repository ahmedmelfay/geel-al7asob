import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="panel wt-panel" style={{background:'none', listStyle:'none'}} key={content}>
      <div className="accordion-toggle acod-head  acc-actives" onClick={() => setIsActive(!isActive)}>
        <h3 className="acod-title">{heading}<span className="indicator">{isActive ? "-" : "+"}</span></h3>
      </div>
      {isActive && <div className="accordion-content acod-content">{content}</div>}
    </li>
  );
};

export default Accordion;