const pattern = new RegExp(/^\s*/)

const isWhiteSpace = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
            return pattern.test(value)
}




export default isWhiteSpace
