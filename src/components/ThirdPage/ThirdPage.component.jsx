import React from "react";
import "./ThirdPage.styles.scss";
import { ReactComponent as ThirdPageLogo } from "../../images/thirdPageLogo.svg";
import { Radio } from "@material-ui/core";

const ThirdPage = () => {
  return (
    <div className="third-page">
      <div className="third-page-components">
        <div className="first-question-content">
          <p className="question-texts">უკვე აცრილი ხარ?*</p>
          <div className="inputs-container">
            <div className="radio-label-wrapper">
              <div className="radio-label-wrapper">
                <Radio />
                <label className="input-label">კი</label> 
              </div>
              <div className="radio-label-wrapper">
                <Radio />
                <label className="input-label">არა</label> 
              </div>

              <input
                type="radio"
                name="userHadCovid"
                // checked={userInformation.userHadCovid === "yes"}
                value="yes"
                className="first-question-radios"
                // onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-container">
        <ThirdPageLogo className="third-page-logo" />
      </div>
    </div>
  );
};

export default ThirdPage;
