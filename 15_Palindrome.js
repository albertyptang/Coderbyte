//Have the function Palindrome(str) take the str parameter being passed
//Return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
//Otherwise return the string false.
//Punctuation and numbers will not be part of the string.

//Created two new strings, a lower case string without spaces, and a reverse of that
//If they match, return true
function Palindrome(str) {
  var newstr = "";
  var revstr = "";
  for (var j=0; j<str.length; j++){
      if(str.charAt(j)!=" "){
          newstr+=str.charAt(j).toLowerCase();
      }
  }
  for (var i=(newstr.length-1); i>=0; i--){
    revstr+=newstr.charAt(i).toLowerCase();
  }
  if (newstr === revstr.toLowerCase()){
  return true;}
  else return false;       
}
