function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/_/g, " ").replace(/ /g, "-");
    return str;
  }
  
  console.log(spinalCase('this_IsSpinalTap'));