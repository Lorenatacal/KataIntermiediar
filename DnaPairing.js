function pairElement(str) {
    var strArr = [];

     var search = function(elem) {
         switch(elem) {
             case "A":
                strArr.push(["A", "T"]);
                break;
            case "T":
                strArr.push(["T", "A"]);
                break;
            case "G":
                strArr.push(["G", "C"]);
                break;
            case "C":
                strArr.push(["C", "G"]);
                break;
         }
     };
     for (var i=0; i<str.length; i++){
        search(str[i]);
     }
     return strArr;
    }
  console.log(pairElement("ACG"));