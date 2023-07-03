describe('Array Methods', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });

  // Utility Methods

  test('_toString should return a string representation of the array', () => {
    const result = _toString(array);
    expect(result).toBe('1,2,3,4,5');
  });

  // Additional test cases for _toString
  test('_toString should return an empty string for an empty array', () => {
    const result = _toString([]);
    expect(result).toBe('');
  });

  test('_isArray should return true if the argument is an array', () => {
    expect(_isArray(array)).toBe(true);
  });

  test('_isArray should return false if the argument is not an array', () => {
    expect(_isArray('not an array')).toBe(false);
  });

  test('_length should return the length of the array', () => {
    expect(_length(array)).toBe(5);
  });

  // Additional test cases for _length
  test('_length should return 0 for an empty array', () => {
    expect(_length([])).toBe(0);
  });

  test('_fill should fill all elements of the array with a static value', () => {
    _fill(array, 0);
    expect(array).toEqual([0, 0, 0, 0, 0]);
  });

  // Additional test cases for _fill
  test('_fill should not modify an empty array', () => {
    const emptyArray = [];
    _fill(emptyArray, 0);
    expect(emptyArray).toEqual([]);
  });

  test('_copyWithin should copy a sequence of elements within the array to a specific position', () => {
    _copyWithin(array, 0, 3, 5);
    expect(array).toEqual([4, 5, 3, 4, 5]);
  });

  // Additional test cases for _copyWithin
  test('_copyWithin should not modify an empty array', () => {
    const emptyArray = [];
    _copyWithin(emptyArray, 0, 1, 3);
    expect(emptyArray).toEqual([]);
  });
});
