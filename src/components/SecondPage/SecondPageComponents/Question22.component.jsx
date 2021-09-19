import React from "react";
import { Radio } from "@material-ui/core";

const Questiion22 = ({ handleChange, checkedValue }) => {
  return (
    <div className={"second-question-content"}>
      <p className="question-texts">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div className="inputs-container">
     
        <div className="radio-label-wrapper">
        <div className="radio-label">
          <Radio
            className="material-radio"
            style={{ color: "#232323" }}
            name="antiBodyTested"
            value="კი"
            
            onChange={handleChange}
            checked={checkedValue === "კი"}
          />
          <label className="input-label">კი</label> 
        </div>
        </div>

        <div className="radio-label-wrapper">
        <div className="radio-label">
          <Radio
             className="material-radio"
             style={{ color: "#232323" }}
            name="antiBodyTested"
            onChange={handleChange}
            checked={checkedValue === "არა"}
            value="არა"
            
          />
          <label className="input-label">არა</label> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Questiion22;
