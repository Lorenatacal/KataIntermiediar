
function uniteUnique(arr) {
    var merged = [].concat.apply([], arguments);
    
     function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
     
    return merged.filter(onlyUnique);  
  }
  
  
  console.log(uniteUnique([5, 2, 1, 4], [2, 1]));
  
  