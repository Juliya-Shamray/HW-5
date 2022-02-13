
"use strict";

var text = prompt("Enter please text");

var result = " ";

var isFilter = false


for (var char of text) {
    

    if(char === "<"){
        isFilter = true
    }
    
    if (char === ">"){
        isFilter = false
        continue
    }
    if(isFilter === false ){
        result += char
    }
 
}
alert(result)





