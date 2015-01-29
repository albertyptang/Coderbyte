//Have the function ExOh(str) take the str parameter being passed
//Return the string true if there is an equal number of x's and o's, otherwise return the string false. 
//Only these two letters will be entered in the string, no punctuation or numbers.

function ExOh(str) {//Create counters for x and o and compare the two values
var xcount= 0;
var ocount= 0;
  for(var z=0; z<str.length; z++){
    if (str[z]==="x"){
      xcount++;
    }
    else if (str[z]==="o"){
      ocount++;
    }
  }
  if (xcount===ocount){
  return true;}
  else return false;       
}
