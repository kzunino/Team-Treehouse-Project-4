/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
 constructor () {
   //this.missed = 0;
   this.phrases = this.createPhrases();
   this.activePhrase = this.getRandomPhrase().toLowerCase();
 }

 /** * Creates phrases for use in game
      * @return {array} An array of phrases that could be used in the game */

createPhrases() {
   const newPhrases = ['To be or not to be',
    'What do we say to the god of death',
    'May the force be with you',
    'Abandon all hope ye who enter',
    'Make it so',
    'I am the danger',
    'alll righty then',
    'somebody stop me',
    'get to the chopper',
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
//  this.missed = 0;
  this.phrases = this.createPhrases();
  this.activePhrase = this.getRandomPhrase().toLowerCase();
  const overlay = $('#overlay');
  // const randomPhrase = this.activePhrase;
  const phrase = new Phrase(this.activePhrase);
  game.resetGame();
  overlay.hide();
  phrase.addPhraseToDisplay();
}

handleInteractions(letter, key) {
    phrase.checkLetter(letter, key);
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
  ol.prepend('<li><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>');
  if (life.length === 1){
    game.gameOver();
  }
}

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

gameOver(outcome){
  const overlay = $('#overlay');
  if (outcome === true){
    const overlayWin = $('#game-over-message').html('You won!');
    overlay.css('background-color', 'green').show()
  }else{
    const overlayLose = $('#game-over-message').html('Better luck next time!');
    overlay.css('background-color', 'tomato').show()
}
 }

 /**
 * resets the keys and phrase
 */

resetGame(){
  const clearPhrase = $('ul');
  //const scoreboard = $('ol');
  const keys = $('.key');
  clearPhrase.empty();
  //scoreboard.empty();
  keys.prop('disabled', false);
  keys.removeClass('wrong');
  keys.removeClass('chosen');
  game.resetScoreBoard();
  // scoreboard.append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
  // scoreboard.append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
  // scoreboard.append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
  // scoreboard.append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
  // scoreboard.append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')

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
