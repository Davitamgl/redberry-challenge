// import React, { useState } from "react";

// import useForm from "../useForm/useForm";

// import {
//   getFirstName,
//   getLastName,
//   getEmail,
//   setFirstName,
//   setLastName,
//   setEmail,
// } from "../../redux/userSlice";
// import {
//   getFirstNameError,
//   getLastNameError,
//   getEmailError,
// } from "../../redux/validationSlice";

// import { useDispatch, useSelector } from "react-redux";

// import "./FormSignIn.styles.scss";
// import { ValidateUser } from "../ValidateUser/ValidateUser";
// import { ValidateFirstName } from "../ValidateUser/ValidateFirstName";

// const FormSignIn = () => {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });
//   // const {  handleSubmit, handleChange, firstNameValue} = useForm();

//   const { firstNameValue, firstNameError, lastNameValue, lastNameError } =
//     ValidateUser();

//   console.log(values);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleFirstName = (e) => {
//     const { name, value } = e.target;

//     dispatch(setFirstName(value));
//   };
//   const handleLastName = (e) => {
//     dispatch(setLastName(e.target.value));
//   };
//   const handleEmail = (e) => {
//     dispatch(setEmail(e.target.value));
//   };

//   return (
//     <div className="form-container">
//       <form
//         className="sign-in-form"
//         id="sign-in-form"
//         method="get"
//         // onSubmit={handleFirstName}
//       >
//         <div className="form-inputs">
//           <label htmlFor="first-name" className="form-label">
//             სახელი*
//           </label>
//           <input
//             type="text"
//             name="firstName"
//             className="firstName-input"
//             onChange={handleFirstName}
//             value={firstNameValue}
//           />

//           {firstNameError && <p>{firstNameError}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="last-name" className="form-label">
//             გვარი*
//           </label>
//           <input
//             type="text"
//             name="lastName"
//             className="lastName-input"
//             value={lastNameValue}
//             onChange={handleLastName}
//           />

//           {lastNameError && <p>{lastNameError}</p>}
//         </div>
//         {/* <div className="form-inputs">
//           <label htmlFor="email" className="form-label">
//             email*
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="email-input"
//             value={emailValue}
//             onChange={handleEmail}
//           />
//           {emailError && <p>{emailError}</p>}
//         </div> */}
//       </form>
//       <input type="submit" form="sign-in-form" />
//     </div>
//   );
// };

// export default FormSignIn;
