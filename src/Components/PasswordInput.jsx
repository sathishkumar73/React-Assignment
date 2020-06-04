import React from "react";

export default function PasswordInput(props) {
  return (
    <input
      type="password"
      placeholder="Enter your password"
      className="password"
      style={{ borderColor: props.passwordColor }}
      value={props.password}
      onChange={props.onUserPasswordChange}
    />
  );
}
