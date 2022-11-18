function componentToHex(c: any) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(...args: number[]) {
  return '#' + componentToHex(args[0]) + componentToHex(args[1]) + componentToHex(args[2]);
}

export default rgbToHex;
