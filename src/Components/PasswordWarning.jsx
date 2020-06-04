import React from "react";

export default function PasswordWarning(props) {
  return (
    <h5 style={{ display: props.hiddenState }} className="header5">
      {props.passwordHiddenMessage}
    </h5>
  );
}
