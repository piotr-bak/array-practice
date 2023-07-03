describe('Array Methods', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });

  // Transformation Methods

  // Mutative Methods

  test('_pop should remove the last element from the array and return it', () => {
    const lastElement = _pop(array);
    expect(lastElement).toBe(5);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  // Additional test cases for _pop
  test('_pop should return undefined for an empty array', () => {
    const lastElement = _pop([]);
    expect(lastElement).toBeUndefined();
  });

  test('_shift should remove the first element from the array and return it', () => {
    const firstElement = _shift(array);
    expect(firstElement).toBe(1);
    expect(array).toEqual([2, 3, 4, 5]);
  });

  // Additional test cases for _shift
  test('_shift should return undefined for an empty array', () => {
    const firstElement = _shift([]);
    expect(firstElement).toBeUndefined();
  });

  test('_push should add elements to the end of the array and return the new length', () => {
    const length = _push(array, 6, 7);
    expect(length).toBe(7);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('_unshift should add elements to the beginning of the array and return the new length', () => {
    const length = _unshift(array, -2, -1, 0);
    expect(length).toBe(8);
    expect(array).toEqual([-2, -1, 0, 1, 2, 3, 4, 5]);
  });

  test('_splice should remove elements from the array and optionally add new elements', () => {
    const removedElements = _splice(array, 1, 2, 'a', 'b', 'c');
    expect(removedElements).toEqual([2, 3]);
    expect(array).toEqual([1, 'a', 'b', 'c', 4, 5]);
  });

  // Additional test cases for _splice
  test('_splice should return an empty array for no removed elements', () => {
    const removedElements = _splice(array, 0, 0, 'a', 'b', 'c');
    expect(removedElements).toEqual([]);
    expect(array).toEqual(['a', 'b', 'c', 1, 2, 3, 4, 5]);
  });

  // Non-mutative Methods

  test('_flat should flatten a nested array to the specified depth', () => {
    const nestedArray = [1, [2, [3, [4, 5]]]];
    const result = _flat(nestedArray, 2);
    expect(result).toEqual([1, 2, 3, [4, 5]]);
  });

  test('_map should create a new array with the results of applying a function to each element', () => {
    const result = _map(array, (element) => element * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  // Additional test cases for _map
  test('_map should return an empty array for an empty array', () => {
    const result = _map([], () => { });
    expect(result).toEqual([]);
  });

  test('_filter should create a new array with all elements that pass the condition', () => {
    const result = _filter(array, (element) => element % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  // Additional test cases for _filter
  test('_filter should return an empty array for an empty array', () => {
    const result = _filter([], () => true);
    expect(result).toEqual([]);
  });

  test('_reduce should apply a function to reduce the array to a single value', () => {
    const result = _reduce(array, (accumulator, element) => accumulator + element, 0);
    expect(result).toBe(15);
  });

  // Additional test cases for _reduce
  test('_reduce should return the initial value for an empty array', () => {
    const result = _reduce([], () => { }, 'initial');
    expect(result).toBe('initial');
  });

  test('_slice should create a new array from a specified start to end (end not included)', () => {
    const result = _slice(array, 1, 4);
    expect(result).toEqual([2, 3, 4]);
  });

  // Additional test cases for _slice
  test('_slice should return the whole array when no start and end indices are provided', () => {
    const result = _slice(array);
    expect(result).toEqual(array);
  });

  test('_join should join all elements of an array into a string using the specified separator', () => {
    const result = _join(array, '-');
    expect(result).toBe('1-2-3-4-5');
  });

  // Additional test cases for _join
  test('_join should return an empty string for an empty array', () => {
    const result = _join([], ',');
    expect(result).toBe('');
  });

  test('_concat should concatenate two or more arrays', () => {
    const array2 = [6, 7];
    const result = _concat(array, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  // Additional test cases for _concat
  test('_concat should return a new array when no arrays are provided', () => {
    const result = _concat(array);
    expect(result).toEqual(array);
    expect(result).not.toBe(array);
  });

  test('_reverse should reverse the elements in the array', () => {
    _reverse(array);
    expect(array).toEqual([5, 4, 3, 2, 1]);
  });

  // Additional test cases for _reverse
  test('_reverse should return the same array instance', () => {
    const reversedArray = _reverse(array);
    expect(reversedArray).toBe(array);
  });

  test('_toSorted should create a new array with the elements sorted in ascending order', () => {
    const result = _toSorted(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  // Additional test cases for _toSorted
  test('_toSorted should return an empty array for an empty array', () => {
    const result = _toSorted([]);
    expect(result).toEqual([]);
  });

  test('_toReversed should create a new array with the elements in reverse order', () => {
    const result = _toReversed(array);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  // Additional test cases for _toReversed
  test('_toReversed should return an empty array for an empty array', () => {
    const result = _toReversed([]);
    expect(result).toEqual([]);
  });

  test('_toSpliced should create a new array with the elements spliced at the specified index', () => {
    const result = _toSpliced(array, 2, 0, 'a', 'b');
    expect(result).toEqual([1, 2, 'a', 'b', 3, 4, 5]);
  });

  // Additional test cases for _toSpliced
  test('_toSpliced should return a new array with elements inserted at the beginning', () => {
    const result = _toSpliced(array, 0, 0, 'a', 'b');
    expect(result).toEqual(['a', 'b', 1, 2, 3, 4, 5]);
  });

  test('_with should create a new array with additional elements', () => {
    const result = _with(array, 6, 7);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  // Additional test cases for _with
  test('_with should return a new array with the same elements for no additional elements', () => {
    const result = _with(array);
    expect(result).toEqual(array);
    expect(result).not.toBe(array);
  });

  test('_forEach should iterate over each element in the array and apply a function', () => {
    const resultArray = [];
    _forEach(array, (element) => resultArray.push(element * 2));
    expect(resultArray).toEqual([2, 4, 6, 8, 10]);
  });

  // Additional test cases for _forEach
  test('_forEach should not modify the original array', () => {
    const resultArray = [];
    _forEach(array, (element) => {
      resultArray.push(element);
      _push(array, element * 2);
    });
    expect(resultArray).toEqual([1, 2, 3, 4, 5]);
    expect(array).toEqual([1, 2, 3, 4, 5, 2, 4, 6, 8, 10]);
  });
});
