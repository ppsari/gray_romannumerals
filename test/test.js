const chai = require('chai');
const assert = chai.assert;
const romans = require('../index.js');

describe('Convert To Roman Old Version', () => {
  it('should returns I if input is 1', () => {
    assert.equal(romans.roman(1), 'I')
  })
  it('should returns IIII if input is 4', () => {
    assert.equal(romans.roman(4), 'IV')
  })
  it('should returns V if input is 5', () => {
    assert.equal(romans.roman(5), 'V')
  })
  it('should returns VIIII if input is 9', () => {
    assert.equal(romans.roman(9), 'IX')
  })
  it('should returns XIII if input is 13', () => {
    assert.equal(romans.roman(13), 'XIII')
  })
  it('should returns LIIII if input is 54', () => {
    assert.equal(romans.roman(54), 'LIV')
  })
  it('should returns LV if input is 55', () => {
    assert.equal(romans.roman(55), 'LV')
  })
  it('should returns MCDLIII if input is 1453', () => {
    assert.equal(romans.roman(1453), 'MCDLIII')
  })
  it('should returns MDCXLVI if input is 1646', () => {
    assert.equal(romans.roman(1646), 'MDCXLVI')
  })
})
