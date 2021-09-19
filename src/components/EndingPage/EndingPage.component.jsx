import React from "react";

import { ReactComponent as EndAnimationSmall } from "../../images/endanimationSmallSvg.svg";
import { ReactComponent as EndAnimationLarge } from "../../images/endAnimationLargeSvg.svg";

import "./EndingPage.styles.scss";

const EndingPage = () => {
  return (
    <div className="ending-page">
      <div className="ending-text-container">
        <div className="ending-text">მადლობა</div>
      </div>

      <EndAnimationLarge className="large-ending-animation" />

      <EndAnimationSmall className="small-ending-animation" />
    </div>
  );
};
export default EndingPage;
