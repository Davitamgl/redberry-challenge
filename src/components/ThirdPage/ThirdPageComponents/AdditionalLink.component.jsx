import React from "react";

import {
  getUserInformation,
  setUserInformation,
} from "../../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const AdditionalLink = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(getUserInformation);

  const handleClick = () => {
    
    dispatch(setUserInformation({ name: "userClickedOnLink", data: "yes" }));
  };

  return (
    <div className="link-container">
      {userInformation.vaccinationPhase ===
      "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" ? (
        <div className="link-and-text-container">
          <p className="link-text">რომ არ გადადო,</p>
          <p className="link-text">ბარემ ახლავე დარეგისტრირდი</p>
          <a
            onClick={handleClick}
            className="booking-link"
            href="https://booking.moh.gov.ge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://booking.moh.gov.ge/
          </a>
        </div>
      ) : userInformation.whatUserIsWaitingFor === "არ ვგეგმავ" ? (
        <div className="link-and-text-container">
          <a
          onClick={handleClick}
            className="booking-link"
            href="https://booking.moh.gov.ge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="emoji">👉</span> https://booking.moh.gov.ge/
          </a>
        </div>
      ) : userInformation.whatUserIsWaitingFor ===
        "გადატანილი მაქვს და ვგეგმავ აცრას" ? (
        <div className="link-and-text-container">
          <p className="additional-info">
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
            ვაქცინის გაკეთება.
          </p>
          <div className="additional-wrapper">
            <p className="link-text">რეგისტრაციის ბმული</p>
            <a
            onClick={handleClick}
              className="booking-link"
              href="https://booking.moh.gov.ge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="emoji">👉</span> https://booking.moh.gov.ge/
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdditionalLink;
