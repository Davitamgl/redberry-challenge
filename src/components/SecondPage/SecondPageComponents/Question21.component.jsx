import React from "react";

const Question21 = ({ handleChange, checkedValue }) => {
  return (
    <div className="first-question-content">
      <p className="question-texts">გაქვს გადატანილი Covid-19?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="userHadCovid"
            checked={checkedValue === "კი"}
            value="კი"
            className="first-question-radios"
            onChange={handleChange}
          ></input>
          <label className="input-label">კი</label> 
        </div>

        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="userHadCovid"
            checked={checkedValue === "არა"}
            value="არა"
            className="first-question-radios"
            onChange={handleChange}
          />
          <label className="input-label">არა</label> 
        </div>
        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="userHadCovid"
            checked={checkedValue === "ახლა მაქვს"}
            value="ახლა მაქვს"
            className="first-question-radios"
            onChange={handleChange}
          />
          <label className="input-label">ახლა მაქვს</label> 
        </div>
      </div>
    </div>
  );
};

export default Question21;
