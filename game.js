class Game {
    constructor() {
        this.level = 0;
        this.soldierImg = story[this.level].soldierImg;
        this.chapter = story[this.level].chapter;
        this.storyName = story[this.level].storyName;
        this.story = story[this.level].story;
    }
    nextLevel = () => {
        this.level++;
        this.soldierImg = story[this.level].soldierImg;
        this.chapter = story[this.level].chapter;
        this.storyName = story[this.level].storyName;
        this.story = story[this.level].story;
        this.storyTelling();
    }
    wrongAnswer = () => {
        window.open('loose.html');
        }
    tryAgain =() => {
        
        }
    storyTelling(){
        console.log(newGame.level)
        if (newGame.level < 9){
        document.getElementById('level').innerHTML = newGame.level;
        document.getElementById('chapter').innerHTML = ` - ${newGame.chapter}`;
        document.getElementById('geschichten').innerHTML = newGame.story;
        document.getElementById('hero-img').src = `IMG/Hero/${newGame.soldierImg}`
        } else 
        window.open('winning.html');
        }  
}