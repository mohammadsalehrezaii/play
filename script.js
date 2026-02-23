'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceimg = document.querySelector('.dice');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

diceimg.classList.add('hidden');

let turn = 0;
const current = document.querySelector(`#current--${turn}`);
const score = document.querySelector(`#score--${turn}`);

let currentNumber;
let scoreNumber;

btnRoll.addEventListener('click', function () {
diceimg.classList.remove('hidden');
    const sound = new Audio("rpg-dice-rolling-95182.mp3");
    sound.play();
    const current = document.querySelector(`#current--${turn}`);
    const score = document.querySelector(`#score--${turn}`);
    const r = Math.random();
    if (r < 0.25) {
    switchTurn()
    } else {
        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        currentNumber = Number(current.textContent);
        current.textContent = currentNumber + dice;
        diceimg.src = `dice-${dice}.png`;
    }
})

btnHold.addEventListener('click', function () {
    const sound = new Audio("Ting.mp3")
    sound.play();
        if (document.querySelector('.player--active').classList.contains('player--winner')) {
        diceimg.src = "Trophypng.parspng.com_.png";
        const sound = new Audio("pop-goes-the-weasel-trumpet.mp3");
        sound.play();
        return;
    }
    
    scoreNumber = Number(document.querySelector(`#score--${turn}`).textContent);
    currentNumber = Number(document.querySelector(`#current--${turn}`).textContent);
    console.log(currentNumber);
    scoreNumber += currentNumber;
    console.log(scoreNumber);
    document.querySelector(`#score--${turn}`).textContent = scoreNumber;
    console.log(score.textContent);
    console.log(document.querySelector(`#current--${turn}`));
    console.log(document.querySelector(`#score--${turn}`));
    switchTurn();
})
function switchTurn() {
    document.querySelector(`#current--${turn}`).textContent = 0;
    if (document.querySelector(`#score--${turn}`).textContent >= 100) {
        document.querySelector('.player--active').classList.add('player--winner')
    }
        if (!turn) {
            turn = 1;
        player0.classList.remove('player--active')
         player1.classList.add('player--active')
        } else {
            turn = 0;
            player0.classList.add('player--active')
            player1.classList.remove('player--active')
        }
    }
console.log(turn);

btnNew.addEventListener('click', function () {

    location.reload();

});
