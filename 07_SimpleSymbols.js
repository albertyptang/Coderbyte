//Have the function SimpleSymbols(str) take the str parameter being passed
//Determine if it is an acceptable sequence by either returning the string true or false.
//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) 
//For the string to be true each letter must be surrounded by a + symbol.
//The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) {
  var result = true;//Set default result to true
  if (str[0]!="+" && str[0]!="=" && isNaN(str[i])){//If the first symbol is a letter (not +, =, or a number) it is false
    result = false;
    return result;}
  for(var i=1; i<str.length;i++){//If the letters in the string are not surrounded by +, it is false
    if (str[i]!="+" && str[i]!="=" && isNaN(str[i]) && str[i-1]!="+"){
      result = false;
      console.log("2");
      return result;}
    else if (str[i]!="+" && str[i]!="=" && isNaN(str[i]) && str[i+1]!="+"){
      result = false;
      console.log("3");
      return result;                                                         }
  }
  // code goes here  
  return result; 
         
}
