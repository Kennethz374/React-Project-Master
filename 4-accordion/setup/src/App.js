import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      {questions.map(question => {
        return (
          <p>
            {question.title}
            {question.info}
          </p>
        );
      })}
    </main>
  );
}

export default App;
