import React, { useEffect, useState } from "react";
import axios from "axios";

import QuestionList from "./QList/QuestionList.jsx";
import QuestionPopUp from "./QList/QuestionPopUp.jsx";
import { productIdContext } from "./createContext.js";


const QA = () => {
  const [QpopUp, changeQpopUp] = useState(false);
  const togglePopUp = () => {
    changeQpopUp(!QpopUp);
  };

  return (
    <div id="parent">
      <h1 id="title"> QUESTIONS & ANSWERS</h1>
      <productIdContext.Provider value={38311}>
        {QpopUp && (
          <QuestionPopUp togglePopUp={togglePopUp} />
        ) }
          <div>
            <QuestionList togglePopUp={togglePopUp} />
          </div>

      </productIdContext.Provider>
    </div>
  );
};

export default QA;
