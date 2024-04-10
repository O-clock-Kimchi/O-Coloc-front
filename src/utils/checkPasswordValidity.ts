const passwordIsValid = (string: string) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;
  if (string.match(passwordRegex)) {
    return true;
  }
  return null;
};

export default passwordIsValid;
