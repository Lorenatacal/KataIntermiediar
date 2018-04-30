
function myReplace(str, before, after) {
    var afterUpper = after.charAt(0).toUpperCase() + after.slice(1);
    
    if(before === before.toLowerCase()){
      return str = str.replace(before, after);
    }else{
      str = str.replace(before, afterUpper);
    }
    
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");