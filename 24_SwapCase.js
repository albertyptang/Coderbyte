//Have the function SwapCase(str) take the str parameter and swap the case of each character. 

function SwapCase(str) {
  var newstr = "";
  for (var i=0; i<str.length; i++){
    if(str.charAt(i)===str.charAt(i).toUpperCase()){
      newstr+=str.charAt(i).toLowerCase();
    }
    else if(str.charAt(i)===str.charAt(i).toLowerCase()){
      newstr+=str.charAt(i).toUpperCase();
    }
    else {newstr+=str.charAt(i)}   
  }

  // code goes here  
  return newstr; 
         
}
