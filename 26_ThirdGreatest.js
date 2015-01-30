//Have the function ThirdGreatest(strArr) take the array of strings stored in strArr
//Return the third largest word within in. 
//The array will have at least three strings and each string will only contain letters. 

function ThirdGreatest(strArr) {
  var newstrArr = [];
  //Add lengths to the array entries
  //Reverse it so that when you count backwards by length, you start counting words of the same length in the right order)
  for (var i=strArr.length-1;i>=0;i--){
    newstrArr.push([strArr[i].length, strArr[i]]);
  }
  console.log(newstrArr);
  //Count backwards by length
  var number = newstrArr.sort(function(a,b){return a[0]-b[0]})[newstrArr.length-3][1];
  console.log(newstrArr);
  return number;
}
