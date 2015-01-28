//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

function LetterCapitalize(str) {
  cap = str[0].toUpperCase();//Create new string called cap, with the first letter being the first capitalized letter of str
  for (var i=1; i<(str.length); i++) {//This loop capitalizes every letter after a " ", basically every new word.
    if(str[i]===" "){
      cap += " "+str[i+1].toUpperCase();
      i++;
    }
    else cap += str[i]
  }
  return cap; 
         
}
