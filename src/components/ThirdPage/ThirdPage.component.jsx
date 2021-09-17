import React, { useState } from "react";
import "./ThirdPage.styles.scss";

import { ReactComponent as ThirdPageLogo } from "../../images/thirdPageLogo.svg";
import {
  getUserInformation,
  setUserInformation,
  resetUserInfo
} from "../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

import Question21 from "./ThirdPageComponents/Question21.component";
import Question22 from "./ThirdPageComponents/Question22.component";
import Question23 from "./ThirdPageComponents/Question23.component";
import AdditionalLink from "./ThirdPageComponents/AdditionalLink.component";

const ThirdPage = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(getUserInformation);

  const [data, setData] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + value);
    setData(value);
    dispatch(setUserInformation({ name: name, data: value }));
    if(name === "vaccinated"){
    dispatch(resetUserInfo("vaccinated"));
    }
  };

  return (
    <div className="third-page">
      <div className="third-page-components">
        <Question21
          handleChange={handleChange}
          checkedValue={userInformation.vaccinated}
        />
        {userInformation.vaccinated === "yes" ? (
          <Question22
            handleChange={handleChange}
            checkedValue={userInformation.vaccinationPhase}
          />
        ) : null}
        {userInformation.vaccinated === "no" ? (
          <Question23
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
