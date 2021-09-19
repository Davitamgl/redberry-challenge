import React from "react";
import { ReactComponent as FirstPageLogo } from "../../images/firstPageLogo.svg";

import "./firstPage.styles.scss";

import SignUpForm from  './FirstPageComponents/SignUpForm'

const FirstPage = () => {


  return (
    <div className="first-page">
      <div className="content-wrapper">
        <SignUpForm />
      </div>

    
        <FirstPageLogo className="first-page-logo" />
      
    </div>
  );
};

export default FirstPage;
