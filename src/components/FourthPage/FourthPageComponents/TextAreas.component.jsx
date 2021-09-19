import React from "react";

import { TextField } from "@material-ui/core";

const TextAreas = ({handleChange, firstTextareaValue ,secondTextareaValue}) => {
  return (
    <div className="textareas-container">
      <div className="first-textarea">
        <div className="textarea-label">
          <p className="question-texts">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
        </div>

        <TextField
          defaultValue={firstTextareaValue}
          onChange={handleChange}
          variant="outlined"
          multiline
          name="userThoughtsAboutMeetings"
          maxRows={20}
          minRows={8}
         
        />
      </div>
      <div className="second-textarea">
        <div className="textarea-label">
          <p className="question-text">რას ფიქრობ არსებულ გარემოზე:</p>
          <p className="question-texts">
            რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
          </p>
        </div>
        <TextField
          defaultValue={secondTextareaValue}
          variant="outlined"
          onChange={handleChange}
          multiline
          name="userThoughtsAboutEnviroment"
          minRows={8}
          maxRows={20}
   
          
        />
      </div>
    </div>
  );
};

export default TextAreas;
