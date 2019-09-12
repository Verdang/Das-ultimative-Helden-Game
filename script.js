
const newGame = new Game();

storyTelling();
// Hier wird der event gestartet was passiert wenn der Button AAAAAAA geklickt wird!
// durch den randomizer wird die Position des Button angepasst-

const antwortA = document.getElementById('btn-AntwortA');
antwortA.addEventListener('click', ()  => {
    newGame.randomiser[0]();
    console.log(`${antwortA}`)
    storyTelling();
});


// Hier wird der event gestartet was passiert wenn der Button BBBBBBB geklickt wird!
// durch den randomizer wird die Position des Button angepasst-
const antwortB = document.getElementById('btn-AntwortB');
antwortB.addEventListener('click', ()  => {
    newGame.randomiser[1]();
    storyTelling();
});

// Hier wird der event gestartet was passiert wenn der Button CCCCCCC geklickt wird!
// durch den randomizer wird die Position des Button angepasst-
const antwortC = document.getElementById('btn-AntwortC');
antwortC.addEventListener('click', ()  => {
    newGame.randomiser[2]();
    storyTelling();
});

// Hier wird der Reset-Button aufgerufen um das Spiel neu zu laden
const btnReset = document.getElementById('btn-reset');
btnReset.addEventListener('click', function reloadPage(Game) {
    location.reload(true)
    });

function storyTelling(){
    if (newGame.antwortA === 'ENDE' || 
        newGame.antwortB === 'ENDE' || 
        newGame.antwortC === 'ENDE' )
        {
    document.getElementById('btnDiv').innerHTML = "";
    }
    
    /*
    if (document.getElementById('hero-img').src= `IMG//${newGame.graveyard}`){
    document.getElementById('btnDiv').innerHTML = "";
    }
*/
    if (newGame.level < 10){
    document.getElementById('level').innerHTML = newGame.level;
    document.getElementById('chapter').innerHTML = ` - ${newGame.chapter}`;
    document.getElementById('geschichten').innerHTML = newGame.story;
    document.getElementById('hero-img').src = `IMG/Hero/${newGame.soldierImg}`;
    document.getElementById('btn-AntwortA').innerHTML = newGame.antwortA;
    document.getElementById('btn-AntwortB').innerHTML = newGame.antwortB;
    document.getElementById('btn-AntwortC').innerHTML = newGame.antwortC;
    } 
    else if (newGame.level === 10){
    document.getElementById('hero-img').src = `IMG/Hero/${newGame.soldierImg}`;
    document.getElementById('btnDiv').innerHTML = "";
    } 
    else
    document.getElementById('btnDiv').innerHTML = "";
}

// Kittens
/*
const kittens = document.getElementsByClassName('level');
kittens.addEventListener('click', () => {
    document.getElementById('hero-img').src = `IMG/Hero/${newGame.win}`;
    });
    */