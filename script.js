let story = [
    { name: 'story-eins', img: 'level__01.jfif', kapitel:'Der Anfang'},
    { name: 'story-zwei', img: 'level__02.jfif', kapitel:'Die Reise'},
    { name: 'story-drei', img: 'level__03.jfif', kapitel:'Dier Herrausvorderung'},
    { name: 'story-vier', img: 'level__04.jfif', kapitel:'Rückschläge'},
    { name: 'story-fuenf', img: 'level__05.jpg', kapitel:'Ausrüstung'},
    { name: 'story-sechs', img: 'level__06.jfif', kapitel:'Der Drache'},
    { name: 'story-sieben',img: 'level__07.jfif', kapitel:'Der Kampf'},
    { name: 'story-acht', img: 'level__08.jfif', kapitel:'Der Sieg'},
    { name: 'story-neun', img: 'level__09.jfif', kapitel:'Der Weg nach Hause'},
    { name: 'story-zehn', img: 'highest_level.jpg', kapitel:'Die schöne Prinzessin'}
];

let level = 0;
let soldier = story.name;
let chapter = story.kapitel;
let geschichten = "";


/*
if (story.name = 'story-eins'){
    document.getElementById('level').innerHTML = "1";
    document.getElementById('chapter').innerHTML = ` - "Der Anfang"`;
    document.getElementById('geschichten').innerHTML = "Es war ein mal vor langer, langer Zeit das... <br>....Test123<br> fjkwenfjewnfew<br> fjkwenfjewnfew<br> fjkwenfjewnfew<br> fjkwenfjewnfew<br> fjkwenfjewnfew<br> fjkwenfjewnfew<br> fjkwenfjewnfew"
    console.log('Geschichte Eins ist am start........')
} 
*/


story.onclick = function(){storyTelling};

function storyTelling(){
    document.getElementById("btn-AntwortA").style.color = "white";
}


// Level erhöhen:
// document.getElementById('level').innerHTML = level+1

// Kapitel verändern:
// document.getElementById('chapter').innerHTML = 

// Geschichte hinzufügen:
// document.getElementById('geschichten').innerHTML = 

