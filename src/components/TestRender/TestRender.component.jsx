import React from "react";

import FirstPage from "../FirstPage/FirstPage.component";
import SecondPage from "../SecondPage/SecondPage.component";
import ThirdPage from "../ThirdPage/ThirdPage.component";
import FourthPage from "../FourthPage/FourthPage.component";

import { getCurrentPage } from "../../redux/pageSlice";
import { useSelector } from "react-redux";

const TestRender = () => {
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

export default TestRender;

// const conditionalRender = (String, result) => {
//     console.log(result + "2");
//     switch (result) {
//       case "startingPage":
//         console.log("firstpage--");
//       case "firstPage":
//         return <FirstPage />;
//       case "secondPage":
//         return <SecondPage />;
//       case "thirdPage":
//         return <ThirdPage />;
//       case "fourthPage":
//         return <FourthPage />;

//       default:
//         console.log("default");
//     }
//   };

// const TestRender = (props) => {
//   const currentPage = useSelector(getCurrentPage)
//   console.log(currentPage)
//   const data = Object.values(props);

//   switch (data[0]) {
//     case "startingPage":
//       return <StartingPage />;
//     case "firstPage":
//       return <FirstPage />;
//     case "secondPage":
//       return <SecondPage />;
//     case "thirdPage":
//       return <ThirdPage />;
//     case "fourthPage":
//       return <FourthPage />;

//     default:
//       console.log("default");
//   }
// };
