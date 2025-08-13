import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns a new array containing only even numbers of that array', () => {
    const numberArray = [1, 2, 3, 4, 5, 6];
    const result = evenNumbers(numberArray);
    expect(result).toEqual([2, 4, 6]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted as dollars and cents (i.e. has two decimal points at most)', () => {
    const amountInCents = 1343;
    const result = toDollars(amountInCents);
    expect(result).toEqual('$13.43');
  });
});

describe('divideBy', () => {
  it('returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numberArray = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numberArray, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('does not modify the original array', () => {
    const numberArray = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numberArray, divisor);
    expect(numberArray).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('multiplyBy', () => {
  it('modifies an object by multiplying the value of each key', () => {
    const numObj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const multiplier = 2;
    const result = multiplyBy(numObj, multiplier);
    expect(result).toEqual({ one: 2, two: 4, three: 6, four: 8, five: 10 });
  });
  it('works only if that value is a number', () => {
    const numObj = {
      one: 1,
      two: 'two',
      three: true,
      four: false,
      five: null,
      six: undefined,
    };
    const multiplier = 2;
    const result = multiplyBy(numObj, multiplier);
    expect(result).toEqual({
      one: 2,
      two: 'two',
      three: true,
      four: false,
      five: null,
      six: undefined,
    });
  });
});
