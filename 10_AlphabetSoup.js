//Have the function AlphabetSoup(str) take the str string parameter being passed
//Return the string with the letters in alphabetical order (ie. hello becomes ehllo).
//Assume numbers and punctuation symbols will not be included in the string. 

function AlphabetSoup(str) { 
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var newstr = "";
  for (var i = 0; i<alpha.length;i++){ //Do the following for every letter of the alphabet, starting from a, ending at z
      for (var j=0; j<str.length; j++) //Check every letter of the string if they match the letter of the alphabet
        if (alpha[i]===str[j].toLowerCase()){
            newstr+=str[j];
        }
  }
  return newstr; 
         
}
