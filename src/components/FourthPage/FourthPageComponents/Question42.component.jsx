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
              value="0"
              checked={checkedValue === "0"}
              onChange={handleChange}
            />
            <label className="input-label">0</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="1"
              checked={checkedValue === "1"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">1</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="2"
              checked={checkedValue === "2"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">2</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="3"
              checked={checkedValue === "3"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">3</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="4"
              checked={checkedValue === "4"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">4</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="workFromOfficePerWeek"
              style={{ color: "#232323" }}
              value="5"
              checked={checkedValue === "5"}
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
