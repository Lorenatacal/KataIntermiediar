function whatIsInAName(collection, source) {
    var arr = [];
    
        var i = Object.keys(source);
        arr = collection.filter(function(obj) {
             return i.every(function(elem) {
                 return obj.hasOwnProperty(elem) && obj[elem] === source[elem];
            });
        });
    
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });