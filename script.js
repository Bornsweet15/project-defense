let secretNumber = Math.floor(Math.random()*5)+ 1; let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let message =
    document.getElementById("message");
    let attemptsDisplay =
    document.getElementById("attempts");

    attempts++;
    attemptsDisplay.innerText = attempts;

    if (userGuess < secretNumber) {
        message.innerText = "Too low! Try again"
        message.style.color = "red";
    }else if (userGuess > secretNumber){
        message.innerText = "Too high!Try again";
        message.style.color = "red";
    } else {
        message.innerText = `congratulation! you guessed it in ${attempts} attempts.`;
        message.style.color = "green";
    }

}
function resetGame() {
    secretNumber =Math.floor(Math.random()* 5) + 1;
    attempts = 0;

    document.getElementById("guess").value = "";

    document.getElementById("message").innerText = "";

    document.getElementById("attempts").innerText = attempts

}