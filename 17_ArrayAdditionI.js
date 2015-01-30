//Have the function ArrayAdditionI(arr) take the array of numbers stored in arr
//Return the string true if any combination of numbers in the array can be added up to equal the largest number in the array otherwise return the string false. 
//The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

//This one completely destroyed me. I spent two whole afternoons on it and ended up looking for help, so I don't consider myself to have completed this challenge.
function ArrayAdditionI(arr){
    //Sort by ascending order
    arr.sort(function(a,b){return a-b});
    //Pop the last value in the array and store as largestnumber
    var largestnumber=arr.pop();
    //Create a recursive function that will continue subtracting from and adding to the largestnumber until it equals the first array value
    function Recursion(array,goal){
        console.log("\nRecursion(["+array+"],"+goal+")");
        //The goal is to have the first array value equal the goal
        if(array[0]===goal){
            return true;}
        //If the only array value left didn't satisfy the goal, this path fails and we return
        if(array.length===1){
        return console.log("Failed");}
        //If there are still values left but we have yet to satisfy the goal, we start by searching if any of the array values equal the goal. 
        //If that path fails, we will subtract the goal value.
        var firstarrayvalue = array.shift();
        return Recursion(array,goal) || Recursion(array,goal-firstarrayvalue);
    }
  //Start the recursion, if there is no true value obtainable the result will be false
  return Recursion(arr, largestnumber)||false;
}
