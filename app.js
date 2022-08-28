'use strict'
let hidden = document.querySelector('.hidden');
let inputc = document.querySelector('.input-btn');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let gusseing = document.querySelector('.gueesing');
let chnge_score = document.querySelector('.chnge_score');
let chnge_highscore = document.querySelector('.chnge_highscore');
let check = document.querySelector('.check_btn');
let store = document.querySelector('.abc').value;
let score = 20;
let highScore = 0;
check.addEventListener('click', function() {
    let guess = Number(document.querySelector('.abc').value);
    console.log(guess);

    if (guess === secretNumber) {
        gusseing.textContent = 'winner winner';
        hidden.textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            chnge_highscore.textContent = highScore;
        }

    }

    if (guess > 1) {

        if (guess < secretNumber) {
            gusseing.textContent = "too low"
            score--;
            chnge_score.textContent = score;

        } else if (guess > secretNumber) {
            gusseing.textContent = "too high";
            score--;
            chnge_score.textContent = score;
        }
    }
    if (score <= 0) {
        gusseing.textContent = 'you loose! wana try again'
        chnge_score.textContent = 0;
    }

});
let again = document.querySelector('.again_box');
again.addEventListener('click', function() {
    gusseing.textContent = 'Start Guessing.....';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    chnge_score.textContent = 0;
    hidden.textContent = '?';
    document.querySelector('.abc').value = '';


});
//rough
const arr = [1, 2, 3, 4];
let [x, , z] = arr;
console.log(x, z);
[x, z] = [z, x]
console.log(x, z);