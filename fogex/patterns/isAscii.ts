const pattern = new RegExp(/^[\x00-\x7F]*$/)

const isAscii = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isAscii
