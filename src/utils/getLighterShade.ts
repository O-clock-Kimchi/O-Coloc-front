const getLighterColor = (hexColor: string, percent: number): string => {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const delta = Math.floor((255 * percent) / 100);

  const newR = Math.min(r + delta, 255);
  const newG = Math.min(g + delta, 255);
  const newB = Math.min(b + delta, 255);

  const newHexColor = `#${newR.toString(16).padStart(2, '0')}${newG
    .toString(16)
    .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

  return newHexColor;
};

export default getLighterColor;
