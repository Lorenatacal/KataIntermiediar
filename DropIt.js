function dropElements(arr, func) {
  var result = arr;
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) break;
    if (func(arr[i]) === false) {
      result = result.slice(1);
    }
  }
  return result;
}

console.log(
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
);
