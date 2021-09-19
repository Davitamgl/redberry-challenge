import React from "react";
import { Radio } from "@material-ui/core";

const Question21 = ({ handleChange, checkedValue }) => {
  return (
    <div className="first-question-content">
      <p className="question-texts">გაქვს გადატანილი Covid-19?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapper">
          <div className="radio-label">
            <Radio
              name="userHadCovid"
              style={{ color: "#232323" }}
              className="material-radio"
              checked={checkedValue === "კი"}
              value="კი"
              onChange={handleChange}
            />
            <label className="input-label">კი</label> 
          </div>
        </div>

        <div className="radio-label-wrapper">
          <div className="radio-label">
            <Radio
              style={{ color: "#232323" }}
              className="material-radio"
              name="userHadCovid"
              checked={checkedValue === "არა"}
              value="არა"
              onChange={handleChange}
            />
            <label className="input-label">არა</label> 
          </div>
        </div>
        <div className="radio-label-wrapper">
          <div className="radio-label">
            <Radio
              style={{ color: "#232323" }}
              className="material-radio"
              name="userHadCovid"
              checked={checkedValue === "ახლა მაქვს"}
              value="ახლა მაქვს"
              onChange={handleChange}
            />
            <label className="input-label">ახლა მაქვს</label> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question21;
