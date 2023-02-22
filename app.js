let mixDice = false;
let currentScore = 0;


class players {
    constructor() {
        
    }
}



function newGame() {
    document.reload();
}













// //MixDice and get Score
// mixingDice();



function mixingDice() {
    const minDiceNumber = 1;
    const maxDiceNumber = 5;
    const diceNumber = [1, 2, 3, 4, 5, 6];
    mixDice = true;

    
    let anim = setInterval(() => {
        animDice(diceNumber, minDiceNumber, maxDiceNumber);
    }, 100);

    setTimeout(() => {
           
     clearInterval(anim);
           
       }, 1000);
       
 

    function animDice(diceNumber, minDiceNumber, maxDiceNumber) {

        let randomDiceNUmber = diceNumber[1 + Math.floor( Math.random() * maxDiceNumber)];
       
        
        const diceImage = document.querySelector(".dé");
        const img = diceImage.setAttribute("src", `/assets/images/de-${randomDiceNUmber}.jpg`)

        currentScore = randomDiceNUmber;
        console.log(currentScore);
       
    }
    
}

