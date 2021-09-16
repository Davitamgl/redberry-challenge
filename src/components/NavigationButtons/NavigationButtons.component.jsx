import React from "react";

import {
  renderPrevPage,
  renderNextPage,
  getCurrentPage,
} from "../../redux/pageSlice";

import { ReactComponent as NextPageButton } from "../../images/nextPage.svg";
import { ReactComponent as PrevPageButton } from "../../images/prevPage.svg";

import { getIsUserValid, getUserInformation } from "../../redux/userDataSlice";

import { useSelector, useDispatch } from "react-redux";

import "./NavigationButtons.styles.scss";

const NavigationButtons = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(getUserInformation);
  const currentPage = useSelector(getCurrentPage);
  const validUser = useSelector(getIsUserValid);

  const handleNextPage = () => {
    if (currentPage === 1 && validUser) {
      return "next-page";
    } else if (
      currentPage === 2 &&
      (userInformation.whenUserHadCovid ||
        (userInformation.testDate && 
          userInformation.numberOfAntibodies))
    ) {
      return "next-page";
    } else {
      return "locked-button";
    }
  };

  return (
    <div className="page-buttons-container">
      <div className="page-buttons">
        {currentPage !== 1 ? (
          <div className="prev-page" onClick={() => dispatch(renderPrevPage())}>
            <PrevPageButton className="prev-button" />
          </div>
        ) : null}
        <div
          className={
            handleNextPage()
            // validUser ? "next-page" :
            // ? currentPage === 2 && (userInformation.whenUserHadCovid || userInformation.testDate &&numberOfAntibodies) :
          }
          onClick={() => dispatch(renderNextPage())}
        >
          <NextPageButton className="next-button" />
        </div>
      </div>
    </div>
  );
};
//"locked-button"
export default NavigationButtons;
