**Phrase Hunter**

A game where you guess the randomly generated phrase.

**Added CSS**

*Background image of a jungle game board:*

body {
  background-image: url('../images/jungleBackground.jpg');
  background-repeat:no-repeat;
  ...
}

added styling to image to fit screen:


*Changed colors of keys when selectors .chosen or .wrong are activated*

.wrong font is now dark red
.chosen font is dark green

*Keyboard tiles and phrase tiles*

darker gray for better contrast against the game board.

*Overlay*

-Added slideDown() effect to the winOrLose overlay.
-Win overlay is dark green.
-Lose overlay is dark red.

*Shadows*

added shadows to H2 and H3 to make title of game contrast better.

*Life Hearts*

Changed heart colors to reflect the .wrong key change and lose overlay
