import React from "react";

import { useDispatch } from "react-redux";
import { renderPrevPage, renderNextPage } from "../../redux/pageSlice";

import { ReactComponent as NextPageButton } from "../../images/nextPage.svg";
import { ReactComponent as PrevPageButton } from "../../images/prevPage.svg";

import { getCurrentPage } from "../../redux/pageSlice";
import { useSelector } from "react-redux";

import "./NavigationButtons.styles.scss";

const NavigationButtons = () => {
  const currentPage = useSelector(getCurrentPage);
  
  const dispatch = useDispatch();
  return (
    <div className="page-buttons-container">
      <div className="page-buttons">
        {currentPage !== 1 ? (
          <div className="prev-page">
            <span onClick={() => dispatch(renderPrevPage())}>
              <PrevPageButton className="prev-button" />
            </span>
          </div>
        ) : null}
        <div className="next-page">
          <span onClick={() => dispatch(renderNextPage())}>
            <NextPageButton className="next-button" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
