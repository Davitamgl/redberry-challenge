import React from "react";

import {
  getUserInformation,
  setUserInformation,
  resetUserInfo,
} from "../../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const SecondQuestion = () => {
  const userInformation = useSelector(getUserInformation);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInformation({ name: name, data: value }));

    dispatch(resetUserInfo("antiBodyTested"));
  };

  return (
    <div
      className={
        // userInformation.userHadCovid === "yes"
        //   ?
        "second-question-content"
        // :
        // "content-hidden"
      }
    >
      <p className="question-texts">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div className="inputs-container">
        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="antiBodyTested"
            // checked={true}
            value="yes"
            className="first-question-radios"
            onChange={handleChange}
            checked={userInformation.antiBodyTested === "yes"}
          ></input>
          <label className="input-label">კი</label> 
        </div>

        <div className="radio-label-wrapper">
          <input
            type="radio"
            name="antiBodyTested"
            onChange={handleChange}
            checked={userInformation.antiBodyTested === "no"}
            value="no"
            className="first-question-radios"
          />
          <label className="input-label">არა</label> 
        </div>
      </div>
    </div>
  );
};

export default SecondQuestion;
