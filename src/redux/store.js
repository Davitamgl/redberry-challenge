import { configureStore } from "@reduxjs/toolkit";

import pageReducer from "./pageSlice";
import userDataReducer from "./userDataSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    userData: userDataReducer,
  },
});
