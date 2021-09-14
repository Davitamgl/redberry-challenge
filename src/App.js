import React from "react";

import { useSelector } from "react-redux";
import {  startingPageSelector } from "./redux/pageSlice";
import StartingPage from "./components/StartingPage/StartingPage.component";
import TestRender from "./components/TestRender/TestRender.component";

import "./App.scss";
import RedberryHeader from "./components/RedberryHeader/RedberryHeader.component";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons.component";

const App = () => {
  const startingPage = useSelector(startingPageSelector);

  return (
    <div className="app-container">
      {startingPage ? (
        <StartingPage />
      ) : (
        <div className="component-wrapper">
          <RedberryHeader />,
          <TestRender />
          <NavigationButtons />
        </div>
      )}
    </div>
  );
};

export default App;
