import React, { useState } from "react";
import axios from "axios";
import SigninDetails from "./SigninDetails";
import Userinfo from "./Userinfo";
import inputValidation from "../InputValidation.js";

function Login(props) {
  // to hide the warning message.
  let [hiddenState, setHiddenState] = useState("none");
  // to change the color of the emailText field
  let [color, setColor] = useState("grey");
  // to change the color of the password text field
  let [pColor, setPColor] = useState("grey");
  // Initially both the password and username should be empty, making placeholder visible.
  let [password, setPassword] = useState("");
  let [userName, setUserName] = useState("");
  // to show the mail warning message
  let [emailHiddenMessage, setEmailHiddenMessage] = useState(
    "This is required"
  );
  // to show the password warning message
  let [passwordHiddenMessage, setPasswordHiddenMessage] = useState(
    "This is required"
  );

  // Get request call
  let apiCall = () => {
    axios
      .get("https://www.mocky.io/v2/5d9d9219310000153650e30b")
      .then(function(response) {
        props.callback(false);
        changeToDefault();
        alert("Login successful");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  function changeToDefault() {
    setUserName("");
    setPassword("");
    setHiddenState("none");
    setColor("grey");
    setPColor("grey");
  }

  function handleClick(event) {
    let [isValid, isEmailInvalid, isPasswordInvalid] = inputValidation(
      userName,
      password
    );
    // Inorder to avoid the form submission.
    event.preventDefault();

    if (isValid) {
      // if both the inputs are correct.
      props.callback(true);
      apiCall();
    } else {
      setColor("red");
      setPColor("red");
      setHiddenState("block");
      if (isEmailInvalid && isPasswordInvalid) {
        // show both the red message
        setEmailHiddenMessage("This is required. Please enter an valid email");
        setPasswordHiddenMessage(
          "This is required. Please enter an valid password"
        );
      } else if (isEmailInvalid) {
        // show the email message
        setEmailHiddenMessage("Please Enter an valid email");
        setPasswordHiddenMessage("");
        setPColor("grey");
      } else if (isPasswordInvalid) {
        // show the password message
        setEmailHiddenMessage("");
        setColor("grey");
        setPasswordHiddenMessage(
          "Password should contain atleast 1 uppercase and min 6 characters."
        );
      }
    }
  }

  // Necessary evil
  function onUserNameChange(event) {
    let value = event.target.value;
    setUserName(value);
  }

  // Necessary evil
  function onUserPasswordChange(event) {
    let value = event.target.value;
    setPassword(value);
  }

  return (
    <div className="login-container">
      <form action="/">
        <SigninDetails />
        <Userinfo
          color={color}
          userName={userName}
          onUserNameChange={onUserNameChange}
          email={userName}
          password={password}
          onUserPasswordChange={onUserPasswordChange}
          handleClick={handleClick}
          hiddenState={hiddenState}
          hiddenMessage={emailHiddenMessage}
          passwordHiddenMessage={passwordHiddenMessage}
          passwordColor={pColor}
        />
      </form>
    </div>
  );
}

export default Login;
