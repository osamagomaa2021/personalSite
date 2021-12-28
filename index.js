
function guessNumber() {

    //store a random value

    var aNumber = Math.floor(Math.random() * 11);
    // use console to show the number .. good for debugging
    console.log(aNumber);
    // create a variable for user input
    var guessedNumber;
    //prompt the user to enter a number
    guessedNumber = prompt("Please enter a number");
    for(; guessedNumber!=aNumber;){
        if(guessedNumber<aNumber){
            window.alert("Your guess is too low\n Try again");
        }
        else if(guessedNumber>aNumber){
            window.alert("Your guess is too high\n Give it another try");
        }
        else{
            window.alert("Error!");
        }
        guessedNumber = prompt("Please enter a number");
    }
        window.alert("Horaaay!!\nYou guessed it.");
    
}