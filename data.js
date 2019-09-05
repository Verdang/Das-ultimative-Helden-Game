let PlaceHolder;

// Function to get the Name from Player as a input for the story
function getName(){
    PlaceHolder = document.getElementsByClassName('input');
    }

let story = [
    { storyName: 'story-eins', soldierImg: 'anfang_01.jpg', chapter:'Der Anfang', story: `Es war einmal vor langer Zeit das der Ritter {PlaceHolder} durch die weiten Landen des Landes Bayern streifte. Er dachte an nicht viel, außer vielleicht an den VFL. Doch dann geschah es das er eine magische Waffe fand. Diese Waffe könnte sein armseliges leben für immer verändern. <br> <br> Was machte der Held {PlaceHolder}?`, antwortA:'Waffe nehmen', antwortB:'Waffe weg schmeißen', antwortC:'Erst mal ein Nickerchen machen', tot:'graveyard.jpg'},

    { storyName: 'story-zwei', soldierImg: 'level__02.jfif', chapter:'Die Reise', story: `Nach dem der Held {PlaceHolder}  die Ultra heftige Waffe an sich nahm, machte er sich auf die Reise. Die Reise war wirklich hart ;-) Es wartete ein sehr ominöse und krasse Herausforderung auf Ihn. <br> <br> Was machte der Held? {Placeholder}`, antwortA:'Er nahm die Herausforderung an', antwortB:'Er hatte Angst und lief weg', antwortC:'Erst mal ein Nickerchen machen', tot:'graveyard.jpg', tryAgain:'fp.gif'},

    { storyName: 'story-drei', soldierImg: 'level__03.jfif', chapter:'Dier Herrausvorderung', story: `Der Held stellte sich der Herausforderung und {Placeholder} erkannte das er einfach zu schwach für die Aufgabe war. {PlaceHolder} nahm sich vor jeden Tag hart zu trainieren, wie die Jungs seiner Borussia. <br><br> Wie trainierte unser Held?`, antwortA:'Immer heftig mit Eisen pumpen', antwortB:'FC Bayern beim Training zu schauen', antwortC:'Vielleicht ein Nickerchen machen', tot: 'graveyard.jpg'},

    { storyName: 'story-vier', soldierImg: 'level__04.jfif', chapter:'Rückschläge', story: `Nach dem unser Held {PlaceHolder} trainiert hatte wie ein Eichhörnchen auf RedBull, fühlte er die ultimative Kraft die seinen Bob Zapp artigen Körper durchströmte. Er machte sich auf die Suche nach einer entsprechenden Ausrüstung für seinen heldenhaften Körper. <br> <br> Was suchte unser Held?`, antwortA:'Ritterrüstung + Schild', antwortB:'Trikot von Borussia Dortmund', antwortC:'Schlafanzug', tot: 'graveyard.jpg'},

    { storyName: 'story-fuenf', soldierImg: 'level__05.jpg', chapter:'Ausrüstung', story: `Die neue Ausrüstung machte unseren Helden {Placeholder} so schnittig, das jeder Windkanal design nur so vor Neid erblasste. Nun war er gerüstet um gegen diesen mächtigen Drachen zu kämpfen. <br> <br> Wie gelang der Held zum Drachen?`, antwortA:'Mit einem Pferd', antwortB:'Nach dem Motto...der Berg kommt zum Propheten', antwortC:'42 - Per Anhalter', tot: 'graveyard.jpg'},

    { storyName: 'story-sechs', soldierImg: 'level__06.jfif', chapter:'Der Drache', story: `Nach einem langen ritt auf einem viel zu keinen und unbequemen Pferd, gelang der Held {PlaceHolder} zum Drachen. Der Drache ratze nur so vor sich hin. <br> Sollte der Held {Placeholder} das Schwiegermonster, äähh den Drachen wecken?`, antwortA:'Ja, natürlich', antwortB:'Sich zum Nickerchen daneben legen', antwortC:'Sich aus dem Staub machen', tot: 'graveyard.jpg'},

    { storyName: 'story-sieben',soldierImg: 'level__07.jfif', chapter:'Der Kampf', story: `Unser wahrlich prächtige Held {PlaceHolder} hatte nach dem aufwecken des Drachen die Haare zu Berge stehen. Die Knie schlotterten wie ein alter R6 Diesel in einem W124.  <br>Wie konnte er den nur den Kampf gegen dieses Ungetüm gewinnen?`, antwortA:'Waffe ziehen', antwortB:'Löffel ziehen', antwortC:'Auf ein "Parlé', tot: 'graveyard.jpg'},

    { storyName: 'story-acht', soldierImg: 'level__08.jfif', chapter:'Der Sieg', story: `Nach dem der Drache mit dem "Löffel" besiegt wurde.>> So nennt {Placeholder} seit nun das Schwert<< strömte Genugtuung und Heiterkeit seinen Body. {PlaceHolder} dachte nun Kacke, der Drache ist tot und ich kann es keinen erzählen...Also ab...`, antwortA:'...nach Hause', antwortB:'...zur Allianz Arena', antwortC:'...zum Oktoberfest', tot: 'graveyard.jpg'},

    { storyName: 'story-neun', soldierImg: 'level__09.jfif', chapter:'Der Weg nach Hause', story: `Es bahnte sich ein sehr beschwerlicher Weg nach Hause an, so hatte er doch "leicht fertig" der Prinzessin den Kopf des Drachen versprochen. Hätte er gewusst das der Kopf fast ne Tonne wiegt hätte er sein vorlautes Maul gehalten. Aber was macht man als Held nicht alles für seine holde... ;-)`, antwortA:'...Kopf mitbringen', antwortB:'...Luis Vuitton Tasche kaufen', antwortC:'...Eine schlaf Mütze kaufen', tot: 'graveyard.jpg'},

    { storyName: 'story-zehn', soldierImg: 'highest_level.jpg', chapter:'Die schöne Prinzessin', story: `Die Prinzessin rastete förmlich aus als sie den Kopf sah. Sie war so fröhlich das sie ganz spontan ein dickes Fest für alle Anwohner der Burg veranstaltet. Selbstverständlich nahm sie alle Getränke und das Buffet auf Ihren Nacken! Die Bewohner feierten Sie und den Helden {PlaceHolder} bis in frühen Morgenstunden, zu den fetten Beats von BustaRhymes. Nach dem ordentlichen Kater den alle hatten wurde selbstverständlich 2 Tage nach dem Gelage geheiratet... - ENDE - `, win:'win.jfif', antwortA:'...go and have fun withe the kittens...'},

    { storyName: 'story-elf', soldierImg:'win.jfif', chapter:'ENDE', story: `ENDE`, win:'win.jfif'}
];