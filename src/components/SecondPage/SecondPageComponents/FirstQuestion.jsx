import React from "react";
import {
  getUserInformation,
  setUserInformation,
  resetUserInfo,
} from "../../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const FirstQuestion = () => {
  const userInformation = useSelector(getUserInformation);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInformation({ name: name, data: value }));
    dispatch(resetUserInfo("userHadCovid"));
  };

  return (
    <div className="first-question-content">
      <p className="question-texts">გაქვს გადატანილი Covid-19?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="userHadCovid"
            checked={userInformation.userHadCovid === "კი"}
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
            checked={userInformation.userHadCovid === "არა"}
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
            checked={userInformation.userHadCovid === "ახლა მაქვს"}
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

export default FirstQuestion;
