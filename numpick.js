var num=document.getElementById("num");
var disply=document.getElementById("display");
var score=document.getElementById("score");
score.textContent="score 10";
var totalScore=10;
var comVal=document.getElementById("computerVal");
function check(){
  var inpNum=num.value;
  var compChoice=Math.floor(Math.random()*10)+1;
  if (Number(inpNum)===compChoice){
    comVal.textContent="computer generated value: "+compChoice; 
    disply.textContent="you won"
    alert("your score is"+totalScore);
    totalScore=10;
  }
  else if(inpNum===""){
    disply.textContent="enter a value";
  }

  else{
    comVal.textContent="computer generated value: "+compChoice; 
    disply.textContent="you lose";
    totalScore-=1;
    score.textContent=totalScore;
    if (totalScore===0){
      disply.textContent="restarting the game";
      totalScore=10;
    }
  }
}