function convertToRoman(num) {

var romanNumbers = {"M" :1000, "CM":900, "D" :500, "CD" :400, "C" :100, "XC" :90, "L":50, "XL" :40, "X" :10, "IX" :9, "V" :5, "IV" :4, "I": 1};
var str="";

for(var i of Object.keys(romanNumbers) ) {
    var q = Math.floor(num / romanNumbers[i]);
    num -= q * romanNumbers[i];
    str += i.repeat(q);
}
return str;
}

console.log(convertToRoman(543));