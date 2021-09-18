import React from "react";

import { useSelector } from "react-redux";
import { startingPageSelector, endingPageSelector } from "./redux/pageSlice";
import StartingPage from "./components/StartingPage/StartingPage.component";
import TestRender from "./components/TestRender/TestRender.component";

import "./App.scss";
import RedberryHeader from "./components/RedberryHeader/RedberryHeader.component";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons.component";
import EndingPage from "./components/EndingPage/EndingPage.component";

const App = () => {
  const startingPage = useSelector(startingPageSelector);
  const endingPage = useSelector(endingPageSelector);

  return (
    <div className="app-container">
      {startingPage ? (
        <StartingPage />
      ) : endingPage ? (
        <EndingPage />
      ) : (
        <div className="component-wrapper">
          <RedberryHeader />
          <main className="main">
            <TestRender />
          </main>
          <NavigationButtons />
        </div>
      )}
    </div>
  );
};

export default App;
