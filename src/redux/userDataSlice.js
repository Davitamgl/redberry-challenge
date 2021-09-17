import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validatedData: {
    validFirstName: "",
    validLastName: "",
    validEmail: "",
  },
  userInformation: {
    userHadCovid: "",
    antiBodyTested: "",
    testDate: null,
    numberOfAntibodies: "",
    whenUserHadCovid: null,
    vaccinated: "",
    vaccinationPhase: "",
    whatUserIsWaitingFor: "",
    userClickedOnLink: "",
    meetingEvery: "",
    workFromOfficePerWeek: "",
  },

  validUser: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setIsValidUser: (state, action) => {
      state.validUser = action.payload;
    },
    setValidationData: (state, action) => {
      if (action.payload === false) {
        state.validatedData.validFirstName = "";
        state.validatedData.validLastName = "";
        state.validatedData.validEmail = "";
      } else {
        state.validatedData.validFirstName = action.payload.firstName;
        state.validatedData.validLastName = action.payload.lastName;
        state.validatedData.validEmail = action.payload.email;
      }
    },
    setUserInformation: (state, action) => {
      switch (action.payload.name) {
        case "userHadCovid":
          state.userInformation.userHadCovid = action.payload.data;
          break;
        case "antiBodyTested":
          state.userInformation.antiBodyTested = action.payload.data;
          break;
        case "testDate":
          state.userInformation.testDate = action.payload.data;
          break;
        case "numberOfAntibodies":
          state.userInformation.numberOfAntibodies = action.payload.data;
          break;
        case "whenUserHadCovid":
          state.userInformation.whenUserHadCovid = action.payload.data;
          break;
        case "vaccinated":
          state.userInformation.vaccinated = action.payload.data;
          break;
        case "vaccinationPhase":
          state.userInformation.vaccinationPhase = action.payload.data;
          break;
        case "whatUserIsWaitingFor":
          state.userInformation.whatUserIsWaitingFor = action.payload.data;
          break;
        case "userClickedOnLink":
          state.userInformation.userClickedOnLink = action.payload.data;
          break;
        case "meetingEvery":
          state.userInformation.meetingEvery = action.payload.data;
          break;
        case "workFromOfficePerWeek":
          state.userInformation.workFromOfficePerWeek = action.payload.data;
          break;

        default:
      }
    },
    resetUserInfo: (state, action) => {
      console.log(action);
      console.log("hee");
      switch (action.payload) {
        case "userHadCovid":
          state.userInformation.antiBodyTested = "";
          state.userInformation.testDate = null;
          state.userInformation.numberOfAntibodies = "";
          state.userInformation.whenUserHadCovid = null;
          break;
        case "antiBodyTested":
          state.userInformation.testDate = null;
          state.userInformation.numberOfAntibodies = "";
          state.userInformation.whenUserHadCovid = null;
          break;
        case "vaccinated":
          state.userInformation.vaccinationPhase = "";
          state.userInformation.whatUserIsWaitingFor = "";
          break;

        default:
          console.log("unexpected data");
      }
    },
  },
});

export const {
  setIsValidUser,
  setValidationData,
  setUserInformation,
  resetUserInfo,
} = userDataSlice.actions;

export const getIsUserValid = (state) => state.userData.validUser;
export const getValidationData = (state) => state.userData.validatedData;
export const getUserInformation = (state) => state.userData.userInformation;

export default userDataSlice.reducer;
