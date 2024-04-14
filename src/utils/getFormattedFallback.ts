const getFormattedFallback = (string: string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const secondLetter = string.charAt(1);
  return firstLetter + secondLetter;
};

export default getFormattedFallback;
