// import {
//   setFirstName,
//   getFirstName,
//   getLastName,
//   getEmail,
//   setLastName,
// } from "../../redux/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setFirstNameError,
//   getFirstNameError,
//   setLastNameError,
//   getLastNameError,
//   setEmailError,
//   getEmailError,
// } from "../../redux/validationSlice";

// export const ValidateUser = () => {
//   const dispatch = useDispatch();

//   const firstNameValue = useSelector(getFirstName);
//   const lastNameValue = useSelector(getLastName);
//   const emailValue = useSelector(getEmail);

//   const firstNameError = useSelector(getFirstNameError);
//   const lastNameError = useSelector(getLastNameError);
//   const emailError = useSelector(getEmailError);

//   //////////////////////////FirstName/////////////////////

//   if (
//     !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(firstNameValue) &&
//     !/^[a-zA-Z]+$/.test(firstNameValue) &&
//     firstNameValue.length >= 1
//   ) {
//     dispatch(
//       setFirstNameError(
//         "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
//       )
//     );
//   } else if (firstNameValue.length >= 1 && firstNameValue.length <= 2) {
//     dispatch(
//       setFirstNameError("სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან")
//     );
//   } else if (firstNameValue.length > 255) {
//     dispatch(
//       setFirstNameError("სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან")
//     );
//   } else {
//     dispatch(setFirstNameError(""));
//   }

//   //////////////////////////LastName/////////////////////
//   if (
//     !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(lastNameValue) &&
//     !/^[a-zA-Z]+$/.test(lastNameValue) &&
//     lastNameValue.length >= 1
//   ) {
//     dispatch(
//       setLastNameError(
//         "გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
//       )
//     );
//   } else if (lastNameValue.length >= 1 && lastNameValue.length <= 2) {
//     dispatch(
//       setLastNameError("გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან")
//     );
//   } else if (lastNameValue.length > 255) {
//     dispatch(
//       setLastNameError("გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან")
//     );
//   } else {
//     dispatch(setLastNameError(""));
//   }

//   //////////////////////////Email/////////////////////
//   if (!/\S+@\S+\.\S+/.test(emailValue) && emailValue.length >= 1) {
//     dispatch(setEmailError("თქვენს მიერ შეყვანილი მეილი არასწორია"));
//   }
//   else if (!emailValue.endsWith("@redberry.ge") && emailValue.length >= 1) {
//     dispatch(
//       setEmailError(
//         "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)"
//       )
//     );
//  } else {
//     dispatch(setEmailError(""));
//   }

//   return {
//     firstNameError,
//     lastNameError,
//     emailError,
//     firstNameValue,
//     lastNameValue,
//     emailValue,
//   };
// };

// /*   const errors = {};
//   // const firstNameValue = useSelector(getFirstName)
//   //FirstName
//   if (!firstNameValue.firstName.trim()) {
//     errors.firstName = "FirstName required";
//   } else if (firstNameValue.firstName.length <3) {
//     errors.firstName = " firstname should be more than 3";
//   }

//   //LastName
//   if (!firstNameValue.lastName.trim()) {
//     errors.lastName = "LastName required";
//   }

//   //Email
//   if (!firstNameValue.email) {
//     errors.email = "email required";
//   } else if (!/\S+@\S+\.\S+/.test(firstNameValue.email)) {
//     errors.email = "Email adress is invalid";
//   }
//   console.log(errors.firstName + " in Validation");
//   return errors;*/

// //(emailValue.indexOf("@redberry.ge", emailValue.length - "@redberry.ge".length) !== -1)
