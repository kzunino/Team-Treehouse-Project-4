/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
 constructor () {
   this.missed = 0;
   this.phrases = this.createPhrases();
   this.activePhrase = this.getRandomPhrase().toLowerCase();
 }

 /** * Creates phrases for use in game
      * @return {array} An array of phrases that could be used in the game */

createPhrases() {
   const newPhrases = [
    'To be or not to be',
    'go ahead make my day',
    'May the force be with you',
    'we have a hulk',
    'Make it so',
    'I am the danger',
    'alrighty then',
    'somebody stop me',
    'get to the chopper',
    'foosball is the devil',
    'show me the money',
    'ill be back',
    'do you feel lucky punk',
    'there is no place like home',
  ];
  return newPhrases;
 }

 /** * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
 */
getRandomPhrase() {
  const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];  //calls createPhrases and radomly picks an index number of phrase.
  return randomPhrase;                                                                // returns randomPhrase
}

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame(){
  this.missed = 0;
  this.phrases = this.createPhrases();
  this.activePhrase = this.getRandomPhrase().toLowerCase();
  keysPressed = [];
  const phrase = new Phrase(this.activePhrase);
  game.resetGame();                                           //resets gameboard
  overlay.fadeOut(1000);
  phrase.addPhraseToDisplay();
}

handleInteractions(letter, key) {
    let keyIsInPhrase = phrase.checkLetter(letter);
    if (keyIsInPhrase === true){
      phrase.showMatchedLetter(letter);
      key.attr('disabled', true);                           //disables key if used
      key.addClass('chosen');
      game.checkForWin();
    } else {
      game.removeLife();
      key.attr('disabled', true);
      key.addClass('wrong');
    }
  }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

checkForWin(){
  const lettersHidden = $('.hide');
  if (lettersHidden.length === 0) {
    game.gameOver(true);
  }
}

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

removeLife(){
  const life = $('ol .tries');
  const ol = $('ol')
  life.first().remove()
  this.missed += 1;
  ol.prepend('<li><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>');
  if (this.missed === 5){
    game.gameOver();
  }
}

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

gameOver(outcome){
  //const overlay = $('#overlay');
  if (outcome === true){
    const overlayWin = $('#game-over-message').html('You won!');
    overlay.css('background-color', '#024e08').slideDown(1000)
  }else{
    const overlayLose = $('#game-over-message').html('Better luck next time!');
    overlay.css('background-color', '#4E0802').slideDown(1000)
}
 }

 /**
 * resets the keys and phrase
 */

resetGame(){
  const clearPhrase = $('ul');
  const keys = $('.key');
  clearPhrase.empty();                            //clears all ul items
  keys.prop('disabled', false);
  keys.removeClass('wrong');
  keys.removeClass('chosen');
  game.resetScoreBoard();
}

/**
* resets the scoreboard
*/

resetScoreBoard(){                              //removes all lives and appends five new lives to reset scoreboard
  const scoreboard = $('ol');
  scoreboard.empty();
  for (let i = 0; i < 5; i++){
    scoreboard.append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
}
}

}
