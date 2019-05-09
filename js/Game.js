/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
 constructor () {
   this.missed = 0;
   this.phrases = this.createPhrases();
   this.activePhrases = null;
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
}
