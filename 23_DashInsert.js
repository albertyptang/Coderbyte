//Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.

function DashInsert(str) {
  str = str.toString();
  newstr = "";
  for(var i=0; i<str.length;i++){
    if(str.charAt(i)%2!=0 && str.charAt(i+1)%2!=0){
      newstr+=str.charAt(i)+"-";}
    else {newstr+=str.charAt(i)}
  }
  return newstr; 
}
