//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

//Have the function FirstReverse(str) take the str parameter being passed
function FirstReverse(str){
//and return the string in reversed order
  //by building an entirely new string created from str
  var newstring = "";//this is the beginning of the new string
  for (var i=(str.length-1); i>=0; i--){
    newstring+=str[i];
    //this is a loop that will go through every letter of the old string and add it to the old string
    //the loop begins at (str.length-1) and goes backwards until it reaches the first letter of str, str[0]
  }
  return newstring;//return both stops the function and gives the value of the new string
} 

//Another way of doing it using string methods is
function FirstReverse(str){
  str.split("").reverse().join("");
  //split creates a new array out of the string, creating a new array entry every time it encounters ""
  //reverse reverses the array
  //join creates a string out of the array every time it encounters ""
  return str;
}
