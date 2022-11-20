//Adding the required packages
var readlineSync=require("readline-sync");
var chalk=require("chalk");
var log=console.log;
var emoji=require("node-emoji");

//Starting title
log(chalk.hex("#1D4ED8")("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
log(chalk.hex("#FCD34D")("~ How Well Do You Know Me? ~"))
log(chalk.hex("#1D4ED8")("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"))

//Defining variables along with other trivia lists as well as highScorers details
var userName="";
var userScore=0;
var highScorers=[
  {
    pName:"Pavan",
    pScore:12
  },
  {
    pName:"Kalyan",
    pScore:9
  }
]

var trivia=[
  {
    question:"What is my full name(Without initials)?\n",
    answer:"Pavan Kalyan"
  },
  {
    question:"How old am I?(in numbers)\n",
    answer:"22"
  },
  {
    question:"My favourite color is?\n",
    answer:"Blue"
  },
  {
    question:"My favourite webseries is?\n",
    answer:"Dark"
  },
  {
    question:"Am I a foodie?(Type Yes/No)\n",
    answer:"Yes"
  },
  {
    question:"Which group game do I play with friends along with Discord?\n",
    answer:"Valorant"
  }
]

//Get and check userName.
function tandcUN(){
  userName=readlineSync.question("State your Name:\n");
  if(userName==""){
    log(chalk.hex("#FCD34D")("Don't give an empty response"+emoji.get("dizzy_face")))
    tandcUN();
  }else{
    log(chalk.hex("#FCD34D")("\nWelcome to the game ")+chalk.greenBright.underline(userName))
  }
}

tandcUN();

// log(chalk.hex("#FCD34D")("\nHey "+userName+" Let's get started")+emoji.get("grinning")+"\n")

//Printing the rules of the game
log(chalk.hex("#A5B4FC").bold("Game Info: Here you will get a list of questions which on answering you will get to know more about me.The rules of this game are given below ")+emoji.get("point_down"))

log(chalk.hex("#3B82F6").underline("\nGame Rules:\n"))
log(chalk.yellowBright("1. This trivia consists of 5 single answer questions.\n2. For each correctly answered question, you will be awarded 2 points.\n3. For each incorrectly answered question,you will be deducted 1 point.\n4. For each question, you have to type the answer in lowercase format and press Enter key for getting the next question.\n"))

//Printing the highScorers and their details
log(chalk.greenBright.underline("HALL OF FAME:\n"))
for(i=0;i<highScorers.length;i++){
  log(chalk.hex("#F9A8D4")(highScorers[i].pName+" --> "+highScorers[i].pScore))
}
//Starting the game and defining functions for checking answers
var response=confirm("\n Are you ready?")
function checkAns(questionAsked,answerGiven){
  var userAns=readlineSync.question(questionAsked);
  if(userAns.toLowerCase()===answerGiven.toLowerCase()){
    log(chalk.green(`\nYipppeee!!! ${answerGiven} is the correct answer`)+emoji.get("grinning"))
    userScore=userScore+2;
  }else{
    log(chalk.hex("#78350F")("\nUnfortunately your answer is incorrect ")+emoji.get(":pensive:"))
    userScore=userScore-1;
    log(chalk.hex("#78350F")(`${answerGiven} is the correct answer`))
  }

  log(chalk.greenBright("Total Points Scored: "+userScore+"\n"));
  log("-------------------------")
}

//Conditional program to provide different actions for the response
if(response===true){
  for(i=0;i<trivia.length;i++){
    var x=i+1;
    var q=trivia[i].question;
    var a=trivia[i].answer;
    log(chalk.hex("#4338CA")("\nQuestion Number "+x+"\n"))
    checkAns(q,a);
  }
}else{
  log(chalk.hex("#064E3B")("Hope you find the time to play the game "+emoji.get(":open_mouth:")))
}

//Printing the final score after the game is over.
log("\nTotal points scored by "+userName+": "+userScore);
var crossed=0;
for(i=0;i<highScorers.length;i++){
  if(userScore>=highScorers[i].pScore){
    crossed+=1;
  }
}
if(crossed>0){
  log(chalk.yellowBright("\nCongratulations you are among the high scorers ")+emoji.get(":smiley:"))
}
log(chalk.hex("#A78BFA")("Thanks for playing "+userName+" "+emoji.get("wave")))
