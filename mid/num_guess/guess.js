let randnum = parseInt(Math.random() *100 +1);
const userInput = document.getElementById('guessField');


const submit = document.querySelector('#subt');
const guessslot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const loworhi= document.querySelector('.lowOrHi');

const startover= document.querySelector('.resultParas');

const p = document.createElement('p');
const btn = document.createElement('button'); //button 
btn.innerText= "start over";

let prev = [];
let numGuess = 1;
let playGame = true ;

if(playGame){
    submit.addEventListener('click' ,  function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess); 
        validGuess(guess);
    })  
}

function validGuess(guess){
    if( isNaN(guess) ||  guess > 100 || guess <0){
    alert("plese enter a valid no")
    }
    else {
        prev.push(guess);
        if(numGuess==10){
            displayguess(guess);
            displayMessage(`game over  . Random num was ${randnum}`)
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }
    

}

function checkguess(guess){
    if(guess=== randnum){
        displayMessage(`correct `)
        endgame();

    }
    else if(guess < randnum){
        displayMessage(`number is too low`);
    }
     else if(guess > randnum){
        displayMessage(`number is too hi`);
    }
}

function displayguess( guess){
    userInput.value = "";
    guessslot.innerHTML += `${guess}  `;
    
    remain.innerHTML = `${10 - numGuess}`;
    numGuess++;

}

function displayMessage ( message){
    loworhi.innerHTML = `<h2>${message} </h2>`;
}

function endgame ( ){
    userInput.value= '';
    userInput.setAttribute('disabled' , '');
    // prev=[];
    // numGuess=10;
    p.classList.add('button');
    p.appendChild(btn);
    startover.appendChild(p);
    playGame = false;
    newgame();


}
function newgame (){
    btn.addEventListener('click',function(e){
        randnum =parseInt(Math.random() *100 +1);
        prev= [];
        numGuess=1;
        guessslot.innerhtml='';
        
    });

}



