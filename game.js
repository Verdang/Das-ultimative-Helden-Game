class Game {
    constructor() {
        this.level = 0;
        this.changeLevel();
    }
    nextLevel = () => {
        this.level++;
        this.changeLevel();
    }
    changeLevel = () => {
        this.soldierImg = story[this.level].soldierImg;
        this.chapter = story[this.level].chapter;
        this.storyName = story[this.level].storyName;
        this.story = story[this.level].story;
        this.tot = story[this.level].tot;
        let randomizedArr = this.randomizeItems(
        [
            story[this.level].antwortA,
            story[this.level].antwortB,
            story[this.level].antwortC
        ]);
// vertauschen der Antworten und zusätzlich die aufrufe was es tut.
        this.antwortA = randomizedArr[0][0];
        this.antwortB = randomizedArr[0][1];
        this.antwortC = randomizedArr[0][2];
        this.randomiser = randomizedArr[1];
    }

    randomizeItems(items)
//Funktion um 2 Arrays zu erstellen in dem einmal der Button random gespeichert ist
// und zum anderen der Index gleich random abgespeichert wird.

    {
        let cached , temp, i, rand;
        cached = items.slice(0);
        i = cached.length;
        let randomiser = [this.nextLevel, this.wrongAnswer, this.tryAgain];

        while(--i)
        {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
            temp = randomiser[rand];
            randomiser[rand] = randomiser[i];
            randomiser[i] = temp;

        }
        return [cached, randomiser];
    }

    wrongAnswer = () => {
        this.soldierImg = story[1].tot;
        }
    tryAgain =() => {
        this.soldierImg = story[1].tryAgain;
        }
}
