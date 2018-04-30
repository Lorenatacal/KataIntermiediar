function convertHTML(str) {
    
    if (str.includes("&")) {
      str = str.replace(/&/gi, "&amp;");
    } else if (str.includes("<", ">")) {
      str = str.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
    } else if (str.includes(">")) {
      str = str.replace(/>/gi, "&gt;");
    } else if (str.includes("\"")) {
      str = str.replace(/"/gi, "&quot;");
    } else if (str.includes ("'")) {
       str = str.replace(/'/gi, "&apos;");
    } else if (str.includes(">")) {
       str = str.replace(/>/g, "&gt;");
    }
      
     return str;
   }
   
   console.log(convertHTML("<>"));