import React from "react";
import { Radio } from "@material-ui/core";

const Question41 = ({ handleChange, checkedValue }) => {
  return (
    <div className="first-question-content">
      <p className="question-texts">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <div className="inputs-container">
        <div className="radio-label-wrapperr">
          <div className="radio-label">
            <Radio
              name="meetingEvery"
              className="material-radio"
              style={{ color: "#232323" }}
              value="კვირაში ერთხელ"
              checked={checkedValue === "კვირაში ერთხელ"}
              onChange={handleChange}
            />
            <label className="input-label">კვირაში ერთხელ</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="meetingEvery"
              style={{ color: "#232323" }}
              value="კვირაში ორჯერ"
              checked={checkedValue === "კვირაში ორჯერ"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">კვირაში ორჯერ</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="meetingEvery"
              style={{ color: "#232323" }}
              value="ორ კვირაში ერთხელ"
              checked={checkedValue === "ორ კვირაში ერთხელ"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">ორ კვირაში ერთხელ</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="meetingEvery"
              style={{ color: "#232323" }}
              value="თვეში ერთხელ"
              checked={checkedValue === "თვეში ერთხელ"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">თვეში ერთხელ</label> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question41;
