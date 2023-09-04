const {
  _indexOf,
  _includes,
  _every,
  _some,
  _find,
  _findIndex,
} = require('../analysis');

describe('Array Methods', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });

  // Analytical Methods

  test('_indexOf should return the index of the first occurrence of an element', () => {
    expect(_indexOf(array, 3)).toBe(2);
  });

  test('_indexOf should return -1 if the element is not found in the array', () => {
    expect(_indexOf(array, 6)).toBe(-1);
  });

  // Additional test cases for _indexOf
  test('_indexOf should return -1 for an empty array', () => {
    expect(_indexOf([], 1)).toBe(-1);
  });

  test('_indexOf should work correctly with NaN values', () => {
    expect(_indexOf([NaN, 2, NaN], NaN)).toBe(0);
  });

  test('_includes should return true if the array contains the specified element', () => {
    expect(_includes(array, 3)).toBe(true);
  });

  test('_includes should return false if the array does not contain the specified element', () => {
    expect(_includes(array, 6)).toBe(false);
  });

  // Additional test cases for _includes
  test('_includes should return false for an empty array', () => {
    expect(_includes([], 1)).toBe(false);
  });

  test('_every should return true if all elements satisfy the condition', () => {
    expect(_every(array, (element) => element > 0)).toBe(true);
  });

  test('_every should return false if at least one element does not satisfy the condition', () => {
    expect(_every(array, (element) => element > 1)).toBe(false);
  });

  // Additional test cases for _every
  test('_every should return true for an empty array', () => {
    expect(_every([], () => false)).toBe(true);
  });

  test('_some should return true if at least one element satisfies the condition', () => {
    expect(_some(array, (element) => element > 4)).toBe(true);
  });

  test('_some should return false if no element satisfies the condition', () => {
    expect(_some(array, (element) => element > 5)).toBe(false);
  });

  // Additional test cases for _some
  test('_some should return false for an empty array', () => {
    expect(_some([], () => true)).toBe(false);
  });

  test('_find should return the first element that satisfies the condition', () => {
    const result = _find(array, (element) => element > 3);
    expect(result).toBe(4);
  });

  test('_find should return undefined if no element satisfies the condition', () => {
    const result = _find(array, (element) => element > 5);
    expect(result).toBeUndefined();
  });

  // Additional test cases for _find
  test('_find should return undefined for an empty array', () => {
    const result = _find([], () => true);
    expect(result).toBeUndefined();
  });

  test('_findIndex should return the index of the first element that satisfies the condition', () => {
    const result = _findIndex(array, (element) => element > 2);
    expect(result).toBe(2);
  });

  test('_findIndex should return -1 if no element satisfies the condition', () => {
    const result = _findIndex(array, (element) => element > 5);
    expect(result).toBe(-1);
  });

  // Additional test cases for _findIndex
  test('_findIndex should return -1 for an empty array', () => {
    const result = _findIndex([], () => true);
    expect(result).toBe(-1);
  });
});
