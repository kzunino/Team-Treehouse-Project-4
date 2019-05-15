/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/** * Global Variables: * **/

const startButton = $('#btn__reset');
const keys = $('.key');
const overlay = $('#overlay');
let keysPressed = [];


const game = new Game ();
const phrase = new Phrase ();

startButton.on('click', function(){                       //starts game on click
  game.startGame();
});

keys.on('click', function(e){
  const letter = $(this).html();                          //retrives html from clicked letter
  const key = $(this);
  keysPressed.push(letter);
  game.handleInteractions(letter, key);                   //outputs the key information to relevant methods
});


$(document).on('keydown', function(event){                            //window event listens for keypresses
    if (event.keyCode === 13 && overlay.is(':visible')){              // can use enter to start the game if overlay is displayed
      game.startGame();
    }
    if (event.keyCode >= 65 && event.keyCode <= 90){                    //only executes if letters are pressed
      const letter = String.fromCharCode(event.keyCode).toLowerCase();  //converts keyCode of keypress into letter
      const key = $(`.key.${letter}`);                                  //changed html classes to include letters to target letter using string interpolation
       if (!keysPressed.includes(letter)){                              //documents and stops keys from being passed more than once
         keysPressed.push(letter);
         game.handleInteractions(letter, key);                          //passes letter and key to handleInteractions method
     }
  }
 });
