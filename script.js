// 'use script';
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
  //rock,paper,scissors
  const options = ['rock', 'paper', 'scissors'];
  const randomIndx = Math.floor(Math.random() * 3);
  return options[randomIndx];
};

const drawGame = () => {
  // console.log('Game was draw.');
  msg.innerText = 'Game was Draw. Play Again⭐';
  msg.style.backgroundColor = '#e328b4';
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log('You win🎉');
    msg.innerText = `You win🎉 Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = '#07d025';
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You lost😥 ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = '#f93434';
  }
};

const playGame = userChoice => {
  //console.log('user choice=', userChoice);
  //Generate computer choice-->modular
  const compChoice = genCompChoice();
  //console.log('comp choice=', compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === 'rock') {
      //scissors,paper
      userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      //rock,scissors
      userWin = compChoice === 'scissors' ? false : true;
    } else {
      //paper,rock
      userWin = compChoice === 'rock' ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    //console.log('choice was clicked', userChoice);
    playGame(userChoice);
  });
});
