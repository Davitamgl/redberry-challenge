import React, { useState } from "react";
import { ReactComponent as FirstPageLogo } from "../../images/firstPageLogo.svg";

import "./firstPage.styles.scss";

import SignUpForm from "../SignUpForm/SignUpForm";

const FirstPage = () => {
  const [userIsValid, setUserIsValid] = useState(false);

  const submitForm = (x) => {
    setUserIsValid(x);
  };

  return (
    <div className="first-page">
      <div className="content-wrapper">
        <SignUpForm submitForm={submitForm} />
        {/* <SignUpForm /> */}

        {/* <SignUpForm submitForm={submitForm} />
         {userIsValid ? <LatestSignUpSucces /> : null} */}
      </div>

      <div className="firstPageLogo-container">
        <FirstPageLogo className="first-page-logo" />
      </div>
    </div>
  );
};

export default FirstPage;
