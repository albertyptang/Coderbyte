//Same as 28 but with multiplication instead

function MultiplicativePersistence(num) { 
  var count = 0;
  function MultiplyDigits(a){
    if(a<10){
      return count;
    }
    else {
      count++;
      var product = 1;
      for (var i=0; i<a.toString().length;i++){
        product = product * parseInt(a.toString().split("")[i]);
      }
      console.log(product);
      return MultiplyDigits(product);
             
    }
  }  
  return MultiplyDigits(num);
}
   
