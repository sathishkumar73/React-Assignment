import React from "react";
import EmailInput from "./EmailInput.jsx";
import EmailWarning from "./EmailWarning.jsx";
import PasswordInput from "./PasswordInput.jsx";
import PasswordWarning from "./PasswordWarning.jsx";
import LoginButton from "./LoginButton.jsx";

export default function Userinfo(props) {
  return (
    <div>
      <EmailInput
        style={props.color}
        userName={props.userName}
        onUserNameChange={props.onUserNameChange}
      />
      <EmailWarning
        email={props.userName}
        emailHiddenMessage={props.hiddenMessage}
        hiddenState={props.hiddenState}
      />
      <PasswordInput
        passwordColor={props.passwordColor}
        password={props.password}
        onUserPasswordChange={props.onUserPasswordChange}
      />
      <PasswordWarning
        hiddenState={props.hiddenState}
        passwordHiddenMessage={props.passwordHiddenMessage}
      />
      <LoginButton handleClick={props.handleClick} />
    </div>
  );
}
