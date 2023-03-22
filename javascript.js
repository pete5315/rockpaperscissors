function runprogram(){
let compch=computerchoice();
let playch=playerchoice();
checker(compch, playch);
}

function computerchoice(){
let compch=Math.floor(Math.random() * 3);
return compch;
//rock=0, paper=1, scissors=2
}

function playerchoice(){
    let playch=1;
    return playch;
    //get player choice
}

function checker(compch, playch){
    //check who won
    if (compch===playch) {
        runprogram();
    } else if ((compch===playch+1)%3) {
        console.log("The computer chose "+compch+". You lose!");
        } else {
            console.log("The computer chose "+compch+". You win!");
        }
}