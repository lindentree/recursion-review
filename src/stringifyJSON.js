// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"'; //must be double quotes
  }
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    return '' + obj + '';
  }
  if (Array.isArray(obj)) { //[1,2,3,4]--> "[1,2,3,4]"
    return '[' + obj.map(item => stringifyJSON(item)) + ']';
  }
  if (typeof obj === 'object') {
    var array = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + array.join() + '}'; //convert arr to string
  }
};

// var str = '';
// str += obj;
// str = str + obj;

