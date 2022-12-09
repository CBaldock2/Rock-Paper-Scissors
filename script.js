var wins = 0;
var losses = 0;
var ties = 0;
    
function game() {
    
    function randomNumber(max) {
        return Math.floor(Math.random() * max)
    };
    
    var computerChoice = randomNumber(3);

    

    if (computerChoice == 0) {
        var computerChoice = "r"
    } else if (computerChoice == 1) {
        var computerChoice = "p"
    } else {
        var computerChoice = "s"
    };

    var userChoice = window.prompt("Chose R, P or S")


    if (userChoice.toUpperCase == "r" && computerChoice == "p") {
        window.alert("Computer chose P, you lose.")
        losses += 1;
    } else if (userChoice == "r" && computerChoice == "s") {
        window.alert("Computer chose S, you win!")
        wins += 1;
    } else if (userChoice == "p" && computerChoice == "r") {
        window.alert("Computer chose R, you win!")
        wins += 1;
    } else if (userChoice == "p" && computerChoice == "s") {
        window.alert("Computer chose S, you lose.")
        losses += 1;
    } else if (userChoice == "s" && computerChoice == "r") {
        window.alert("Computer chose R, you lose.");
        losses += 1;
    } else if (userChoice == "s" && computerChoice == "p") {
        window.alert("Computer chose P, you win!");
        wins += 1;
    } else if (userChoice === computerChoice) {
        window.alert("you both chose " + userChoice + " , it's a tie!")
        ties +=1;
    };



    var repeat = window.confirm("Would you like to play again?")

    if (repeat === true) {
        game();
    } else {
        window.alert("Wins: " + wins + "\nLosses: " + losses + "\n Ties: " + ties)
    };

}

game()