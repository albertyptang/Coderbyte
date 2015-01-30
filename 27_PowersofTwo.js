//Have the function PowersofTwo(num) take the num parameter being passed which will be an integer
//Return the string true if it's a power of two. If it's not return the string false.

//Create a recursion function where you continue to divide by 2 until you get a value below 4
function PowersofTwo(num) {
  if (num === 2){return true;}
  //If the number ends up as less than 4 but is not 2, then it cannot be a power of 2
  //This also account for numbers plugged into the function that are less than 2 
  else if (num <4){return false;}
  //Recursion, continue dividing by 2 over and over again
  else return PowersofTwo(num/2);         
}
