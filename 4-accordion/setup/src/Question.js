import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header>
        <h4>{title}</h4>
        {showInfo ? (
          <AiOutlineMinus
            className="btn"
            onClick={() => setShowInfo(!showInfo)}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="btn"
            onClick={() => setShowInfo(!showInfo)}
          ></AiOutlinePlus>
        )}
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
