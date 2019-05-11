/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = $('#btn__reset');
const keys = $('.key');

const game = new Game ();
const phrase = new Phrase ();

// * testing for generating random quote to page *
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();


// const randomPhrase = game.getRandomPhrase()
// game.phrases.forEach((quote, index) => {
//   console.log(`Phrase ${index} - phrase: ${quote.toLowerCase()}`)
// });

// const phrase = new Phrase('Life is like a box of chocolate');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

startButton.on('click', function(){
  game.startGame();

});

keys.on('click', function(e){
  const letter = $(this).html();                          //retrives html from clicked letter
  const key = $(this);
  game.handleInteractions(letter, key);                   //outputs the key information to relevant methods
});

keys.on('keypress', function(){
  const letter = $(this).html();                          //retrives html from clicked letter
  const key = $(this);
  game.handleInteractions(letter, key);                   //outputs the key information to relevant methods
});
