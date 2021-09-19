import React from "react";

const Questiion22 = ({ handleChange, checkedValue }) => {
  return (
    <div className={"second-question-content"}>
      <p className="question-texts">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="antiBodyTested"
            value="კი"
            className="first-question-radios"
            onChange={handleChange}
            checked={checkedValue === "კი"}
          ></input>
          <label className="input-label">კი</label> 
        </div>

        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="antiBodyTested"
            onChange={handleChange}
            checked={checkedValue === "არა"}
            value="არა"
            className="first-question-radios"
          />
          <label className="input-label">არა</label> 
        </div>
      </div>
    </div>
  );
};

export default Questiion22;
