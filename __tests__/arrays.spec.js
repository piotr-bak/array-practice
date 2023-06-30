const {
  _indexOf,
  _includes,
  _every,
  _some,
  _find,
  _findIndex,
  _flat,
  _map,
  _filter,
  _reduce,
  _slice,
  _forEach,
  _push,
  _pop,
  _shift,
  _unshift,
  _join,
  _concat,
} = require('../arrays');

describe('Array Methods', () => {
  let array = [];

  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });

  test('_indexOf should return the correct index when element is present', () => {
    expect(_indexOf(array, 3)).toBe(2);
  });

  test('_indexOf should return -1 when element is not present', () => {
    expect(_indexOf(array, 10)).toBe(-1);
  });

  // Additional test cases for _indexOf
  test('_indexOf should return -1 for an empty array', () => {
    expect(_indexOf([], 1)).toBe(-1);
  });

  test('_indexOf should handle negative indices correctly', () => {
    expect(_indexOf(array, 3, -4)).toBe(2);
    expect(_indexOf(array, 3, -1)).toBe(2);
    expect(_indexOf(array, 3, -7)).toBe(2);
  });

  test('_includes should return true when element is present', () => {
    expect(_includes(array, 3)).toBe(true);
  });

  test('_includes should return false when element is not present', () => {
    expect(_includes(array, 10)).toBe(false);
  });

  // Additional test cases for _includes
  test('_includes should return false for an empty array', () => {
    expect(_includes([], 1)).toBe(false);
  });

  test('_includes should handle negative indices correctly', () => {
    expect(_includes(array, 3, -4)).toBe(true);
    expect(_includes(array, 3, -1)).toBe(true);
    expect(_includes(array, 3, -7)).toBe(true);
  });

  test('_every should return true when all elements satisfy the condition', () => {
    expect(_every(array, (element) => element > 0)).toBe(true);
  });

  test('_every should return false when at least one element does not satisfy the condition', () => {
    expect(_every(array, (element) => element > 2)).toBe(false);
  });

  // Additional test cases for _every
  test('_every should return true for an empty array', () => {
    expect(_every([], () => true)).toBe(true);
  });

  test('_every should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    expect(_every(mixedArray, (element) => typeof element === 'number')).toBe(false);
    expect(_every(mixedArray, (element) => typeof element !== 'symbol')).toBe(true);
  });

  test('_some should return true when at least one element satisfies the condition', () => {
    expect(_some(array, (element) => element > 2)).toBe(true);
  });

  test('_some should return false when none of the elements satisfy the condition', () => {
    expect(_some(array, (element) => element > 5)).toBe(false);
  });

  // Additional test cases for _some
  test('_some should return false for an empty array', () => {
    expect(_some([], () => true)).toBe(false);
  });

  test('_some should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    expect(_some(mixedArray, (element) => typeof element === 'boolean')).toBe(true);
    expect(_some(mixedArray, (element) => typeof element === 'symbol')).toBe(false);
  });

  test('_find should find the first element that satisfies the condition', () => {
    const result = _find(array, (element) => element > 3);
    expect(result).toBe(4);
  });

  test('_find should return undefined when no element satisfies the condition', () => {
    const result = _find(array, (element) => element > 5);
    expect(result).toBeUndefined();
  });

  // Additional test cases for _find
  test('_find should return undefined for an empty array', () => {
    const result = _find([], () => true);
    expect(result).toBeUndefined();
  });

  test('_find should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    expect(_find(mixedArray, (element) => typeof element === 'string')).toBe('two');
    expect(_find(mixedArray, (element) => typeof element === 'symbol')).toBeUndefined();
  });

  test('_findIndex should find the index of the first element that satisfies the condition', () => {
    const result = _findIndex(array, (element) => element > 3);
    expect(result).toBe(3);
  });

  test('_findIndex should return -1 when no element satisfies the condition', () => {
    const result = _findIndex(array, (element) => element > 5);
    expect(result).toBe(-1);
  });

  // Additional test cases for _findIndex
  test('_findIndex should return -1 for an empty array', () => {
    const result = _findIndex([], () => true);
    expect(result).toBe(-1);
  });

  test('_findIndex should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    expect(_findIndex(mixedArray, (element) => typeof element === 'boolean')).toBe(2);
    expect(_findIndex(mixedArray, (element) => typeof element === 'symbol')).toBe(-1);
  });

  test('_flat should flatten a nested array', () => {
    const nestedArray = [1, [2, 3], [4, [5]]];
    const result = _flat(nestedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  // Additional test cases for _flat
  test('_flat should handle an empty array', () => {
    const result = _flat([]);
    expect(result).toEqual([]);
  });

  test('_flat should handle a deeply nested array', () => {
    const nestedArray = [1, [2, [3, [4, [5]]]]];
    const result = _flat(nestedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('_flat should handle different data types correctly', () => {
    const mixedArray = [1, 'two', [3, [4, ['five']]]];
    const result = _flat(mixedArray);
    expect(result).toEqual([1, 'two', 3, 4, 'five']);
  });

  test('_map should transform each element of the array', () => {
    const result = _map(array, (element) => element * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  // Additional test cases for _map
  test('_map should return an empty array for an empty array', () => {
    const result = _map([], () => { });
    expect(result).toEqual([]);
  });

  test('_map should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    const result = _map(mixedArray, (element) => typeof element);
    expect(result).toEqual(['number', 'string', 'boolean', 'undefined', 'object']);
  });

  test('_filter should return an array of elements that pass the condition', () => {
    const result = _filter(array, (element) => element % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  // Additional test cases for _filter
  test('_filter should return an empty array for an empty array', () => {
    const result = _filter([], () => true);
    expect(result).toEqual([]);
  });

  test('_filter should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    const result = _filter(mixedArray, (element) => typeof element === 'string');
    expect(result).toEqual(['two']);
  });

  test('_reduce should apply a function to each element and accumulate the result', () => {
    const result = _reduce(array, (acc, element) => acc + element, 0);
    expect(result).toBe(15);
  });

  // Additional test cases for _reduce
  test('_reduce should handle an empty array', () => {
    const result = _reduce([], () => { }, 0);
    expect(result).toBe(0);
  });

  test('_reduce should handle different data types correctly', () => {
    const mixedArray = [1, 'two', true, undefined, null];
    const result = _reduce(mixedArray, (acc, element) => acc + typeof element, '');
    expect(result).toBe('numberstringbooleanundefinedobject');
  });

  test('_slice should return a shallow copy of a portion of the array', () => {
    const result = _slice(array, 1, 3);
    expect(result).toEqual([2, 3]);
  });

  // Additional test cases for _slice
  test('_slice should handle an empty array', () => {
    const result = _slice([], 0, 2);
    expect(result).toEqual([]);
  });

  test('_slice should handle negative indices correctly', () => {
    const result = _slice(array, -3, -1);
    expect(result).toEqual([3, 4]);
  });

  test('_forEach should execute a provided function for each element in the array', () => {
    let sum = 0;
    _forEach(array, (element) => {
      sum += element;
    });
    expect(sum).toBe(15);
  });

  // Additional test cases for _forEach
  test('_forEach should not modify the array', () => {
    const originalArray = [...array];
    _forEach(array, () => { });
    expect(array).toEqual(originalArray);
  });

  test('_push should add elements to the end of the array and return the new length', () => {
    const result = _push(array, 6, 7);
    expect(result).toBe(7);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  // Additional test case for _push
  test('_push should return the correct length for an empty array', () => {
    const result = _push([], 1, 2, 3);
    expect(result).toBe(3);
  });

  test('_pop should remove and return the last element of the array', () => {
    const result = _pop(array);
    expect(result).toBe(5);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  // Additional test case for _pop
  test('_pop should return undefined for an empty array', () => {
    const result = _pop([]);
    expect(result).toBeUndefined();
  });

  test('_shift should remove and return the first element of the array', () => {
    const result = _shift(array);
    expect(result).toBe(1);
    expect(array).toEqual([2, 3, 4, 5]);
  });

  // Additional test case for _shift
  test('_shift should return undefined for an empty array', () => {
    const result = _shift([]);
    expect(result).toBeUndefined();
  });

  test('_unshift should add elements to the beginning of the array and return the new length', () => {
    const result = _unshift(array, -2, -1, 0);
    expect(result).toBe(8);
    expect(array).toEqual([-2, -1, 0, 1, 2, 3, 4, 5]);
  });

  // Additional test case for _unshift
  test('_unshift should return the correct length for an empty array', () => {
    const result = _unshift([], 1, 2, 3);
    expect(result).toBe(3);
  });

  test('_join should join all elements of the array into a string', () => {
    const result = _join(array, '-');
    expect(result).toBe('1-2-3-4-5');
  });

  // Additional test case for _join
  test('_join should return an empty string for an empty array', () => {
    const result = _join([], '-');
    expect(result).toBe('');
  });

  test('_concat should merge two or more arrays and return the result', () => {
    const result = _concat(array, [6, 7], [8, 9]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  // Additional test case for _concat
  test('_concat should return a new array for an empty array', () => {
    const result = _concat([], [1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
});
