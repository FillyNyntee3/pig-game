'use strict';

// State variables
let scores;
let currentScore;
let activePlayer;
let playing;

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');


reset();


rollBtn.addEventListener('click', function(){
  if(playing){
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;
  
    // Check for rolled 1; if true, switch to the next player
    if(diceRoll !== 1){
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
      switchPlayer();
    }
  }
});


holdBtn.addEventListener('click', function(){
  if(playing){
    // Add current score to score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    // Check if the player's score is >= 100
    if(scores[activePlayer] >= 20){
      playing = false;
      // Finish game
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      
    }
  
    // Switch to the next player
    else{
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', reset);

function switchPlayer(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

function reset(){
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  dice.classList.add('hidden');

  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');

  player0El.classList.add('player--active');
}

