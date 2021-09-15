import { configureStore } from "@reduxjs/toolkit";

import pageReducer from "./pageSlice";
import userDataReducer from "./userDataSlice";
import validationReducer from "./validationSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    userData: userDataReducer,
    validation: validationReducer,
  },
});
