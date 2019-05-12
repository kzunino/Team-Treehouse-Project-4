/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = $('#btn__reset');
const keys = $('.key');

const game = new Game ();
const phrase = new Phrase ();

startButton.on('click', function(){
  game.startGame();

});

keys.on('click', function(e){
  const letter = $(this).html();                          //retrives html from clicked letter
  const key = $(this);
  game.handleInteractions(letter, key);                   //outputs the key information to relevant methods
});

$(document).on('keydown', function(event){                            //window event listens for keypresses
    const letter = String.fromCharCode(event.keyCode).toLowerCase();  //converts keyCode of keypress into letter
    const key = $(`.key.${letter}`);                                  //changed html classes to include letters to target letter using string interpolation
    if (event.keyCode >= 65 && event.keyCode <= 90){                  //only executes if letters are pressed
      game.handleInteractions(letter, key);                           //passes letter and key to handleInteractions method
    }
 });
