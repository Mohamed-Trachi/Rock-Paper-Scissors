const getComputerChoice=()=>{
    const choice=Math.ceil(Math.random()*3)
    switch(choice){
        case(1):return "rock"
        case(2):return "paper"
        case(3):return "scissor"
    }
}
const getPlayerChoice=()=>{
    return prompt("enter Rock, Paper or Scissors").toLocaleLowerCase()
}
const singleRound=(pc,cc)=>{
    if(pc=='rock' && cc=="rock" || pc=="paper"
    && cc=="paper" | pc=="scissor"
    && cc=="paper"){
        return 'Draw'
    }else if(pc=='rock' && cc=="scissor" || pc=="paper"
    && cc=="rock" | pc=="scissor"
    && cc=="paper"){
        return "You Win!"
    }else{
        return "You Lose!"
    }
}
const game=()=>{
    for (let i = 0; i < 5; i++) {
        let computerChoice=getComputerChoice()
        let playerChoice=getPlayerChoice()
        console.log(computerChoice);
        console.log(playerChoice);
        console.log(singleRound(playerChoice,computerChoice));
     }
}
game()
