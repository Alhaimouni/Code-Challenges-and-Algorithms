// Write your test here
const { findSum, breadthFirst } = require('./challenge01');

describe('HashTable Challenge-01', () => {
  it('findSum function testing', () => {
    const bst = {
      value: 7,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 9,
        left: null,
        right: {
          value: 14,
          left: null,
          right: null,
        },
      }
    }
    let isFind = findSum(bst, 3);
    expect(isFind).toEqual(true);
    let isNotFind = findSum(bst, 4);
    expect(isNotFind).toEqual(false);
  });
});