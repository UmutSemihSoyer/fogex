import isHash from '../fogex/patterns/isHash'

it('should return true for valid hash values', () => {
  expect(isHash('#abc')).toBe(true)
})
