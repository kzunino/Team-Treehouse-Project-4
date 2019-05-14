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
    //const quote = this.phrase;
    const quoteArray = this.phrase.split('');
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

  checkLetter(letter, key) {
     const activePhraseArray = game.activePhrase.split('');
     if (activePhraseArray.includes(`${letter}`)) {
        return true;
         // phrase.showMatchedLetter(letter);
         // key.attr('disabled', true);                           //disables key if used
         // key.addClass('chosen');
         // game.checkForWin();
      } else {
        return false;
      //   game.removeLife();
      //   key.attr('disabled', true);
      //   key.addClass('wrong');
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
