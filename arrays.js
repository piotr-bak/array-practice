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

function _slice (array) {

};

function _reverse (array) {


};
function _forEach (array) {

};

function _push (array) {

};

function _pop (array) {

};

function _shift (array) {

};

function _unshift (array) {

};

function _join (array) {

};

function _concat (array) {

};

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
