import React, { useState } from "react";

export default function Selection(props) {
  const [style, setStyle] = useState({ background: "" });
  const handleClick = () => {
    props.applyColor(setStyle);
  };
  return (
    <div className="fix-box" style={style} onClick={handleClick}>
      <h2 className="subheading"> Selection</h2>
    </div>
  );
}
