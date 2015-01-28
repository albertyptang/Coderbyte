//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
//If there are two or more words that are the same length, return the first word from the string with that length. 
//Ignore punctuation and assume sen will not be empty. 

//Step 1: Create array outside of the function to split the string into arrays
var array = [""];
function LongestWord(sen) { 
    var j = 0;//Variable determining which array entry (word) we are at, starting with the first
    for(var i=0;i<sen.length;i++){
        if(sen[i]===" "){
            j++;
            array[j]="";
        }
        //Looping through the string, every time we see a " ", we add a new array entry (word)
        else {
            array[j]+=sen[i];
        }
        //If we don't, we continue adding letters to the current array entry (word)
    }
//Step 2: Compare each word to all of the other words
        for(var k=0; k<array.length;k++){
        if(array[0].length<array[k].length){
            array.shift();
            k=0;
            }
        //This loop will compare the first word to all of the other ones.
        //When it is less than a word, it is removed from the array
        //k must be reset back to 0 so the next word can compare itself to every other word
    }
    return array[0];
        //Returns the first entry of the array, the array entry (word) that was never < another word
         
}
