import React from "react";

import FirstPage from "../FirstPage/FirstPage.component";
import SecondPage from "../SecondPage/SecondPage.component";
import ThirdPage from "../ThirdPage/ThirdPage.component";
import FourthPage from "../FourthPage/FourthPage.component";

import { getCurrentPage } from "../../redux/pageSlice";
import { useSelector } from "react-redux";

const RenderPage = () => {
  const currentPage = useSelector(getCurrentPage);
  

  switch (currentPage) {
    case 1:
      return <FirstPage />;
    case 2:
      return <SecondPage />;
    case 3:
      return <ThirdPage />;
    case 4:
      return <FourthPage />;

    default:
      return <FirstPage />;
  }
};

export default RenderPage;

