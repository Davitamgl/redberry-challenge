import React, { useState, useEffect } from "react";
import validateUser from "../../Validations/validateUser";

import {
  setIsValidUser,
  setValidationErrors,
  getValidationErrors,
  setValidationData,
  getValidationData,
} from "../../../redux/userDataSlice";


import { useDispatch, useSelector } from "react-redux";

import "./SignUpForm.styles.scss";

const SignUpForm = () => {

  const dispatch = useDispatch();
  const validationData = useSelector(getValidationData);
  const validationErrors = useSelector(getValidationErrors);



  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setValidationData({ name: name, data: value }));
  };

  useEffect(() => {
    dispatch(setValidationErrors(validateUser(validationData)));
  }, [validationData]);

  useEffect(() => {
    if (
      Object.values(validationData).every((x) => x !== "") &&
      Object.values(validationData).every((x) => x.length >= 3) &&
      Object.values(validationErrors).every((x) => x === "")
    ) {
      dispatch(setIsValidUser(true));
    } else {
      dispatch(setIsValidUser(false));
    }
  }, [validationErrors]);

  return (
    <div className="firstpage-elements-container">
      <div className="form-container ">
        <form className="sign-up-form" id="sign-in-form" method="get">
          <div className="form-input-one">
            <label htmlFor="first-name" className="form-label">
              სახელი*
            </label>
            <input
              type="text"
              name="firstName"
              className="firstName-input"
              onChange={handleChange}
              value={validationData.firstName}
            />
            <div
              className={
                validationErrors.firstNameError
                  ? "error-message"
                  : "error-message-hidden"
              }
            >
              {validationErrors.firstNameError}
            </div>
          </div>
          <div className="form-input-two">
            <label htmlFor="last-name" className="form-label">
              გვარი*
            </label>
            <input
              type="text"
              name="lastName"
              className="lastName-input"
              value={validationData.lastName}
              onChange={handleChange}
            />
            <div
              className={
                validationErrors.lastNameError
                  ? "error-message"
                  : "error-message-hidden"
              }
            >
              {validationErrors.lastNameError}
            </div>
          </div>
          <div className="form-input-three">
            <label htmlFor="email" className="form-label">
              მეილი*
            </label>
            <input
              type="email"
              name="email"
              className="email-input"
              value={validationData.email}
              onChange={handleChange}
            />
            <div
              className={
                validationErrors.emailError
                  ? "error-message"
                  : "error-message-hidden"
              }
            >
              {validationErrors.emailError}
            </div>
          </div>
          <div className="note-text">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
