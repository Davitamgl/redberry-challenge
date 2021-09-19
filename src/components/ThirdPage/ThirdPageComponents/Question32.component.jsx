import React from "react";
import { Radio } from "@material-ui/core";


const Question32 = ({ handleChange, checkedValue }) => {

  return (
    <div className="second-question-content">
      <p className="question-texts">აირჩიე რა ეტაპზე ხარ*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapperr">
          <div className="radio-label">
            <Radio
              name="vaccinationPhase"
              className="material-radio"
              style={{ color: "#232323" }}
              value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
              checked={
                checkedValue === "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
              }
              onChange={handleChange}
            />
            <label className="input-label">
              პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
            </label>
             
          </div>
          <div className="radio-label">
            <Radio
              name="vaccinationPhase"
              style={{ color: "#232323" }}
              value="სრულად აცრილი ვარ"
              checked={checkedValue === "სრულად აცრილი ვარ"}
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">სრულად აცრილი ვარ</label> 
          </div>
          <div className="radio-label">
            <Radio
              name="vaccinationPhase"
              style={{ color: "#232323" }}
              value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
              checked={
                checkedValue ===
                "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
              }
              className="material-radio"
              onChange={handleChange}
            />
            <label className="input-label">
              პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
            </label>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question32;
