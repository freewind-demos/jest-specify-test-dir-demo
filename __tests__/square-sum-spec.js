jest.unmock('../square-sum');

describe('square-sum', () => {
  it('[1,2,5]', () => {
    jest.mock('../square', () => {
      return jest.fn((n) => n * n);
    });
    const squareSum = require('../square-sum');
    const result = squareSum([1, 2, 5]);
    expect(result).toEqual(30);
  })
})