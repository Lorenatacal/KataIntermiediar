function translatePigLatin(str) {
    var vowel = /[aeyiuo]/gi;
    var consonant =/[b-df-hj-np-tv-z]/gi;
    if(str[0].match(vowel)){
      str = str + "way";
    } else if (str[0].match(consonant) && str[1].match(consonant)){
      str = str.substr(2) + str.charAt(0) + str.charAt(1) + "ay";
    } else {
      str = str.substr(1) + str.charAt(0) + "ay";
    }
    return str;
  }
  
  translatePigLatin("glove");