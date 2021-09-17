import React from "react";
import "./SeconPage.styles.scss";

import { ReactComponent as SecondPageLogo } from "../../images/secondPageLogo.svg";
import { getUserInformation } from "../../redux/userDataSlice";
import { useSelector } from "react-redux";

import FirstQuestion from "./SecondPageComponents/FirstQuestion";
import SecondQuestion from "./SecondPageComponents/SecondQuestion";
import ThirdQuestion from "./SecondPageComponents/ThirdQuestion";
import FourthQuestion from "./SecondPageComponents/FourthQuestion";

const SecondPage = () => {
  const userInformation = useSelector(getUserInformation);

  console.log(userInformation);
  return (
    <div className="second-page">
      <div className="second-page-components">
        <FirstQuestion />
        {userInformation.userHadCovid === "კი" ? <SecondQuestion /> : null}
        {userInformation.antiBodyTested === "კი" ? <ThirdQuestion /> : null}
        {userInformation.antiBodyTested === "არა" ? <FourthQuestion /> : null}
      </div>

      <div className="logo-container">
        <SecondPageLogo className="second-page-logo" />
      </div>
    </div>
  );
};

export default SecondPage;
