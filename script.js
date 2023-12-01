// getting all tags
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

// computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallWorduser="user".fontsize(3).substring();
    const smallWordcomputer="computer".fontsize(3).substring();
    result_p.innerHTML = userChoice+" "+smallWorduser + "beats  to" +smallWordcomputer +computerChoice + ". "+"you win ";

}
function losses(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallWorduser="user".fontsize(3).substring();
    const smallWordcomputer="computer".fontsize(3).substring();
    result_p.innerHTML = userChoice+" "+smallWorduser + "loses to" +smallWordcomputer +computerChoice + ". "+"you lost";

}
function draw(userChoice,computerChoice) {
    const smallWorduser="user".fontsize(3).substring();
    const smallWordcomputer="computer".fontsize(3).substring();
    result_p.innerHTML = userChoice+" "+smallWorduser + "draw to " +smallWordcomputer +computerChoice + ". "+"it is draw";

}
// user choice
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice,computerChoice);
            // console.log("win")
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            losses(userChoice,computerChoice);
            // console.log("loss")

            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice,computerChoice);
            // console.log("draw")

            break;
    }
}
    function main() {
        rock_div.addEventListener("click", function () {
            // console.log("you click rock");
            game("rock")
        });
        paper_div.addEventListener("click", function () {
            // console.log("you click rock");
            game("paper")
        })
        scissor_div.addEventListener("click", function () {
            // console.log("you click rock");
            game("scissor")
        })
    }
    main()