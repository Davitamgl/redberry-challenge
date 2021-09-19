import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validationErrors: {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
  },
  validationData: {
    firstName: "",
    lastName: "",
    email: "",
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
    userThoughtsAboutMeetings: "",
    userThoughtsAboutEnviroment: "",
    submitButtonClicked: "",
  },

  validUser: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setValidationData: (state, action) => {
      switch (action.payload.name) {
        case "firstName":
          state.validationData.firstName = action.payload.data;
          break;
        case "lastName":
          state.validationData.lastName = action.payload.data;
          break;
        case "email":
          state.validationData.email = action.payload.data;
          break;

        default:
          console.log("unexpected data");
      }
    },
    setValidationErrors: (state, action) => {
      state.validationErrors.firstNameError = action.payload.firstNameError;
      state.validationErrors.lastNameError = action.payload.lastNameError;
      state.validationErrors.emailError = action.payload.emailError;
    },
    setIsValidUser: (state, action) => {
      state.validUser = action.payload;
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
        case "userThoughtsAboutMeetings":
          state.userInformation.userThoughtsAboutMeetings = action.payload.data;
          break;

        case "userThoughtsAboutEnviroment":
          state.userInformation.userThoughtsAboutEnviroment =
            action.payload.data;
          break;

        case "submitButtonClicked":
          state.userInformation.submitButtonClicked = action.payload.data;
          break;

        default:
          console.log("unexpected data");
      }
    },
    resetUserInfo: (state, action) => {
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
  setValidationErrors,
  setUserInformation,
  resetUserInfo,
} = userDataSlice.actions;

export const getIsUserValid = (state) => state.userData.validUser;
export const getValidationData = (state) => state.userData.validationData;
export const getUserInformation = (state) => state.userData.userInformation;
export const getValidationErrors = (state) => state.userData.validationErrors;

export default userDataSlice.reducer;
