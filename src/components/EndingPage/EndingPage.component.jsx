import React from "react";

import { useDispatch } from "react-redux";
import {endStartPage} from "../../redux/pageSlice";

import { ReactComponent as Redberry } from "../../images/Vector1.svg";

import "./EndingPage.styles.scss";

const EndingPage = () => {

  const dispatch = useDispatch();



  const handleClick = () => {
    dispatch(endStartPage());
  };

  return (
    <div className="ending-page">
      <Redberry className="redberry-svg" />
      <div className="ending-text" onClick={handleClick}>
        <span>კითხვარის</span>
        <span>დაწყება</span>
      </div>
    </div>
  );
};
export default EndingPage;
