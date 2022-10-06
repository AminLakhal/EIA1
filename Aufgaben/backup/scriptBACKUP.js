// Arrays mit den Übersetzungen initialisiert
var translations = {
    lightdees: [[
            "Danke",
            "Bitte sehr",
            "Entschuldigung",
            "Wie geht es ihnen",
            "Wie viel Uhr ist es"
        ], [
            "gracias",
            "Aquí tienes",
            "Lo siento",
            "Como estas",
            "Qué hora es"
        ]],
    lightdeua: [[
            "Danke",
            "Bitte sehr",
            "Entschuldigung",
            "Wie geht es ihnen",
            "Wie viel Uhr ist es"
        ], [
            "Спасибі",
            "Ось так",
            "Перепрошую",
            "Як ти",
            "Котра година"
        ], [
            "Spasybi",
            "Osʹ tak",
            "Pereproshuyu",
            "Yak ty",
            "Kotra hodyna"
        ]],
    mediumdees: [[
            "Haben sie einen Augenblick Zeit",
            "Ich komme aus Deutschland",
            "Mein Spanisch ist nicht so gut",
            "Sprechen sie Englisch",
            "Wo finde ich den Bahnhof",
            "Wie kaufe ich ein Bahnticket",
            "Ich muss ins Zentrum",
            "Wissen sie wie lange es dauert bis ins Zentrum",
            "Wie viel kostet ein Ticket?",
            "Perfekt, mein Geld reicht gerade so aus"
        ], [
            "tienes un momento",
            "soy de Alemania",
            "mi español no es muy bueno",
            "Habla usted Inglés",
            "donde puedo encontrar la estacion",
            "como compro un billete de tren",
            "tengo que ir al centro",
            "¿Sabes cuánto tarda en llegar al centro?",
            "¿Cuánto cuesta un boleto?",
            "perfecto, mi dinero es suficiente"
        ]],
    harddees: [[
            "Darf ich fragen woher sie kommen",
            "Wo kann man hier gut essen gehen",
            "Ich würde gerne etwas typisch spanisches essen",
            "Könnten sie mir helfen dort einen Tisch zu reservieren",
            "Haben sie als Einheimischer Geheimtipps für schöne Orte, die nicht zu sehr von Touristen besucht sind",
            "Ich bin für 2 Wochen hier und würde gerne einige Sehenswürdigkeiten sehen",
            "Abends hab ich vor den ein oder anderen Club unsicher zu machen",
            "Mein Hotel liegt ziemlich zentral",
            "Eigentlich kann ich alles zu Fuß erreichen",
            "Hättest du Lust mitzukommen heute Abend und City Guide zu spielen",
            "Alles Klar! klingt nach Spaß",
            "Wir treffen uns um 20 Uhr vor dem Hotel",
            "Bis später",
            "Lass uns Nummer tauschen, falls etwas nicht klappt",
            "Also 20 uhr Hotel"
        ], [
            "¿Puedo preguntar de dónde eres?",
            "¿Dónde se puede comer bien aquí?",
            "Me gustaría comer algo típicamente español.",
            "¿podría ayudarme a reservar una mesa allí?",
            "Como local, ¿tienes consejos de expertos sobre lugares hermosos que no son demasiado frecuentados por turistas?",
            "Estoy aquí por 2 semanas y me gustaría ver algunos lugares de interés.",
            "Por la noche planeo ir a uno u otro club",
            "Mi hotel es bastante céntrico.",
            "En realidad puedo caminar a todo.",
            "¿Te gustaría venir a jugar City Guide esta noche?",
            "¡Comprendido! suena divertido",
            "Nos reunimos a las 8:00 p. m. frente al hotel.",
            "te veo luego",
            "Intercambiemos números si algo no funciona",
            "Entonces, hotel a las 8 p.m."
        ]],
};
// tslint:disable-next-line: typedef
let sounds = [
    new Audio("../exam/Assets/Audio/629020__kolombooo__button-click.ogg"),
    new Audio("../exam/Assets/Audio/575731__iceofdoom__yeah-that-s-right-deep-voice-male.wav"),
    new Audio("..//exam/Assets/Audio/325443__troym1__wrong.mp3")
];
function playSample(i) {
    sounds[i].volume = 0.2;
    sounds[i].play();
}
/*
var splitted: string[] = str.split(" ");
console.log(splitted);
*/
// Array mit Länderkürzeln für Sprachauswahl 
// tslint:disable-next-line: typedef
var countries = ["de", "es", "ua", "gb", "us", "se", "nl", "fr"];
//Eventlistener angehängt
window.addEventListener("load", () => {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("button")[i].addEventListener("click", (addDifficulty));
    }
    document.querySelector(".plusS").addEventListener("click", (countryButtonHandlerTopRight));
    document.querySelector(".minusS").addEventListener("click", (countryButtonHandlerTopLeft));
    document.querySelector(".plusE").addEventListener("click", (countryButtonHandlerBottomRight));
    document.querySelector(".minusE").addEventListener("click", (countryButtonHandlerBottomLeft));
    document.querySelector("#startBtn").addEventListener("click", (startButtonHandler));
});
//Funktionen für Länderslider für jeden Button, iteriert und dekrementiert durch array der Länderkürzel um korrektes Land anzuzeigen
// die countryButtonHandler Funktion läuft bei Klick durch das Array und stellt bei 0 und am ende des Arrays die Opacity der buttons bei denen man nicht ins Minus oder darüber hinaus iterieren darf auf 0.
// Zudem wird der Buttonhanlder entfernt damit er nicht mehr clickable ist da den Button zu entfernen den den Aufbau zerschießt wenn nur nur 2 statt 3 Objekte im div per space-evenly platziert werdem
// Counter Startübersetzung
let counter = 0;
// Counter Zielübersetzung
let counter2 = 0;
// letztendlichr Coutner Status
let countryStartCounter = 0;
let countryEndCounter = 0;
if (counter == 0) {
    document.querySelector(".minusS").style.opacity = "0";
}
if (counter2 == 0) {
    document.querySelector(".minusE").style.opacity = "0";
}
function countryButtonHandlerTopRight() {
    if (counter < countries.length) {
        if (counter < countries.length && counter >= 0) {
            document.querySelector(".minusS").style.opacity = "1";
        }
        counter++;
        document.querySelector("#startCountry").removeAttribute("src");
        document.querySelector("#startCountry").setAttribute("src", "../Assets/Icons/Flags/" + countries[counter] + ".svg");
        console.log(counter);
        countryStartCounter = countries.indexOf(countries[counter]);
        playSample(0);
        if (counter == countries.length - 1) {
            document.querySelector(".minusS").style.opacity = "1";
            document.querySelector(".plusS").style.opacity = "0";
            document.querySelector(".minusS").addEventListener("click", (countryButtonHandlerTopLeft));
            document.querySelector(".plusS").removeEventListener("click", countryButtonHandlerTopRight);
            return;
        }
    }
    if (counter == 1) {
        document.querySelector(".minusS").addEventListener("click", (countryButtonHandlerTopLeft));
        console.log("add event");
    }
}
function countryButtonHandlerTopLeft() {
    if (counter < countries.length) {
        if (counter < countries.length && counter >= 0) {
            document.querySelector(".plusS").style.opacity = "1";
        }
        counter--;
        document.querySelector("#startCountry").removeAttribute("src");
        document.querySelector("#startCountry").setAttribute("src", "../Assets/Icons/Flags/" + countries[counter] + ".svg");
        console.log(counter);
        countryStartCounter = countries.indexOf(countries[counter]);
        playSample(0);
        if (counter == 0) {
            document.querySelector(".minusS").style.opacity = "0";
            document.querySelector(".plusS").style.opacity = "1";
            document.querySelector(".plusS").addEventListener("click", (countryButtonHandlerTopRight));
            document.querySelector(".minusS").removeEventListener("click", countryButtonHandlerTopLeft);
            return;
        }
    }
    if (counter == countries.length - 2) {
        document.querySelector(".plusS").addEventListener("click", (countryButtonHandlerTopRight));
        console.log("add event");
    }
}
function countryButtonHandlerBottomRight() {
    if (counter2 < countries.length) {
        if (counter2 < countries.length && counter2 >= 0) {
            document.querySelector(".minusE").style.opacity = "1";
        }
        counter2++;
        document.querySelector("#endCountry").removeAttribute("src");
        document.querySelector("#endCountry").setAttribute("src", "../Assets/Icons/Flags/" + countries[counter2] + ".svg");
        console.log(counter2);
        countryEndCounter = countries.indexOf(countries[counter2]);
        playSample(0);
        if (counter2 == countries.length - 1) {
            document.querySelector(".minusE").style.opacity = "1";
            document.querySelector(".plusE").style.opacity = "0";
            document.querySelector(".minusE").addEventListener("click", (countryButtonHandlerBottomLeft));
            document.querySelector(".plusE").removeEventListener("click", countryButtonHandlerBottomRight);
            return;
        }
        if (counter2 == 1) {
            document.querySelector(".minusE").addEventListener("click", (countryButtonHandlerBottomLeft));
            console.log("add event");
        }
    }
}
function countryButtonHandlerBottomLeft() {
    if (counter2 < countries.length) {
        if (counter2 < countries.length && counter2 >= 0) {
            document.querySelector(".plusE").style.opacity = "1";
        }
        counter2--;
        document.querySelector("#endCountry").removeAttribute("src");
        document.querySelector("#endCountry").setAttribute("src", "../Assets/Icons/Flags/" + countries[counter2] + ".svg");
        console.log(counter2);
        countryEndCounter = countries.indexOf(countries[counter2]);
        playSample(0);
        if (counter2 == 0) {
            document.querySelector(".minusE").style.opacity = "0";
            document.querySelector(".plusE").style.opacity = "1";
            document.querySelector(".plusE").addEventListener("click", (countryButtonHandlerBottomRight));
            document.querySelector(".minusE").removeEventListener("click", countryButtonHandlerBottomLeft);
            return;
        }
        if (counter2 == countries.length - 2) {
            document.querySelector(".plusE").addEventListener("click", (countryButtonHandlerBottomRight));
            console.log("add event");
        }
    }
}
//nimmt sich Wert von geklickter Schwierigkeit
let difficulty;
function addDifficulty() {
    difficulty = this.value;
    // prüfe ob richtige Schwierigkeit ausgewählt wurde
    console.log(difficulty);
    playSample(0);
}
let equalsArray;
// cleared Startbilschirm erweitert Container auf max width um Sätze korrekt dazustellen. Start Spiel 
// tslint:disable-next-line: typedef
function startButtonHandler() {
    playSample(0);
    // Schwierigkeitsalert falls keine ausgewählt wurde
    if (difficulty === undefined) {
        alert("select difficulty first");
    }
    else {
        //zeige gewählte Schwierigkeit und Sprachen in der Console an
        console.log(difficulty + countries[countryStartCounter] + countries[countryEndCounter]);
        equalsArray = difficulty + countries[countryStartCounter] + countries[countryEndCounter];
        document.querySelector(".container").remove();
        //lese script ein damit es im DOM nach dem Container und am Ende des Bodys bleibt
        var script = document.querySelector("#script");
        // erstelle Container in diesem kommt die Fortschrittsbar 
        var conDiv = document.createElement("div");
        var startContainer = document.createElement("div");
        var zielContainer = document.createElement("div");
        var progressText = document.createElement("p");
        var progressWrapper = document.createElement("div");
        var progressBar = document.createElement("div");
        progressText.innerHTML = "0/10";
        //Container style
        conDiv.classList.add("container");
        conDiv.style.height = "450px";
        conDiv.style.padding = "0 0 0 0";
        conDiv.style.width = "100%";
        //Start Sprache Area
        startContainer.style.height = "225px";
        startContainer.classList.add("container");
        startContainer.classList.add("languageContainer");
        startContainer.style.width = "90%";
        // Ziel Sprache Area
        zielContainer.style.height = "225px";
        zielContainer.classList.add("container");
        zielContainer.classList.add("languageContainer");
        zielContainer.style.width = "90%";
        // Progress
        progressWrapper.classList.add("progresswrapper");
        progressBar.classList.add("progress");
        progressWrapper.appendChild(progressBar);
        progressText.setAttribute("id", "progresstext");
        //Elemente aappenden
        conDiv.appendChild(startContainer);
        conDiv.appendChild(zielContainer);
        document.body.insertBefore(conDiv, script);
        document.body.insertBefore(progressWrapper, conDiv);
        progressWrapper.appendChild(progressText);
        //conDiv.appendChild();
    }
    /*
        var keys = Object.keys(translations);
        let i = 0;
        keys.forEach(function(key) { //loop through keys array
            i++;
            if(key == equalsArray){
                console.log(Object[i].equalsArray[1][1])
            }
            
            
        console.log(key, key == equalsArray);
        console.log(i);
          });
    
    
        if(translations.hasOwnProperty(equalsArray)){
            
            
            console.log(this[equalsArray])
        }
    
        else{console.log(this[equalsArray])}
        */
}
//# sourceMappingURL=scriptBACKUP.js.map