import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alter, setAlert] = useState(false);
  const bcg = rgb.join(","); //turn array to string

  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
