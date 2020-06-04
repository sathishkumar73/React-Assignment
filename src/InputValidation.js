export default function validateInput(userName, password) {
  let regexForEmail = /\S+@\S+\.\S+/;
  let isValidEmail = regexForEmail.test(userName);
  let regexForPassword = /^(?=.*?[A-Z]).{6,}$/;
  let isValidPassword = regexForPassword.test(password);

  let bothAreValid = isValidEmail && isValidPassword;
  return [bothAreValid, !isValidEmail, !isValidPassword];
}
