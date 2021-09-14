// import React, { useState, useEffect } from "react";

// import "./FormSignIn.styles.scss";
// import { ValidateFirstName } from "../ValidateUser/ValidateFirstName";

// const FormSignIn2 = () => {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     firstNameError: "",
//     lastNameError: "",
//     emailError: "",
//   });

//   // const [validationErrors, setValidationErrors] = useState({
//   //   firstNameError: "",
//   //   lastNameError: "",
//   //   emailError: "",
//   // });

//   const handleNameChange = (e) => {
//     setValues({
//       ...values,
//       firstName: e.target.value,
//     });
//   };

//   // useEffect(() => {
//   //   setValues({
//   //     firstNameError: validateFirstName(values.firstName)
//   //   });
//   // }, [values]);

//   // const validateFirstName = (firstName) => {
//   //   console.log("received " + firstName);

//   //   let errors = "";
//   //   if (
//   //     !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(firstName) &&
//   //     !/^[a-zA-Z]+$/.test(firstName) &&
//   //     firstName.length >= 1
//   //   ) {
//   //     errors =
//   //       "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)";
//   //   } else if (firstName.length >= 1 && firstName.length <= 2) {
//   //     errors = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
//   //   } else if (firstName.length > 255) {
//   //     errors = "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
//   //   } else {
//   //     errors = "";
//   //   }

//   //   setValidationErrors({
//   //     firstNameError: errors,
//   //   });
//   // };
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   // setValues({
//   //   //   ...values,
//   //   //   [name]: value,
//   //   // });
//   //   setTestValue(value);

//   // };

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
//             onChange={handleNameChange}
//             value={values.firstName}
//           />
//           {values.firstNameError && <p>{values.firstNameError}</p>}

//           {/* //     {data && <p>{data}</p>} */}
//         </div>
//         {/* <div className="form-inputs">
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
//         </div> */}
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

// export default FormSignIn2;
