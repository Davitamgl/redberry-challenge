import React from "react";
import { Radio } from "@material-ui/core";

const Question42 = ({ handleChange, checkedValue }) => {
  return (
    <div className="first-question-content">
      <p className="question-texts">
      კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <div className="inputs-container">
        <div className="radio-label-wrapperr">
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              className="material-radio"
              style={{ color: "#232323" }}
              value="zero"
              checked={checkedValue === "zero"}
              onChange={handleChange}
            />
            <label className="input-label">0</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="one"
              checked={checkedValue === "one"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">1</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="two"
              checked={checkedValue === "two"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">2</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="three"
              checked={checkedValue === "three"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">3</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="four"
              checked={checkedValue === "four"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">4</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="five"
              checked={checkedValue === "five"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">5</label> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question42;
