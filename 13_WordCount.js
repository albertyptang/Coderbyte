//Have the function WordCount(str) take the str string parameter being passed
//Return the number of words the string contains.
//Words will be separated by single spaces.

//Function that searches for spaces
function WordCount(str) { 
  //A string with no spaces initially has 1 word
  var count = 1;
  for(var i=0; i<str.length; i++){
    //It specified words being separated by single spaces, but for fun I added a conditional to avoid counting double spaces
    if(str.charAt(i)===" " && str.charAt(i-1)!=" "){
      count++;
    }
  }
  // code goes here  
  return count; 
         
}
