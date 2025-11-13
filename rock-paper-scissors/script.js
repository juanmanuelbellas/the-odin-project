const choiceButton = document.querySelector("#choiceButton");
console.log(choiceButton);

function computerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    let choice;

    if (randomNum % 3 == 0) {
        choice = "Rock";
    }

    else if (randomNum % 3 == 1) {
        choice = "Paper";
    }

    else {
        choice = "Scissors";
    }

    return choice;
}

choiceButton.addEventListener("click", () => {
    let userInput = prompt("Make your choice, Rock, Paper or Scissors");

    while (!(userInput == "Rock" || userInput == "Paper" || userInput == "Scissors")) {
        userInput = prompt("Invalid input, remember that he options are Rock, Paper and Scissors");
    }

    let computer = computerChoice();

    if (computer == userInput) {
        alert(`It's a tie!\nBoth you and the computer chose ${userInput}`);
    }

    else if ((computer == "Rock" && userInput == "Scissors") || (computer == "Scissors" && userInput == "Paper") || (computer == "Paper" && userInput == "Rock"))
        alert(`You've lost!\nThe computer chose ${computer} and you chose ${userInput}`);

    else{
        alert(`Congratulations! You've won!\nThe computer chose ${computer} and you chose ${userInput}`);
    }
})
