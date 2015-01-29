//Have the function DivisionStringified(num1,num2) take both parameters being passed
//Divide num1 by num2 and return the result as a string with properly formatted commas. 
//If an answer is only 3 digits long, return the number with no commas 
//(ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".

function DivisionStringified(num1,num2) {
  //Create string displaying value without decimales (rounded)
  var value = Math.round(num1/num2).toString();
  var newvalue = "";
  //Create new value and conditional if the value is more than 3 digits
  if (value.length>3){
      for(var i=0;i<=(value.length-1);i++){
          //If the distance between a digit and the last digit is divisible by 3, place a comma behind it
          //UNLESS it is the last digit
          if((value.length-1-i)%3===0 && i!=(value.length-1)){
              newvalue+=value.charAt(i)+",";
          }
          else newvalue+=value.charAt(i);
          }
      return newvalue;
      
  }
  else return value; 
  }
