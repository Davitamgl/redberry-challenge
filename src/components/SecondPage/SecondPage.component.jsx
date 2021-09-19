import React from "react";
import "./SeconPage.styles.scss";

import { ReactComponent as SecondPageLogo } from "../../images/secondPageLogo.svg";
import {
  getUserInformation,
  setUserInformation,
  resetUserInfo,
} from "../../redux/userDataSlice";

import { useSelector } from "react-redux";

import Question21 from "./SecondPageComponents/Question21.component";
import Questiion22 from "./SecondPageComponents/Question22.component";
import Question23 from "./SecondPageComponents/Question23.component";
import Question24 from "./SecondPageComponents/Question24.component";

import { useDispatch } from "react-redux";

const SecondPage = () => {
  const userInformation = useSelector(getUserInformation);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setUserInformation({ name: name, data: value }));
    if (name === "userHadCovid") {
      dispatch(resetUserInfo("userHadCovid"));
    } else if (name === "antiBodyTested") {
      dispatch(resetUserInfo("antiBodyTested"));
    }
  };

  return (
    <div className="second-page">
      <div className="second-page-components">
        <Question21
          handleChange={handleChange}
          checkedValue={userInformation.userHadCovid}
        />
        {userInformation.userHadCovid === "კი" ? (
          <Questiion22
            handleChange={handleChange}
            checkedValue={userInformation.antiBodyTested}
          />
        ) : null}
        {userInformation.antiBodyTested === "კი" ? <Question23 /> : null}
        {userInformation.antiBodyTested === "არა" ? <Question24 /> : null}
      </div>

      
        <SecondPageLogo className="second-page-logo" />
      
    </div>
  );
};

export default SecondPage;
