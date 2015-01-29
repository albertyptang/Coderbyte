//Have the function ABCheck(str) take the str parameter being passed
//Return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
//Otherwise return the string false.

//If-else function. Use charAt(i) for str instead of [i] as it gets buggy otherwise.
function ABCheck(str) {
    var value = false;
    for (var i=0; i<str.length; i++){
        if (str.charAt(i).toLowerCase()==="a" &&
            str.charAt(i+4).toLowerCase()==="b"){
        value = true;    
        }
        if (str.charAt(i).toLowerCase()==="b" &&
            str.charAt(i+4).toLowerCase()==="a"){
        value = true;   
        }
    }
    return value;
}
