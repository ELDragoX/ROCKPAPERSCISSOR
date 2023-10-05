const totalScores={computerScore:0,playerScore:0};
let playerHand;
let comHand;

function comChoice(){
  const computerHands=["rock","paper","scissor"];
  const random=Math.floor(Math.random()*computerHands.length);
  return computerHands[random];
}
const scoreDiv=document.getElementById("score");
const handsDiv=document.getElementById("hands");
const resultDiv=document.getElementById("result");


function getResult(playerHand,comHand){
  let score;
  if(playerHand == comHand){
    score=0;
  }else if((playerHand=="rock" && comHand=="scissor") || (playerHand=="scissor" && comHand=="paper") || (playerHand=="paper" && comHand=="rock")){
    score=1;
  }else{
    score=-1;
  }
  return score;
}
function onClickRPS(playerHand){
  const comHand = comChoice();
  const score=getResult(playerHand,comHand);
  showResult(score,playerHand,comHand);
}

function playGame(){
  const playerBtns=document.querySelectorAll('.player-control');
  playerBtns.forEach(playerBtn =>{
    playerBtn.onclick = () =>onClickRPS(playerBtn.value);
  })
}

function showResult(score,playerHand,comHand){
  if(totalScores['playerScore']<=10 || totalScores['computerScore']<=10){
  if(score==-1){
     totalScores['computerScore']+=1;
  }else if(score==1){
    totalScores['playerScore']+=1;
  }else{
    resultDiv.innerText="No Points";
  }
  
    handsDiv.innerText=`👱 ${playerHand} vs 🤖 ${comHand}`;
    scoreDiv.innerText=`👱:${totalScores['playerScore']} --   🤖:${totalScores['computerScore']}`;
    resultDiv.innerText="";
  } else{
    resultDiv.innerText="";
    handsDiv.innerText="";
    scoreDiv.innerText="";
    totalScores['playerScore']=0;
    totalScores['computerScore']=0;
    }if(totalScores['playerScore']==10 ){
    handsDiv.innerText=`👱 ${playerHand} vs 🤖 ${comHand}`;
    scoreDiv.innerText=`👱:${totalScores['playerScore']} --   🤖:${totalScores['computerScore']}`;
    resultDiv.innerText="Game Over! Player Wins! ";
    totalScores['playerScore']=0;
  totalScores['computerScore']=0;
    }if(totalScores['computerScore']==10 ){
    handsDiv.innerText=`👱 ${playerHand} vs 🤖 ${comHand}`;
    scoreDiv.innerText=`👱:${totalScores['playerScore']} --   🤖:${totalScores['computerScore']}`;
    resultDiv.innerText="Game Over! Computer Wins!";
    totalScores['playerScore']=0;
  totalScores['computerScore']=0;
    }
}

const stopBtn=document.getElementById("stop-btn");
stopBtn.onclick=()=>{
  resultDiv.innerText="";
  handsDiv.innerText="";
  scoreDiv.innerText="";
  totalScores['playerScore']=0;
  totalScores['computerScore']=0;
}

playGame();
