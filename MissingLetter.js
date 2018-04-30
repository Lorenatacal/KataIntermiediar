function fearNotLetter(str) {
    
        for (var i = 1; i<str.length; i++) {
            if (str.charCodeAt(i) == str.charCodeAt(i - 1) + 1) {
                continue;
            } else if (str.charCodeAt(i) != str.charCodeAt(i - 1) + 1) {
                str = String.fromCharCode(str.charCodeAt(i - 1) + 1);
                return str;
            } else{
                return undefined;
            }
        }
      }
    
    console.log(fearNotLetter("abcdeg"));
    