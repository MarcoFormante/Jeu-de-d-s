let isMixDice = false;
let currentScore = 0;

const rollBtn = document.querySelector(".roll");

rollBtn.addEventListener("click",mixingDice)

const hold = document.querySelector(".hold");

hold.addEventListener("click", holdSCore);


class players {
    constructor(score,globalScore) {
        this.score = score;
        this.globalScore = globalScore;
        this.isActive = false;

        this.toggleActive = function () {
            
            if (this.isActive === false) {
                
                this.isActive = true;
               

                } else {
                    this.isActive = false;
                }
            
            
        }
    }
}

const player1 = new players();
const player2 = new players();


startNewGame()




function startNewGame() {
    player1.toggleActive();
    player1.score = 0;
    player1.globalScore = 0;
    player2.score = 0;
    player2.globalScore = 0;
    
}



function newGame() {
    document.reload();
}





// // //mix the Dice and get Score
//  mixingDice();



function mixingDice() {

if (!isMixDice) {
        console.log("clock");
    const minDiceNumber = 1;
    const maxDiceNumber = 5;
    const diceNumber = [1, 2, 3, 4, 5, 6];
    isMixDice = true;
    let randomDiceNUmber = 0;

    
    let anim = setInterval(() => {
        animDice(diceNumber, minDiceNumber, maxDiceNumber);
    }, 100);



    setTimeout(() => {
        
        clearInterval(anim);
        verifyDiceNumber(currentScore);
      
           
       }, 1000);
       
 

    function animDice(diceNumber, minDiceNumber, maxDiceNumber) {

        let randomDiceNUmber = diceNumber[Math.floor( Math.random() * maxDiceNumber)];
       
        
        const diceImage = document.querySelector(".dé");
        const img = diceImage.setAttribute("src", `/assets/images/de-${randomDiceNUmber}.jpg`)

        currentScore = randomDiceNUmber;
        
    }


    function verifyDiceNumber(randomDiceNUmber) {
        
        if (randomDiceNUmber === 1) {
            console.log("gameover");
            switchPlayer(); 
        } else {
            getDiceScore(randomDiceNUmber);
        }
        

        isMixDice = false;
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
    
}


function holdSCore() {
    if (!isMixDice) {
        
        if (player1.isActive) {
            player1.globalScore += player1.score;
            document.querySelector(".player1-global-score").textContent = player1.score;
            document.querySelector(".player1-current-score").textContent = 0;
            player1.score = 0;
        }

        if (player2.isActive) {
            player2.globalScore += player2.score;
            document.querySelector(".player2-global-score").textContent = player2.score;
            document.querySelector(".player2-current-score").textContent = 0;
            player2.score = 0;
        }
    }

    switchPlayer();
   
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

// player1-current-score
// player2-current-score