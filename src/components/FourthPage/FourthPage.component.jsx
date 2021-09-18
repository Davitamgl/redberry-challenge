import React from "react";
import "./FourthPage.styles.scss";

import Question41 from "./FourthPageComponents/Question41.component";
import Question42 from "./FourthPageComponents/Question42.component";
import TextAreas from "./FourthPageComponents/TextAreas.component";
import { ReactComponent as FourthPageLogo } from "../../images/fourthPageLogo.svg";

import {
  getUserInformation,
  setUserInformation,
} from "../../redux/userDataSlice";

import { startEndingPage } from "../../redux/pageSlice";

import { useDispatch, useSelector } from "react-redux";

const FourthPage = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(getUserInformation);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInformation({ name: name, data: value }));
if(name === "submitButtonClicked" &&  value === "submit"){
  
  dispatch(startEndingPage());
}
  };

  return (
    <div className="fourth-page">
      <div className="fourth-page-components">
        <p className="starting-text">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის.
        </p>
        <p className="starting-text">
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
        <Question41
          handleChange={handleChange}
          checkedValue={userInformation.meetingEvery}
        />
        <Question42
          handleChange={handleChange}
          checkedValue={userInformation.workFromOfficePerWeek}
        />
        <TextAreas
          handleChange={handleChange}
          firstTextareaValue={userInformation.userThoughtsAboutMeetings}
          secondTextareaValue={userInformation.userThoughtsAboutEnviroment}
        />
        <div className="button-and-text-container">
          <div
            className={
              userInformation.submitButtonClicked &&
              !(
                userInformation.meetingEvery &&
                userInformation.workFromOfficePerWeek
              )
                ? "note-text"
                : "note-text-hidden"
            }
          >
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </div>
          <div className={"button-container"}>
            <button
              className="submit-button"
              name="submitButtonClicked"
              value={
                userInformation.meetingEvery &&
                userInformation.workFromOfficePerWeek
                  ? "submit"
                  : "dontSubmit"
              }
              onClick={handleChange}
            >
              დასრულება
            </button>
          </div>
        </div>
      </div>
      <span className="logo-container">
        <FourthPageLogo className="second-page-logo" />
      </span>
    </div>
  );
};

export default FourthPage;
