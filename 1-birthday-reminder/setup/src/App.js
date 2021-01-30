import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  return (
    <main>
      <section className="containter">
        <h3> 0 birthdays today</h3>
        <List />
        <button onClick={() => console.log("you click me")}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
