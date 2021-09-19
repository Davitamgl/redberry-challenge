import React from "react";
import { Radio } from "@material-ui/core";

const Question31 = ({ handleChange, checkedValue }) => {
  return (
    <div className="first-question-content">
      <p className="question-texts">უკვე აცრილი ხარ?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapperr">
          <div className="radio-label">
            <Radio
              name="vaccinated"
              className="material-radio"
              style={{ color: "#232323" }}
              value="yes"
              checked={checkedValue === "yes"}
              onChange={handleChange}
            />
            <label className="input-label">კი</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="vaccinated"
              style={{ color: "#232323" }}
              value="no"
              checked={checkedValue === "no"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">არა</label> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question31;
