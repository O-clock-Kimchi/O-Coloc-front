const passwordIsValid = (string: string) => {
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*]).{8,}$/;
  if (string.match(passwordRegex)) {
    return true;
  }
  return null;
};

export default passwordIsValid;
