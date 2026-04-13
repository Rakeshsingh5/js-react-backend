const randnum = parseInt(Math.random() *100 +1);
const userInput = document.getElementById('guessField');


const submit = document.querySelector('#subt');
const guessslot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const loworhi= document.querySelector('lowOrHi');

const startover= document.querySelector('resultParas');

const p = document.createElement('p');

let prev = [];
let numGuess = 1;
let playGame = true ;

if(playGame){
    submit.addEventListener('click' ,  function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess); 
        validGuess(guess);
    })  
}

function validGuess(guess){
    if( isNaN(guess) ||  guess > 100 || guess <0){
    alert("plese enter a valid no")
    }
    else {
        prev.push(guess);
        if(numGuess==11){
            
            console.log("game over ")
        }
    }
    

}

function checkguess(guess){

}

function displayguess( guess){

}

function displayMessage ( message){

}

function endgame ( ){


}
function newgame (){
     
}



