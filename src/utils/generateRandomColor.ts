// Snippet from https://www.30secondsofcode.org/js/s/random-hex-color-code/

const randomHexColor = () => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${n.slice(0, 6)}`;
};

export default randomHexColor;
