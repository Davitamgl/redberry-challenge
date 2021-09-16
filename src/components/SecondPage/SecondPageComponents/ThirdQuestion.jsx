import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";

import {
  getUserInformation,
  setUserInformation,
} from "../../../redux/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const ThirdQuestion = () => {
  const userInformation = useSelector(getUserInformation);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      setUserInformation({ name: "numberOfAntibodies", data: e.target.value })
    );
    
  };

  return (
    <div
      className={
        // userInformation.antiBodyTested === "yes"
        //   ? 
          "third-question-content"
          // : 
          // "content-hidden"
      }
    >
      <p className="question-texts">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*
      </p>
      <div className="inputs-container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            placeholder="დდ/თთ/წწ"
            autoOk
            value={userInformation.testDate}
            variant="inline"
            format="dd MMMM yyyy"
            onChange={(data) =>
              dispatch(
                setUserInformation({ name: "testDate", data: `${data}` })
              )
            }
            disableFuture
            className="material-input"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </MuiPickersUtilsProvider>

        <div className="date-input-container"></div>
        <div className="number-input-container">
          <input
            className="number-input"
            placeholder="ანტისხეულების რაოდენობა"
            type="number"
            name="numberOfAntibodies"
            value={userInformation.numberOfAntibodies}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdQuestion;
