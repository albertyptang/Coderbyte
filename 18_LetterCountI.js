//Have the function LetterCountI(str) take the str parameter being passed and 
//Return the first word with the greatest number of repeated letters.
//If there are no words with repeating letters return -1.
//Words will be separated by spaces. 

var highestletterword= -1;  //The first word with the greatest number of repeated letters. -1 by default.
var highestletter;          //The letter repeated most in the above word.
var highestlettercount = 1; //The amount of times the above letter is repeated.


function LetterCountI(str) {
    var sentence = str.split(" ");  //Split the string into the array
    for (var i=0;i<sentence.length;i++){//Loop through array[i]s, aka words
        for(var j=0;j<sentence[i].length;j++){//Loop through array[i][j]s, aka letters
            var lettercount=0;                //Reset letter count for this letter
            for(var k=0;k<sentence[i].length;k++){    //Loop through array[i][k]s, aka potential highestletters
                if (sentence[i][k]===sentence[i][j]){ //Add +1 to the lettercount for every potential highestletter repeat
                    lettercount++;
                }
                if (lettercount > highestlettercount){//If the letter count is the highest so far, it is the new highestletter for now
                highestletterword = sentence[i];      
                highestletter = sentence[i][k];
                highestlettercount = lettercount;
                console.log(sentence[i]
                    +" ("+highestletter+","
                    +highestlettercount+")");
                }
            }    
        }
    }
    return highestletterword;
}
