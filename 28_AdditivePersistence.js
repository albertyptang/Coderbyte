//Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer
//Return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. 

//Set counter variable outside of function
function AdditivePersistence(num) {
  //Create a counter for the number of times recursion must occur
  var count = 0;
  //Create function that adds the digits until it can't and counts the number of times it does this
  function Recursion (input){
    //If it is a single digit number, return the count
    if (input<10){return count;}
    //If it is not, it must put the sum through this function again
    else {
        count++;
        var sum = 0;
        for (var i=0; i<input.toString().length;i++){
        sum+=parseInt(input.toString().split("")[i]);
        }
        console.log(sum);
        return Recursion(sum);
        }
  }
  return Recursion(num); 
}
