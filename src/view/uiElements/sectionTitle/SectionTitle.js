import React from "react";
import "./sectionTitle.css";
const SectionTitle = ({ title, color }) => {
  return (
    <div>
      <h1 className="section_title" style={{ color }}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
