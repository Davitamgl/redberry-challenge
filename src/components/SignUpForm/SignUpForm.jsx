import React, { useState, useEffect } from "react";
import latestValidation from "../FirstPage/ValidateUser";

import "./SignUpForm.styles.scss";

const LatestSignUpForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    handleError();
  };

  const handleError = () => {
    setErrors(latestValidation(values));
  };

  useEffect(() => {
    setErrors(latestValidation(values));
  }, [values, submitForm]);

  useEffect(() => {
    if (
      Object.values(values).every((x) => x !== "") &&
      Object.values(errors).every((x) => x === "")
    ) {
      console.log("yess");
      submitForm(true);
    } else {
      submitForm(false);
    }
  }, [errors]);

  return (
    <div className="firstpage-elements-container">
      <div className="form-container ">
      <form
        className="sign-up-form"
        id="sign-in-form"
        method="get"
        // onSubmit={handleFirstName}
      >
        <div className="form-inputs">
          <label htmlFor="first-name" className="form-label">
            სახელი*
          </label>
          <input
            type="text"
            name="firstName"
            className="firstName-input"
            placeholder="იოსებ"
            onChange={handleChange}
            value={values.firstName}
          />
          {errors.firstNameError && <p className="error-message">{errors.firstNameError}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="last-name" className="form-label">
            გვარი*
          </label>
          <input
            type="text"
            name="lastName"
            className="lastName-input"
            placeholder="ჯუღაშვილი"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastNameError && <p className="error-message">{errors.lastNameError}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            მეილი*
          </label>
          <input
            type="email"
            name="email"
            className="email-input"
            placeholder="fbi@redberry.ge"
            value={values.email}
            onChange={handleChange}
          />
          {errors.emailError && <p className="error-message">{errors.emailError}</p>}
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
