import React from "react";

import { useDispatch } from "react-redux";
import {endStartPage} from "../../redux/pageSlice";

import { ReactComponent as Redberry } from "../../images/Vector1.svg";

import "./StartingPage.styles.scss";

const StartingPage = () => {

  const dispatch = useDispatch();



  const handleClick = () => {
    dispatch(endStartPage());
  };

  return (
    <div className="starting-page">
      <Redberry className="redberry-svg" />
      <div className="starting-text" onClick={handleClick}>
        <span>კითხვარის</span>
        <span>დაწყება</span>
      </div>
    </div>
  );
};
export default StartingPage;
