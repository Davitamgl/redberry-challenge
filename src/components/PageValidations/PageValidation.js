import { getCurrentPage } from "../../redux/pageSlice";
import { useSelector } from "react-redux";
import { getIsUserValid, getUserInformation } from "../../redux/userDataSlice";

const PageValidation = () => {
  const validUser = useSelector(getIsUserValid);
  const userInformation = useSelector(getUserInformation);
  const currentPage = useSelector(getCurrentPage);

  if (currentPage === 1 && validUser) {
    return "next-page";
  } else if (
    (currentPage === 2 && userInformation.userHadCovid === "არა") ||
    (currentPage === 2 && userInformation.userHadCovid === "ახლა მაქვს") ||
    (currentPage === 2 &&
      (userInformation.whenUserHadCovid ||
        (userInformation.testDate && userInformation.numberOfAntibodies)))
    // (currentPage === 2 && userInformation.userHadCovid ) ||
  ) {
    return "next-page";
  } else if (
    currentPage === 3 &&
    (userInformation.whatUserIsWaitingFor || userInformation.vaccinationPhase)
  ) {
    return "next-page";
  } else if (currentPage === 4) return "no-button";
  //  else if ( currentPage === 3 &&
  //   (userInformation.whenUserHadCovid ||
  //     (userInformation.testDate && userInformation.numberOfAntibodies))) {
  // }
  else {
    return "locked-button";
  }
};

export default PageValidation;
