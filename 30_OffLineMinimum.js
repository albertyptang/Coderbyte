//Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. 
//The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. 
//When finished, your program should return that new set with integers separated by commas. 
//For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 

//Create a function that goes through all the array entries in order
function OffLineMinimum(strArr) { 
  var integers = [];
  var answer = [];
  for(var i=0;i<strArr.length;i++){
    //If it is not "E", add it to an array of integers
    if (strArr[i]!="E"){
      integers.push(strArr[i]);
    }
    //If it is "E", get the current array of integers, sort by ascending order, shift the first (lowest) value, which will return that entry, and push that entry into the answer array.
    else if (strArr[i]==="E"){
      answer.push(integers.sort(function(a,b){return a-b}).shift())
    }
  }
  //Remember to join your answer array into a string format. join() by default will put commas.
  return answer.join(); 
}
   
