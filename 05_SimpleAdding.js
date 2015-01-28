//Have the function SimpleAdding(num) add up all the numbers from 1 to num.

function SimpleAdding (num) {
//This is just like the factorial question but this addition. This time I'll use a different method.
  if (num===1){return 1;}//This when the function should stop
  else {return num+SimpleAdding(num-1);}//This is when the function should continue. 
  //This function will continue adding (num) while decreasing the next value of the next num by 1, 
  //until num===1 in which case SimpleAdding(2)=2+(1).
}
