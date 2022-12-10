import React, { useState } from "react";
import "../CSS/Style.css";
const Progress = ({ done }) => {
  const [style, setstyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setstyle(newStyle);
  }, 100);
  return (
    <div className="progress">
      <div style={style} className='progress-done'>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
