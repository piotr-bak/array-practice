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
  _sort,
  _reverse,
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

  test('_includes should return true when element is present', () => {
    expect(_includes(array, 3)).toBe(true);
  });

  test('_includes should return false when element is not present', () => {
    expect(_includes(array, 10)).toBe(false);
  });

  test('_every should return true when all elements satisfy the condition', () => {
    expect(_every(array, (element) => element > 0)).toBe(true);
  });

  test('_every should return false when at least one element does not satisfy the condition', () => {
    expect(_every(array, (element) => element > 2)).toBe(false);
  });

  test('_some should return true when at least one element satisfies the condition', () => {
    expect(_some(array, (element) => element > 2)).toBe(true);
  });

  test('_some should return false when none of the elements satisfy the condition', () => {
    expect(_some(array, (element) => element > 5)).toBe(false);
  });

  test('_find should find the first element that satisfies the condition', () => {
    const result = _find(array, (element) => element > 3);
    expect(result).toBe(4);
  });

  test('_find should return undefined when no element satisfies the condition', () => {
    const result = _find(array, (element) => element > 5);
    expect(result).toBeUndefined();
  });

  test('_findIndex should find the index of the first element that satisfies the condition', () => {
    const result = _findIndex(array, (element) => element > 3);
    expect(result).toBe(3);
  });

  test('_findIndex should return -1 when no element satisfies the condition', () => {
    const result = _findIndex(array, (element) => element > 5);
    expect(result).toBe(-1);
  });

  test('_flat should flatten a nested array', () => {
    const nestedArray = [1, [2, 3], [4, [5]]];
    const result = _flat(nestedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('_map should transform each element of the array', () => {
    const result = _map(array, (element) => element * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  test('_filter should return an array of elements that pass the condition', () => {
    const result = _filter(array, (element) => element % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test('_reduce should apply a function to each element and accumulate the result', () => {
    const result = _reduce(array, (acc, element) => acc + element, 0);
    expect(result).toBe(15);
  });

  test('_slice should return a shallow copy of a portion of the array', () => {
    const result = _slice(array, 1, 3);
    expect(result).toEqual([2, 3]);
  });

  test('_reverse should reverse the order of elements in the array', () => {
    const result = _reverse(array);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  test('_forEach should execute a provided function for each element in the array', () => {
    let sum = 0;
    _forEach(array, (element) => {
      sum += element;
    });
    expect(sum).toBe(15);
  });

  test('_push should add elements to the end of the array and return the new length', () => {
    const result = _push(array, 6, 7);
    expect(result).toBe(7);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('_pop should remove and return the last element of the array', () => {
    const result = _pop(array);
    expect(result).toBe(5);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('_shift should remove and return the first element of the array', () => {
    const result = _shift(array);
    expect(result).toBe(1);
    expect(array).toEqual([2, 3, 4, 5]);
  });

  test('_unshift should add elements to the beginning of the array and return the new length', () => {
    const result = _unshift(array, 0, -1);
    expect(result).toBe(7);
    expect(array).toEqual([0, -1, 1, 2, 3, 4, 5]);
  });

  test('_join should join all elements of the array into a string with a specified separator', () => {
    const result = _join(array, '-');
    expect(result).toBe('1-2-3-4-5');
  });

  test('_concat should concatenate multiple arrays and return a new array', () => {
    const array2 = [6, 7, 8];
    const result = _concat(array, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  // Rest of the test cases
  // ...
});
