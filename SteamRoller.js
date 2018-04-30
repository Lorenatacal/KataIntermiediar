
function steamrollArray(arr) {
    // I'm a steamroller, baby
    var merged = [].concat.apply([], arr);
    var result = [].concat.apply([], merged);
    var finalResult = [].concat.apply([], result);
    return finalResult;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));