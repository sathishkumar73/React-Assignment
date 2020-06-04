import React from "react";

export default function EmailWarning(props) {
  return (
    <h5
      value={props.userName}
      style={{ display: props.hiddenState }}
      className="header5"
    >
      {props.emailHiddenMessage}
    </h5>
  );
}
