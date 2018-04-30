
function addTogether() {
    if (arguments.length == 1){
        if(typeof(arguments[0]) !=='number') return undefined; 
          var firstArgument = arguments[0];
          function sum(x){
            if(typeof(x) !=='number') return undefined;
            return firstArgument + x;
          }
          return sum;
    }
        if(typeof(arguments[0]) !=='number' || typeof(arguments[1]) !== 'number') return undefined;
            return arguments[0] + arguments[1];
  }
  
  console.log(addTogether(2)([3]));
