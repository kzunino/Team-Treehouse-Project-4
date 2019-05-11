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
   const newPhrases = ['To be or not to be',
    'What do we say to the god of death',
    'May the force be with you',
    'Abandon all hope ye who enter',
    'Make it so'
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
  const overlay = $('#overlay');
  overlay.hide();
  const randomPhrase = game.getRandomPhrase();
  const phrase = new Phrase(randomPhrase.phrase);
  phrase.addPhraseToDisplay();
}

handleInteractions() {


}


checkForWin(){
  const lettersHidden = $('.hide');
  if (lettersHidden.length === 0) {
    console.log('winner');
    game.gameOver(win);
  }
}

removeLife(){
  const life = $('ol li');
  life.first().remove()
  if (life.length === 1){
    game.gameOver(lose);
  }
}

gameOver(){
  const overlay = $('#overlay');
  const overlayWin = $('#game-over-message').html('You won!');
  const overlayLose = $('#game-over-message').html('You lost!');
  if (win){
    overlay.show()
  }
  if (lose){
    overlay.overlayLose.show()
  }

}


}
