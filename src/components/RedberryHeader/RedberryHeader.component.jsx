import React from "react";
import { ReactComponent as RedBerryLogo } from "../../images/redberry.svg";
import "./RedberryHeader.styles.scss";

const RedberryHeader = () => {
  return (
    <div className="header-container">
      <div className="redberry-header">
        <span className="letter-container">
          <RedBerryLogo />
        </span>
        <span className="page-identifier">1/4</span>
      </div>
      <div className="horizontal-line">
        <hr></hr>
      </div>
    </div>
  );
};

export default RedberryHeader;
