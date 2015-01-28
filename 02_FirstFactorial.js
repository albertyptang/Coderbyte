//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it 
//(ie. if num = 4, return (4 * 3 * 2 * 1)). 

//Have the function FirstFactorial(num) take the num parameter being passed 
function FirstFactorial (num){
//and return the factorial of it
  //a factorial of number x is simply (x)*(x-1)*(x-2)*(x-3)*(x-4)... until it reaches (x-y)=1
  var factorial = 1//created a variable 1 that won't affect multiplication results
  for (var i=num; i>0;i--){
    factorial *= i;
  //this loop will start with i=num(eg.4),then multiply by i-1(eg.3), then multiply by i-2(eg.2), until i=1
  }
  return factorial;
}
