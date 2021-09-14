import { configureStore } from "@reduxjs/toolkit";

import pageReducer from "./pageSlice";
import userReducer from "./userSlice";
import validationReducer from './validationSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
    validation: validationReducer,
  },
});
