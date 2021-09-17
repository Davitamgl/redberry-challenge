import React from "react";
import "./FourthPage.styles.scss";

import Question41 from "./FourthPageComponents/Question41.component";
import {
  getUserInformation,
  setUserInformation,
  resetUserInfo,
} from "../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Question42 from "./FourthPageComponents/Question42.component";

const FourthPage = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(getUserInformation);
  console.log(userInformation);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + value);

    dispatch(setUserInformation({ name: name, data: value }));
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
      </div>
    </div>
  );
};

export default FourthPage;
