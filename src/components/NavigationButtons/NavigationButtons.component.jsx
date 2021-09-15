import React from "react";

import {
  renderPrevPage,
  renderNextPage,
  getCurrentPage,
} from "../../redux/pageSlice";

import { ReactComponent as NextPageButton } from "../../images/nextPage.svg";
import { ReactComponent as PrevPageButton } from "../../images/prevPage.svg";

import { getIsUserValid } from "../../redux/userDataSlice";

import { useSelector, useDispatch } from "react-redux";

import "./NavigationButtons.styles.scss";

const NavigationButtons = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(getCurrentPage);
  const validUser = useSelector(getIsUserValid);

  return (
    <div className="page-buttons-container">
      <div className="page-buttons">
        {currentPage !== 1 ? (
          <div className="prev-page" onClick={() => dispatch(renderPrevPage())}>
            <PrevPageButton className="prev-button" />
          </div>
        ) : null}
        <div
          className={validUser ? "next-page" : "locked-button"}
          onClick={() => dispatch(renderNextPage())}
        >
          <NextPageButton className="next-button" />
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
