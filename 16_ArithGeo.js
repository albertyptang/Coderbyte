//Have the function ArithGeo(arr) take the array of numbers stored in arr
//Return the string "Arithmetic" if the sequence follows an arithmetic pattern
//Return "Geometric" if it follows a geometric pattern.
//If the sequence doesn't follow either pattern return -1. 

function ArithGeo(arr) {
  var Arith = 0;
  var Geo = 0;
  //The loop will check arr[i+2], which may be undefined, make the loop at arr.length-3
  //eg. for [1,2,3] you only check at i=0 (arr.length-3)
  for (var i=0; i<arr.length-2;i++){
    if (arr[i+1]-arr[i] != arr[i+2]-arr[i+1]){
    Arith = -1;}    
  }
  for (var j=0; j<arr.length-2;j++){
    if (arr[j+1]/arr[j] != arr[j+2]/arr[j+1]){
    Geo = -1;}      
  }
  if (Arith === 0){return "Arithmetic";}
  else if (Geo === 0) {return "Geometric";}
  else return -1;
}
