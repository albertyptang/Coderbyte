//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  var alphabet = "abcdefghijklmnopqrstuvwxyz"; //Create alphabet
  var newstr = "";//Create new string with altered alphabet
  for (var i=0; i<str.length;i++){//This loop is for the first task, to alter the alphabet
    if (str[i].toLowerCase()==="z"){
      newstr+="A";
    }
    //Create if for the exceptional case of "z", which has no letter following it in the alphabet string
    else {for (var j=0; j<alphabet.length; j++)
      if (str[i].toLowerCase()===alphabet[j]){
          newstr+=alphabet[j+1];
          break;
          //The break stops the j loop.
      }
      //If the lowercase version of the letter is equal to an alphabet letter, add the alphabet letter + 1 to newstring
      else {
          newstr+=str[i].toLowerCase();
          break;
      // The breaks stop the j loop. 
      // Otherwise it will keep adding str[i].toLowerCase() for every following instance where j!= the correct letter of the rest of the alphabet.
      }
    }
  }
  var newerstr = "";
  for (var k=0;k<newstr.length;k++){//This loop is for the second task, to alter the vowels
      if (newstr[k]==="e"||newstr[k]==="i"||newstr[k]==="o"||newstr[k]==="u"){
      newerstr+=newstr[k].toUpperCase();
      }
      else newerstr+=newstr[k];
  }
  return newerstr; 
}
