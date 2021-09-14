import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  validFirstName: false,
  validLastName: false,
  validEmail: false
};

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setFirstNameError: (state, action) => {
      state.firstNameError = action.payload;
    },
    setLastNameError: (state, action) => {
      state.lastNameError = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },
    setValidFirstName: (state, action) => {
      state.validFirstName = action.payload
    },
    setValidLastName: (state, action) => {
      state.validLastName = action.payload
    },
    setValidEmail: (state, action) => {
      state.validEmail = action.payload
    }
  },

});

export const { setFirstNameError, setLastNameError, setEmailError,
  setValidFirstName, setValidLastName,setValidEmail } =
  validationSlice.actions;

export const getFirstNameError = (state) => state.validation.firstNameError;
export const getLastNameError = (state) => state.validation.lastNameError;
export const getEmailError = (state) => state.validation.emailError;

export const getValidFirstName = (state) => state.validation.validFirstName;
export const getValidLastName = (state) => state.validation.validLastName;
export const getValidEmail = (state) => state.validation.validEmail;

export default validationSlice.reducer;
