import React from "react";
import "./ReusableQuestion.styles.scss";

const ReusableQuestion = ({ question, inputType, inputQuantity }) => {
  return (
    <div className="reusable-question-container">
      <p className="question-texts">{question}</p>
      <div className="inputs-container">
       
          <input />

      </div>

    </div>
  );
};

export default ReusableQuestion;


// eslint-disable-next-line no-lone-blocks
{/* <div className="inputs-container">
<div className="radio-label-wrapper">
  <input
    type={inputType}
    name="userHadCovid"
    checked={userInformation.userHadCovid === "yes"}
    value="yes"
    className="first-question-radios"
    onChange={handleChange}
  ></input>
  <label className="input-label">კი</label> 
</div>

<div className="radio-label-wrapper">
  <input
    type="radio"
    name="userHadCovid"
    checked={userInformation.userHadCovid === "no"}
    value="no"
    className="first-question-radios"
    onChange={handleChange}
  />
  <label className="input-label">არა</label> 
</div>
<div className="radio-label-wrapper">
  <input
    type="radio"
    name="userHadCovid"
    checked={userInformation.userHadCovid === "currently has"}
    value="currently has"
    className="first-question-radios"
    onChange={handleChange}
  />
  <label className="input-label">ახლა მაქვს</label> 
</div>
</div> */}