import React from "react";
import rectangle2 from "images/rectangle-2-2.png";
import "stylesheets/main.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <img className="rectangle" alt="Rectangle" src={rectangle2} />

      <div className="div" />

      <div className="text-wrapper">[tnt]</div>

      <div className="text-wrapper-2">Coming [soon]</div>

      <p className="p">(I suck at design so give me a bit, ok?)</p>
    </div>
  );
};
