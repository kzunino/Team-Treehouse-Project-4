/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
 constructor(phrase) {
   this.phrase = phrase;
 }

 /** * Display phrase on game board
  */

  addPhraseToDisplay() {
    const phraseUl = $('#phrase ul');
    const quote = game.activePhrase;
    const quoteArray = quote.split('');
    quoteArray.forEach(letter => {
      if (letter !== ' ') {
        phraseUl.append(`<li class ="hide letter ${letter}">${letter}</li>`);
      } else {
        phraseUl.append(`<li class="space"> </li>`);
      }
  });
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */

  checkLetter(letter) {
     const activePhraseArray = game.activePhrase.split('');
     if (activePhraseArray.includes(`${letter}`)) {
         phrase.showMatchedLetter(letter);
      } else {
        game.removeLife();
      }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

  showMatchedLetter(letter) {
    const hiddenLetter = $(`.hide.letter.${letter}`);                         //dot notation to access mulitple classes with jQuery.
    hiddenLetter.removeClass().addClass(`show letter ${letter}`);
  }

}
