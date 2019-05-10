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

  checkLetter(letter) {
     const activePhraseArray = game.activePhrase.split('');
     if (activePhraseArray.includes(`${letter}`)) {
         console.log('yay it works');
         phrase.showMatchedLetter(letter);
      }
    }

  showMatchedLetter(letter) {
    const hiddenLetter = $(`.hide.letter.${letter}`);
    hiddenLetter.removeClass().addClass(`show letter ${letter}`);
  }

}
