import React, { useState } from "react";
import "./ThirdPage.styles.scss";

import { ReactComponent as ThirdPageLogo } from "../../images/thirdPageLogo.svg";
import {
  getUserInformation,
  setUserInformation,
  resetUserInfo,
} from "../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

import AdditionalLink from "./ThirdPageComponents/AdditionalLink.component";
import Question31 from "./ThirdPageComponents/Question31.component";
import Question32 from "./ThirdPageComponents/Question32.component";
import Question33 from "./ThirdPageComponents/Question33.component";

const ThirdPage = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(getUserInformation);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setUserInformation({ name: name, data: value }));
    if (name === "vaccinated") {
      dispatch(resetUserInfo("vaccinated"));
    }
  };

  return (
    <div className="third-page">
      <div className="third-page-components">
        <Question31
          handleChange={handleChange}
          checkedValue={userInformation.vaccinated}
        />
        {userInformation.vaccinated === "yes" ? (
          <Question32
            handleChange={handleChange}
            checkedValue={userInformation.vaccinationPhase}
          />
        ) : null}
        {userInformation.vaccinated === "no" ? (
          <Question33
            handleChange={handleChange}
            checkedValue={userInformation.whatUserIsWaitingFor}
          />
        ) : null}
        <AdditionalLink />
      </div>

      <div className="logo-container">
        <ThirdPageLogo className="third-page-logo" />
      </div>
    </div>
  );
};

export default ThirdPage;
