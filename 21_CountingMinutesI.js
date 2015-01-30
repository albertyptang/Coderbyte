//Have the function CountingMinutesI(str) take the str parameter being passed which will be two times
//The time will be in a 12 hour clock format.

//Search the string for key characters and respond accordingly
function CountingMinutesI(str) {
  var timestr = "";
  var time1 = 0;
  var time2 = 0;
  for (var i=0; i<str.length; i++){
    if (!isNaN(str[i])){
      timestr+=str[i];
    }
    //For the hour
    else if (str[i]===":"){
      if(timestr==="12"){
        timestr = "";
      }
      else {   
        time2+=parseInt(timestr)*60;
        timestr = "";
      }
    }
    //For the minutes and am or pm
    else if (str[i]==="p"){
        time2+=720+parseInt(timestr);
        timestr = "";
        }
    else if (str[i]==="a"){
        time2+=parseInt(timestr);
        timestr = "";
        }
    //For the split between times
    else if (str[i]==="-"){
        time1+=time2;
        time2=0;}              
   }
  if(time2>=time1){
  return time2-time1}
  else if(time2<time1){
  return 1440-(time1-time2);
  }
}
