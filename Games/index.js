//store a random value
var aNumber = Math.floor(Math.random() * 11); //random 
// use console to show the number .. good for debugging
console.log(aNumber);
// create a variable for user input
var guessedNumber, count=0;
alert("I think of a number, guess it!");
//prompt the user to enter a number
guessedNumber = prompt("Please enter a number between 1-10");
for(; guessedNumber!=aNumber;){
    count+=1;
   if(guessedNumber<aNumber){
       window.alert("Too low\n Try again");
    }
     else if(guessedNumber>aNumber){
         window.alert("Too high\n Give it another try");
     }
     else{
        window.alert("Error!");
     }
     guessedNumber = prompt("Please enter a number");
}
window.alert("Horaaay!!\nYou guessed it.");
