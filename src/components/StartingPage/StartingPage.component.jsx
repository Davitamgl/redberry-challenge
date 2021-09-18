import React from "react";

import { useDispatch } from "react-redux";
import { endStartPage } from "../../redux/pageSlice";

import { ReactComponent as RedberryAnimation } from "../../images/Vector1.svg";

import "./StartingPage.styles.scss";

const StartingPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(endStartPage());
  };

  return (
    <div className="starting-page">
      <div className="animation-container">
        <RedberryAnimation className="redberry-svg" />
      </div>
      <div className="starting-text-container" onClick={handleClick}>
        <div className="starting-text">კითხვარის დაწყება</div>
      </div>
    </div>
  );
};
export default StartingPage;
