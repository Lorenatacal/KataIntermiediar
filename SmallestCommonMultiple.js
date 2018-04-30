function smallestCommons(arr) {
    function validMultiple(mult, min, max) {
        for (var i = min; i <max; i++) {
            if (mult % i !== 0) {
                return false;
            }
        }

        return true;
    }
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var multiple = max;

    while (!validMultiple(multiple, min, max)) {
        multiple += max;
    }
    return multiple;
}
console.log(smallestCommons([9,5]));