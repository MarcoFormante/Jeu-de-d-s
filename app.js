let mixDice = false;
let currentScore = 0;



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
    console.log(player1.isActive);
    
}



function newGame() {
    document.reload();
}













// // //MixDice and get Score
//  mixingDice();



function mixingDice() {
    const minDiceNumber = 1;
    const maxDiceNumber = 5;
    const diceNumber = [1, 2, 3, 4, 5, 6];
    mixDice = true;
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
        console.log(currentScore);
        
       
    }


    function verifyDiceNumber(randomDiceNUmber) {
        if (randomDiceNUmber === 1) {
            console.log("gameover");
            
        } else {
            console.log(currentScore + "questo");
           
        }
    }
    
}




function switchPlayer() {
    if (condition) {
        
    }
}