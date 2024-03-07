var gen1pokemon_names = [ 
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise"
    ]


    let answer="";
    let maxWrong=6;
    let mistakes=0;
    let guesses=[];
    let word;

    function randomname(){
        answer= gen1pokemon_names[Math.floor(Math.random() * gen1pokemon_names.length)];

        console.log(answer);
    }

//generates buttons from the string(spliting the string)(map goes through each element)
    function buttongeneration(){
      let keyboardHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(key =>  `
        <button 
        class="btn-keyboard"
        id='`+ key +`'
        onClick="dealWithGuess('`+ key +`')"
        >
           `+ key +`
        </button>
        `
        ).join(''); //join decides what seperates them (, is default)//

        document.getElementById("keyboard").innerHTML = keyboardHTML;
       
    }
function dealWithGuess(selectedKey){
    guesses.indexOf(selectedKey) === -1 ? guesses.push(selectedKey) : null;
    document.getElementById(selectedKey).setAttribute("disabled",true);
 
    if(answer.indexOf(selectedKey)>=0){ // if true runs answerWord which updates the letters
        answerWord();
        gameWon();
    } else if(answer.indexOf(selectedKey)===-1){
        mistakes++;
        mistakeRefresh();
        gameLost();
        updateImg();
    }
}


function updateImg(hang){
    hang = document.getElementById("hangmanImg")
if(mistakes === 1){
hang.src = "hangman1.png"
} 
else if(mistakes === 2){
    hang.src = "hangman2.png"
}
else if(mistakes === 3){
    hang.src = "hangman3.png"
}
else if(mistakes === 4){
    hang.src = "hangman4.png"
}
else if(mistakes === 5){
    hang.src = "hangman5.png"
}
else if(mistakes === 6){
    hang.src = "hangman6.png"
}



}
function gameLost(){
    if(mistakes === maxWrong){
        document.getElementById("keyboard").innerHTML = "You LOST";
        document.getElementById("guessedWord").innerHTML = "The answer was "+ answer+"."
    }
}

function gameWon(){
    if(word === answer){ 

        document.getElementById("keyboard").innerHTML = "You WON!!";
    }
}

  function answerWord(){
    word = answer.split('').map(key => (guesses.indexOf(key) >= 0 ? key:" _ ")).join(""); //indexOf check each value and returns a positive vaule if it exist if it doesnt then i returns -1
    document.getElementById("guessedWord").innerHTML = word;                              // guesses.indexOf return "_" once updated the dealWithGuess it returns the proper key

  }


    document.getElementById("maxWrong").innerHTML = maxWrong;
randomname();
buttongeneration();
answerWord();


function mistakeRefresh(){
    document.getElementById("mistakes").innerHTML = mistakes; 
}
function reset(){
    location.reload(); // reloads the page
}