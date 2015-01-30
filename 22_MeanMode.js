//Have the function MeanMode(arr) take the array of numbers stored in arr
//Return 1 if the mode equals the mean, 0 if they don't equal each other
//The array will not be empty, will only contain positive integers, and will not contain more than one mode.


function MeanMode(arr) {
//Create a mean function  
function mean(c){
  var sum = 0;
  for (var i =0; i<c.length; i++){
    sum+=c[i];}
  return sum/c.length;
}
//Create a mode function
function mode(c){
  //Sort the array
  arr.sort(function(a,b){return a-b});
  //Set variable to keep track of which array value has the most repeats
  var mostrepeatcount =1;
  var repeatcount =1;
  var mostrepeatnumber;
  for (var i=0; i<c.length;i++){
  //If the array value is the same as the following, add to its repeat value
    if(c[i]===c[i+1]){
      repeatcount++;
    }
    //If the array value is not the same, check if the previous array value repeated enough times to be the most repeated
    //If so, replace the values of the most repeated and reset the repeat counter to 1
    else{
      if (repeatcount>mostrepeatcount){
        mostrepeatcount = repeatcount;
        mostrepeatnumber = c[i-1];
        repeatcount=1;
      }
    }
  }
  return mostrepeatnumber;
}
//Compare mean and mode and return 1 or 0 based off of whether they equal eachother         
if(mean(arr)===mode(arr)){
  return 1;}
  else {return 0;}
  }

var arr = [4, 4, 4, 6, 2];
MeanMode(arr);
