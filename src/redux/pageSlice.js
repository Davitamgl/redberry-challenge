import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startingPage: false,
  endingPage: false,
  activePage: 
  4,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    renderFirstPage: (state) => {
      state.secondPage = true;
    },
    endStartPage: (state) => {
      state.startingPage = false;
    },
    startEndingPage: (state) => {
      console.log("actioon");
      state.endingPage = true;
    },

    renderNextPage: (state) => {
      state.activePage += 1;
    },
    renderPrevPage: (state) => {
      state.activePage -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  endStartPage,
  renderFirstPage,
  renderNextPage,
  renderPrevPage,
  startEndingPage,
} = pageSlice.actions;
export const startingPageSelector = (state) => state.page.startingPage;
export const endingPageSelector = (state) => state.page.endingPage;
export const getCurrentPage = (state) => state.page.activePage;

export default pageSlice.reducer;
