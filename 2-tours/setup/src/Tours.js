import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2> ours tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map(tours => {
            return <Tour key={tours.id} {...tours}></Tour>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
