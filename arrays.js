function _indexOf (array, element) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === element) return i;
  }
  return -1;
};

function _includes (array, element) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === element) return true;
  }
  return false;
};

function _every (array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
};

function _some (array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
};

function _find (array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i])) {
      return array[i];
    }
  }
};

function _findIndex (array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
};

function _flat (array) {
  const result = [];

  const pushEl = (arr) => {
    for (let i = 0; i < arr.length; ++i) {
      if (Array.isArray(arr[i])) {
        pushEl(arr[i])
      } else {
        result[result.length] = arr[i];
      }
    }
  }
  pushEl(array);
  return result;
};

function _map (array, callback) {
  const result = [];
  for (let i = 0; i < array.length; ++i) {
    result[result.length] = callback(array[i]);
  }
  return result;
};

function _filter (array, callback) {
  const result = [];
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i])) {
      result[result.length] = array[i];
    }
  }
  return result;
};

function _reduce (array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; ++i) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

function _slice (array, start, end) {
  const result = [];
  const checkStart = () => {
    if (start < 0) start += array.length;
  }
  const checkEnd = () => {
    if (end < 0) end += array.length;
    if (end < -array.length) end = 0;
    if (end >= array.length) end = array.length;
    if (end < start) return [];
  }
  checkStart();
  checkEnd();
  for (let i = start; i < end; ++i) {
    result[result.length] = array[i];
  }
  return result;
};

function _reverse (array) {
  let temp = [];
  for (let i = array.length; i >= 0; --i) {
    temp[temp.length] = array[i];
  }
}


function _forEach (array, callback) {
  for (let i = 0; i < array.length; ++i) {
    callback(array[i]);
  }
};

function _push (array, ...items) {
  const initialLen = array.length;
  for (let i = 0; i < items.length; ++i) {
    array[initialLen + i] = items[i];
  }
  return array.length;
}

function _pop (array) {
  if (!array || array.length === 0) return;
  const lastEl = array[array.length - 1];
  array.length -= 1;
  return lastEl;
};

function _shift (array) {
  if (!array || array.length === 0) return;
  const firstEl = array[0];
  for (let i = 0; i < array.length; ++i) {
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return firstEl;
};

function _unshift (array, ...items) {
  const newLen = array.length + items.length;
  const offset = newLen - array.length;
  for (let i = array.length - 1; i >= 0; --i) {
    array[i + offset] = array[i];
  }
  for (let i = 0; i < items.length; ++i) {
    array[i] = items[i]
  }
  return array.length;
};

function _join (array, separator) {
  let result = '';
  for (let i = 0; i < array.length; ++i) {
    result += array[i];

    if (i !== array.length - 1) {
      result += separator;
    }
  }
  return result;
};

function _concat (...arrays) {
  const result = [];
  let length = 0;
  for (let i = 0; i < arrays.length; i++) {
    const currentArray = arrays[i];
    for (let j = 0; j < currentArray.length; j++) {
      result[length] = currentArray[j];
      length++;
    }
  }
  return result;
}

module.exports = {
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
  _reverse,
  _forEach,
  _push,
  _pop,
  _shift,
  _unshift,
  _join,
  _concat,
}
