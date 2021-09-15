// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userData: {
//     firstName: "",
//     lastName: "",
//     email: "",
//   },

//   errors: {
//     firstNameError: "",
//     lastNameError: "",
//     emailError: "",
//   },
// };

// export const validationSlice = createSlice({
//   name: "validation",
//   initialState,
//   reducers: {
//     updateUserData: (state, action) => {
//       state.userData.firstName = action.payload.firstName;
//       state.userData.lastName = action.payload.lastName;
//       state.userData.email = action.payload.email;
//     },
//     updateErrors: (state, action) => {
//       state.errors.firstNameError = action.payload.firstNameError;
//       state.errors.lastNameError = action.payload.lastNameError;
//       state.errors.emailError = action.payload.emailError;
//     },
//     updateUserName: (state, action) => {
//       state.userData.firstName= action.payload
//     }
//   },
// });

// export const { updateUserData, updateErrors,updateUserName } = validationSlice.actions;

// export const getUserData = (state) => state.validation.userData;
// export const getErrors = (state) => state.validation.errors;

// export default validationSlice.reducer;
