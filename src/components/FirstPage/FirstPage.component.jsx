import React, { useState } from "react";
import { ReactComponent as FirstPageLogo } from "../../images/firstPageLogo.svg";

import "./firstPage.styles.scss";

import SignUpForm from "../SignUpForm/SignUpForm";
import { setIsValidUser } from "../../redux/userDataSlice";
import { useDispatch } from "react-redux";

const FirstPage = () => {
  const [userIsValid, setUserIsValid] = useState(false);
  const dispatch = useDispatch();

  // const isUserValid = (x) => {
  //   setUserIsValid(x);
  //   console.log(userIsValid);
  //   dispatch(setIsValidUser(x));
  // };

  return (
    <div className="first-page">
      <div className="content-wrapper">
        <SignUpForm  />
        {/* <SignUpForm /> */}

        {/* <SignUpForm isUserValid={isUserValid} />
         {userIsValid ? <LatestSignUpSucces /> : null} */}
      </div>

      <div className="firstPageLogo-container">
        <FirstPageLogo className="first-page-logo" />
      </div>
    </div>
  );
};

export default FirstPage;
