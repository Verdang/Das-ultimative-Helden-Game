/*let intro = [{
    intro =" BLA BLA BLA..."
}]
document.getElementById('startbox').innerHTML = "intro.intro";
*/


const newGame = new Game();
let placeHolderB = document.getElementById('vorname').value;
storyTelling();



// Hier wird der event gestartet was passiert wenn der Button AAAAAAA geklickt wird!
const antwortA = document.getElementById('btn-AntwortA');
antwortA.addEventListener('click', ()  => {
    newGame.randomiser[0]();
    storyTelling();
});

// Hier wird der event gestartet was passiert wenn der Button BBBBBBB geklickt wird!
const antwortB = document.getElementById('btn-AntwortB');
antwortB.addEventListener('click', ()  => {
    newGame.randomiser[1]();
    storyTelling();
});

// Hier wird der event gestartet was passiert wenn der Button CCCCCCC geklickt wird!
const antwortC = document.getElementById('btn-AntwortC');
antwortC.addEventListener('click', ()  => {
    newGame.randomiser[2]();
    storyTelling();
});

function storyTelling(){
    if (newGame.level < 10){
    document.getElementById('level').innerHTML = newGame.level;
    document.getElementById('chapter').innerHTML = ` - ${newGame.chapter}`;
    document.getElementById('geschichten').innerHTML = newGame.story;
    document.getElementById('hero-img').src = `IMG/Hero/${newGame.soldierImg}`;
    document.getElementById('btn-AntwortA').innerHTML = newGame.antwortA;
    document.getElementById('btn-AntwortB').innerHTML = newGame.antwortB;
    document.getElementById('btn-AntwortC').innerHTML = newGame.antwortC;
    } else if (newGame.level = 10){
    document.getElementById('hero-img').src = `IMG/${newGame.soldierImg}`;
    } else
    document.getElementById('hero-img').src = `IMG/graveyard.jpg`;
}

