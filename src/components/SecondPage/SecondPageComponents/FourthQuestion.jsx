import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";

import {
  getUserInformation,
  setUserInformation,
} from "../../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const FourthQuestion = () => {
  const userInformation = useSelector(getUserInformation);
  const dispatch = useDispatch();

  return (
    <div
      className={
        userInformation.antiBodyTested === "no"
          ? "third-question-content"
          : "content-hidden"
      }
    >
      <p className="question-texts">
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
      </p>
      <div className="inputs-container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
           placeholder="დდ/თთ/წწ"
            autoOk
            value={userInformation.whenUserHadCovid}
            variant="inline"
            className="material-input"
            format="dd MMMM yyyy"
            onChange={(date) =>
              dispatch(
                setUserInformation({ name: "whenUserHadCovid", data: `${date}` })
              )
            }
            disableFuture
            InputProps={{
              disableUnderline: true,
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default FourthQuestion;
