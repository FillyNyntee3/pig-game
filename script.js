'use strict';

// State variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


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

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');


rollBtn.addEventListener('click', function(){
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  // Check for rolled 1; if true, switch to the next player
  if(diceRoll !== 1){
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;


  }
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

