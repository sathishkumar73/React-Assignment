import React from "react";

export default function EmailInput(props) {
  return (
    <input
      type="email"
      placeholder="Enter your Email"
      className="username"
      style={{ borderColor: props.style }}
      value={props.userName}
      onChange={props.onUserNameChange}
    />
  );
}
