const pattern = {
  rgb: /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  hsl: /^hsl\(\s*(-?\d+|-?\d*\.\d+)\s*,\s*(-?\d+|-?\d*\.\d+)%\s*,\s*(-?\d+|-?\d*\.\d+)%\s*\)$/,
}

const isColorCode = (value, colorCode) => {
  let patternCase = new RegExp(pattern[colorCode])
  if (value === null || patternCase === new RegExp('/(?:)/')) return

  return patternCase.test(value)
}

export default isColorCode
