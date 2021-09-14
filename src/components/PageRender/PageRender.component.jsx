// import React from "react";
// import { sselectRender } from "../../redux/pageSlice";

// import {  useSelector } from "react-redux";

// import StartingPage from "../StartingPage/StartingPage.component";
// import FirstPage from "../FirstPage/FirstPage.component";
// import SecondPage from "../SecondPage/SecondPage.component";
// import ThirdPage from "../ThirdPage/ThirdPage.component";
// import FourthPage from "../FourthPage/FourthPage.component";

// const PageRender = (props) => {
//   const data = useSelector(sselectRender);
//   const filteredData = Object.keys(data).find((key) => data[key] === true);
//   console.log(typeof filteredData);
//   console.log( filteredData);
//     // const conditionalRender = (String, result) => {
//     //   console.log(result + "2");
//     //   switch (result) {
//     //     case "startingPage":
//     //       console.log("firstpage--");
//     //     case "firstPage":
//     //       return <FirstPage />;
//     //     case "secondPage":
//     //       return <SecondPage />;
//     //     case "thirdPage":
//     //       return <ThirdPage />;
//     //     case "fourthPage":
//     //       return <FourthPage />;

//     //     default:
//     //       console.log("default");
//     //   }
//     // };

//   const IsTrue = (e) => {
//     if (e === "startingPage") {
//         return <FirstPage />
//       console.log("yess");
//     } else {
//       console.log("false");
//     }
//   };
//   return (
//   <button></button>
//   );
// };


// export default PageRender;
