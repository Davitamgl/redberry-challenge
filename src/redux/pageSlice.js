import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startingPage: false,
  activePage: 4,
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

    renderNextPage: (state) => {
      state.activePage += 1;
    },
    renderPrevPage: (state) => {
      state.activePage -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { endStartPage, renderFirstPage, renderNextPage, renderPrevPage } =
  pageSlice.actions;
export const startingPageSelector = (state) => state.page.startingPage;
export const getCurrentPage = (state) => state.page.activePage;

export default pageSlice.reducer;
