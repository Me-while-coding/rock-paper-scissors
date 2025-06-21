let myPoint =0, compPoint = 0;
let myMove = null;
let resetButton = document.querySelector("#reset")
let gameMessage = document.querySelector("#message1");
let winStatus = document.querySelector("#message2");
let myScoreDisplay = document.querySelector("#my-score-display");
let compScoreDisplay = document.querySelector("#comp-score-display");
let compChoices = ["scissors","paper","rock"];
let movesButton = document.querySelectorAll(".moves");
movesButton.forEach((move)=>{
    move.addEventListener("click",()=>{
      if(myMove!=null)
        myMove.classList.remove("selected");
         move.classList.add("selected");
         myMove = move;
         let youWin = PlayGame(myMove);
         if(youWin!=undefined){
            if(youWin===true) {myPoint++;winStatus.innerText = "You win";}
            else {compPoint++;winStatus.innerText = "Computer Wins";}
         }
         else{
            winStatus.innerText = "DRAW";
         }
         showScore(myPoint,compPoint);
    });
});
function showScore(myPoint,compPoint){
  myScoreDisplay.innerText = myPoint;
  compScoreDisplay.innerText = compPoint;
}
function PlayGame(myMove){
    let myChoice = myMove.getAttribute("id");
    let idx = Math.floor(Math.random()*3);
    let compChoice = compChoices[idx];
    gameMessage.innerText = `You chose ${myChoice} , Computer chose ${compChoice} `
    if(compChoice!=myChoice){
if(myChoice === "rock" && compChoice ==="paper"){
        console.log(`comp chose ${compChoice} , comp wins`);
        return false;
    }
    else if(myChoice==="paper" && compChoice==="scissors"){
        console.log(`comp chose ${compChoice} , comp wins`);
        return false;
    }

    else if(myChoice==="scissors" && compChoice==="rock"){
        console.log(`comp chose ${compChoice} , comp wins`);
        return false;
    }
    else{
        console.log(`you win as comp chose ${compChoice}`);
        return true;
    }
       

    }
    else{
        console.log(`draw as comp chose ${compChoice}`);
        return undefined;
    }

}

resetButton.addEventListener("click",()=>{
    myMove.classList.remove("selected");
      myMove = null;
      myPoint=0;
      compPoint=0;
      myScoreDisplay.innerText = myPoint;
      compScoreDisplay.innerText = compPoint;
      winStatus.innerText = "";
      gameMessage.innerText = "";
});