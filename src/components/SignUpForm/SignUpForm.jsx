import React, { useState, useEffect } from "react";
import latestValidation from "../ValidateUser/ValidateUser";

import {
  setIsValidUser,
  getIsUserValid,
  setValidationData,
  getValidationData,
} from "../../redux/userDataSlice";
import { getCurrentPage } from "../../redux/pageSlice";

import { useDispatch, useSelector } from "react-redux";

import "./SignUpForm.styles.scss";

const LatestSignUpForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  console.log(errors);

  const validationData = useSelector(getValidationData);
  console.log(validationData);
  const isUserValid = useSelector(getIsUserValid);
  const currentPage = useSelector(getCurrentPage);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // dispatch(setIsValidUser(false));
    // dispatch(setValidationData(false));
  };

  // const handleError = () => {
  //   setErrors(latestValidation(values));
  // };
  useEffect(() => {
    setValues({
      firstName: validationData.validFirstName,
      lastName: validationData.validLastName,
      email: validationData.validEmail,
    });
  }, []);

  useEffect(() => {
    setErrors(latestValidation(values));
  }, [values]);

  useEffect(() => {
    if (
      Object.values(values).every((x) => x !== "") &&
      Object.values(values).every((x) => x.length >= 3) &&
      Object.values(errors).every((x) => x === "")
    ) {
      console.log("yess");
      dispatch(setIsValidUser(true), dispatch(setValidationData(values)));
    } else {
      dispatch(setIsValidUser(false), dispatch(setValidationData(false)));
    }
  }, [errors]);

  return (
    <div className="firstpage-elements-container">
      <div className="form-container ">
        <form className="sign-up-form" id="sign-in-form" method="get">
          <div className="form-inputs">
            <label htmlFor="first-name" className="form-label">
              სახელი*
            </label>
            <input
              type="text"
              name="firstName"
              className="firstName-input"
              onChange={handleChange}
              value={values.firstName}
            />
            {errors.firstNameError && (
              <p className="error-message">{errors.firstNameError}</p>
            )}
          </div>
          <div className="form-inputs">
            <label htmlFor="last-name" className="form-label">
              გვარი*
            </label>
            <input
              type="text"
              name="lastName"
              className="lastName-input"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastNameError && (
              <p className="error-message">{errors.lastNameError}</p>
            )}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              მეილი*
            </label>
            <input
              type="email"
              name="email"
              className="email-input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.emailError && (
              <p className="error-message">{errors.emailError}</p>
            )}
          </div>
          <div className="note-text">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </div>
        </form>
      </div>
    </div>
  );
};

export default LatestSignUpForm;
