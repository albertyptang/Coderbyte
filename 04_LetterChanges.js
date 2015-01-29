//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  //Create alphabet
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  //Create new string with altered alphabet
  var newstr = "";
  //Create a loop for the first task, alter the alphabet
  for (var i=0; i<str.length;i++){
    //What if the letter is "z"? Nothing follows z in the alphabet
    if (str[i].toLowerCase()==="z"){
      newstr+="A";
    }
    //If the letter isn't "z", then...
    else {
      //Is it letter? Loop through the alphabet to check
      for (var j=0; j<=alphabet.length; j++) {
        //If it is a letter, add the next letter of the alphabet to the new string.
        if (str[i].toLowerCase()===alphabet[j]){
          newstr+=alphabet[j+1];
          //You must break the loop when the letter finds an alphabet match for the next step
          break;
        }
        //If it was a letter, it must've found an alphabet match and broke the loop before j reaches the end (26)
        //If it is not a letter, add it unaltered to the new string
        if (j === 26){
          console.log(str[i]+" is not a letter");
          newstr+=str[i];
        }
      }
    }
  }
  //Create a new string with altered vowels
  var newerstr = "";
  //Create a loop for the second task, to alter the vowels
  for (var k=0;k<newstr.length;k++){
      if (newstr[k]==="e"||newstr[k]==="i"||newstr[k]==="o"||newstr[k]==="u"){
      newerstr+=newstr[k].toUpperCase();
      }
      else newerstr+=newstr[k];
  }
  return newerstr; 
}
