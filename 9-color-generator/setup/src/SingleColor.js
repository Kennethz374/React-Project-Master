import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alter, setAlert] = useState(false);
  const bcg = rgb.join(","); //turn array to string

  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
    </article>
  );
};

export default SingleColor;
