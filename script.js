// const button = document.querySelector('.btn');

// const greeting = () => {
//     alert('Hello world!');
// }

// button.addEventListener('click', greeting);

const guessField = document.getElementById('guessField');
const button = document.querySelector('button');
const text = document.getElementById('guessResult');

function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function checkGuess() {
    const checkInput = Number(guessField.value);
    console.log(checkInput);
    console.log(getRandomNumber());

if(checkInput == getRandomNumber()) {
    text.textContent = 'You have guessed';
} else {
    text.textContent = 'Try again';
}

guessField.value = '';

}