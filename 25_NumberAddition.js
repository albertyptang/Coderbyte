//Have the function NumberSearch(str) take the str parameter
//Search for all the numbers in the string, add them together, then return that final number. 
//You will have to differentiate between single digit numbers and multiple digit numberse. 
//So "55Hello" and "5Hello 5" should return two different answers. 
//Each string will contain at least one letter or symbol. 

function NumberAddition(str) { 
  var add = 0;//Total value
  var multidigit = "";//Temporary storage for numbers that have a number behind it
  for(var i=0;i<str.length;i++){
    //Is the character at i a number? If so, add it to the multidigit
    if(!isNaN(parseInt(str.charAt(i)))){
      multidigit+=str.charAt(i);
      console.log(multidigit);
      //Is the character after i a number? If not, add the multidigit amount to the add value, and reset multidigit to 0
      if(isNaN(parseInt(str.charAt(i+1)))){
          add+=parseInt(multidigit);
          multidigit = "";
      }
    }      
  }
  return add; 
}  
