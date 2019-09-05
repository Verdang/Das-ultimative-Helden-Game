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
        this.antwortA = story[this.level].antwortA;
        this.antwortB = story[this.level].antwortB;
        this.antwortC = story[this.level].antwortC;
    }
    wrongAnswer = () => {
        window.open('loose.html');
        }
    tryAgain =() => {
        console.log("tryAgain Button")
        return;
        }
}