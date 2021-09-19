import React from "react";

import { useSelector } from "react-redux";
import {
  startingPageSelector,
  endingPageSelector,
  getCurrentPage,
} from "./redux/pageSlice";

import StartingPage from "./components/StartingPage/StartingPage.component";
import TestRender from "./components/TestRender/TestRender.component";
import RedberryHeader from "./components/RedberryHeader/RedberryHeader.component";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons.component";
import EndingPage from "./components/EndingPage/EndingPage.component";
import "./App.scss";

const App = () => {
  const startingPage = useSelector(startingPageSelector);
  const endingPage = useSelector(endingPageSelector);
  const currentPage = useSelector(getCurrentPage);

  return (
    <div className="app-container">
      {startingPage ? (
        <StartingPage />
      ) : endingPage ? (
        <EndingPage />
      ) : (
        <div className={
          // currentPage === 4 ?"component-wrapper-overflow" :
          "component-wrapper" }>
          <RedberryHeader />
          <main className={currentPage === 4 ?"main-overflow" : "main"}>
            <TestRender />
          </main>
          <NavigationButtons />
        </div>
      )}
    </div>
  );
};

export default App;
