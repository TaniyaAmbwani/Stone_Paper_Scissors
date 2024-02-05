let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const generator=()=>{
    //rock,pper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerHTML="Game was draw, play Again";
};

const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerHTML = userScore;
        console.log("you win");
        msg.innerHTML=`You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorepara.innerHTML= compScore;
    console.log("you lost")
    msg.innerHTML=`You Lost  ${compChoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
}
};

const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate comp choice
    const compChoice=generator();
    console.log("comp choice=",compChoice);

    if(userchoice===compChoice){
         //Draw Game
         drawGame();       
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock"){
            userScore++;
            userwin=compChoice==="paper"?false:true;
        }else if(userchoice==="paper")
        {
            userwin=compChoice === "scissors"?false:true;
        }
        else{
            userwin=compChoice === "rock"?false:true; 
               }
               showWinner(userwin,userchoice,compChoice);
    }

};

choices.forEach((choice)=>{
        
        choice.addEventListener("click",() => {
            let userchoice= choice.getAttribute("id");
            playGame(userchoice);
        });

});