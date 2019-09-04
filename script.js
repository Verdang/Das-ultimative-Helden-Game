const newGame = new Game();

newGame.storyTelling();




// Hier wird der event gestartet was passiert wenn der Button AAAAAAA geklickt wird!
const antwortA = document.getElementById('btn-AntwortA');
antwortA.addEventListener('click', newGame.nextLevel);

// Hier wird der event gestartet was passiert wenn der Button BBBBBBB geklickt wird!
const antwortB = document.getElementById('btn-AntwortB');
antwortB.addEventListener('click', newGame.wrongAnswer);

// Hier wird der event gestartet was passiert wenn der Button CCCCCCC geklickt wird!
const antwortC = document.getElementById('btn-AntwortC');
antwortC.addEventListener('click', newGame.tryAgain);
