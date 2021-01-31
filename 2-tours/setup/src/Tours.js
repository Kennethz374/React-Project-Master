import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2> ours tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map(tours => {
            return (
              <Tour key={tours.id} {...tours} removeTour={removeTour}></Tour>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
