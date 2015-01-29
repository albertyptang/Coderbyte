//Have the function VowelCount(str) take the str string parameter being passed
//Return the number of vowels the string contains
//Do not count y as a vowel for this challenge.

//For each letter, check if each letter matches a list of vowels
function VowelCount(str) { 
  var count = 0;
  var vowels = "aeiou";
  for(var i=0; i<str.length; i++){
    //MAKE SURE THE VARIABLES IN THE FOR LOOPS ARE CORRECT (I mistyped "j" as "i" and it took me forever to notice lol)
    for(var j=0; j<vowels.length; j++){
      if(str.charAt(i).toLowerCase()===vowels.charAt(j)){
        console.log(str.charAt(i));
        count++;
      }
    }
  }
  // code goes here  
  return count; 
}
