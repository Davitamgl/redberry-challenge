import React from "react";
import { ReactComponent as RedBerryLogo } from "../../images/redberry.svg";
import "./RedberryHeader.styles.scss";

import { getCurrentPage } from "../../redux/pageSlice";
import { useSelector } from "react-redux";

const RedberryHeader = () => {
  const currentPage = useSelector(getCurrentPage);
  return (
    <div className="header-container">
      <div className="redberry-header">
        <span className="letter-container">
          <RedBerryLogo />
        </span>
        <span className="page-identifier">{currentPage}/4</span>
      </div>
      <div className="horizontal-line">
        <hr></hr>
      </div>
    </div>
  );
};

export default RedberryHeader;
