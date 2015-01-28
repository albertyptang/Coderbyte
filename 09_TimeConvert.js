//Have the function TimeConvert(num) take the num parameter being passed
//Return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).
//Separate the number of hours and minutes with a colon. 

function TimeConvert(num) {
  var time = Math.floor(num/60)+":"+num%60; //Math.floor rounds down, % gives the remainder
  
  // code goes here  
  return time; 
         
}
