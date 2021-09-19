import React from "react";
import { Radio } from "@material-ui/core";

const Question33 = ({ handleChange, checkedValue }) => {
  return (
    <div className="third-question-content">
      <p className="question-texts">რას ელოდები?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapperr">
          <div className="radio-label">
            <Radio
              name="whatUserIsWaitingFor"
              className="material-radio"
              style={{ color: "#232323" }}
              value="დარეგისტრირებული ვარ და ველოდები რიცხვს"
              checked={
                checkedValue === "დარეგისტრირებული ვარ და ველოდები რიცხვს"
              }
              onChange={handleChange}
            />
            <label className="input-label">
              დარეგისტრირებული ვარ და ველოდები რიცხვს
            </label>
             
          </div>
          <div className="radio-label">
            <Radio
              name="whatUserIsWaitingFor"
              style={{ color: "#232323" }}
              value="არ ვგეგმავ"
              checked={checkedValue === "არ ვგეგმავ"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">არ ვგეგმავ</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="whatUserIsWaitingFor"
              style={{ color: "#232323" }}
              value="გადატანილი მაქვს და ვგეგმავ აცრას"
              checked={checkedValue === "გადატანილი მაქვს და ვგეგმავ აცრას"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">
              გადატანილი მაქვს და ვგეგმავ აცრას
            </label>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question33;
