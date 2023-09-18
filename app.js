let diceIsRolling = false;
let currentScore = 0;

const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
const newGameText = document.querySelector(".new-game-text");

rollBtn.addEventListener("click",rollDice)

holdBtn.addEventListener("click", holdScore);

newGameText.addEventListener("click", newGame);




class player {
    constructor(score,globalScore) {
        this.score = score;
        this.globalScore = globalScore;
        this.isActive = false;
        this.toggleActive = function () {
           this.isActive = !this.isActive;
        }
    }
}

const player1 = new player();
const player2 = new player();


startNewGame()




function startNewGame() {
    player1.toggleActive();
    player1.score = 0;
    player1.globalScore = 0;
    player2.score = 0;
    player2.globalScore = 0;
    document.querySelector(".player-text1").classList.toggle("player-text-active");


}



function newGame() {

    location.reload();
}




function rollDice() {
    if (!diceIsRolling) {
        const minDiceNumber = 1;
        const maxDiceNumber = 6;
        const diceNumber = [1, 2, 3, 4, 5, 6];
        diceIsRolling = true;
        
        let anim = setInterval(() => {
            animDice(diceNumber, minDiceNumber, maxDiceNumber);
        }, 100);
        
        setTimeout(() => {
            clearInterval(anim);
            verifyDiceNumber(currentScore);
           }, 1000);

    function animDice(diceNumber, minDiceNumber, maxDiceNumber) {
        let randomDiceNumber = diceNumber[Math.floor( Math.random() * maxDiceNumber)];
        const diceImage = document.querySelector(".dé");
        const img = diceImage.setAttribute("src", `/assets/images/de-${randomDiceNumber}.jpg`)
        currentScore = randomDiceNumber;
    }


    function verifyDiceNumber(randomDiceNumber) {
        if (randomDiceNumber === 1) {
            lostScore();
            switchPlayer();
        } else {
            getDiceScore(randomDiceNumber);
        }
        diceIsRolling = false;
        }

    }

}


function switchPlayer() {
    const activeIcon1 = document.querySelector(".player-active");
    const activeIcon2 = document.querySelector(".player-active2");

    player1.toggleActive();
    player2.toggleActive();

    if (player1.isActive === true) {
        activeIcon2.style.display = "none";
        activeIcon1.style.display = "block";

    } else {
        activeIcon1.style.display = "none";
        activeIcon2.style.display = "block";
    }

    document.querySelectorAll(".player-text").forEach(pText => {
        pText.classList.toggle("player-text-active");
    });

}


function holdScore() {
    if (!diceIsRolling) {

    if (player1.score !== 0) {


        if (player1.isActive) {
            player1.globalScore += player1.score;
            document.querySelector(".player1-global-score").textContent = player1.globalScore;
            document.querySelector(".player1-current-score").textContent = 0;
            player1.score = 0;

            if (player1.globalScore >= 100) {
                player1.globalScore = 100;
                gameOver("player 1 WIN !!")
            }
        }
        switchPlayer();
    }

        if (player2.score !== 0) {
            if (player2.isActive) {
                player2.globalScore += player2.score;
                document.querySelector(".player2-global-score").textContent = player2.globalScore;
                document.querySelector(".player2-current-score").textContent = 0;
                player2.score = 0;

                if (player2.globalScore >= 100) {
                    player2.globalScore = 100;
                    gameOver("player 2 WIN !!")
                }
            }
            switchPlayer();

        }
    }
}


function  getDiceScore(diceScore) {
    if (!player1.isActive) {
        player2.score += diceScore;
        document.querySelector(".player2-current-score").textContent = player2.score;
    } else {
        player1.score += diceScore;
        document.querySelector(".player1-current-score").textContent = player1.score;

    }
}



function lostScore() {
    if (player2.isActive) {

        player2.score = 0;
        document.querySelector(".player2-current-score").textContent = player2.score;


    } else {
        player1.score = 0;
        document.querySelector(".player1-current-score").textContent = player1.score;


    }
}


function gameOver(winnerText) {
    alert(winnerText);
    location.reload();
}


