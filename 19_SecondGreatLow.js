//Have the function SecondGreatLow(arr) take the array of numbers stored in arr
//Return the second lowest and second greatest numbers, respectively, separated by a space.
// The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

 function SecondGreatLow(arr) {
 //Sort by ascending order
   arr.sort(function(a,b){return a-b});
   //Remove extra lowest numbers
   for(var i=1; i<arr.length;i){
       if (arr[i]===arr[0]){arr.shift();}
       //Break because the for loop remains on arr[1]
       else break;
   }
        
   for(var j=(arr.length-1);j>=0;j){
       if (arr[arr.length-1]===arr[arr.length-2]){
           arr.pop();
       }
       else break;
   }
   //Once there is only one lowest and one highest number in the array,
   //the second highest and second greatest are easy to find
   return(arr[1]+" "+arr[arr.length-2]);
}
