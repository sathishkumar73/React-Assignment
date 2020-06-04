import React from "react";

export default function LoginButton(props) {
  return (
    <input
      type="submit"
      className="submit-button"
      value="Login"
      onClick={props.handleClick}
    />
  );
}
