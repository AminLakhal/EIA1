// Arrays mit den Übersetzungen initialisiert
// tslint:disable-next-line: typedef
var languages = {
    de: [
        "Danke",
        "Bitte sehr",
        "Entschuldigung",
        "Wie geht es ihnen",
        "Wie viel Uhr ist es",
        "Haben sie einen Augenblick Zeit",
        "Ich komme aus Deutschland",
        "Mein Spanisch ist nicht so gut",
        "Sprechen sie Englisch",
        "Wo finde ich den Bahnhof",
        "Wie kaufe ich ein Bahnticket",
        "Ich muss ins Zentrum",
        "Wissen sie wie lange es dauert bis ins Zentrum",
        "Wie viel kostet ein Ticket?",
        "Perfekt, mein Geld reicht gerade so aus",
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
    ],
    es: [
        "gracias",
        "Aquí tienes",
        "Lo siento",
        "Como estas",
        "Qué hora es",
        "tienes un momento",
        "soy de Alemania",
        "mi español no es muy bueno",
        "Habla usted Inglés",
        "donde puedo encontrar la estacion",
        "como compro un billete de tren",
        "tengo que ir al centro",
        "¿Sabes cuánto tarda en llegar al centro?",
        "¿Cuánto cuesta un boleto?",
        "perfecto, mi dinero es suficiente",
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
    ],
    ua: [
        "Спасибі",
        "Ось так",
        "Перепрошую",
        "Як ти",
        "Котра година",
        "Майте хвилинку",
        "Я родом з Німеччини",
        "Моя іспанська не дуже гарна",
        "Ви розмовляєте англійською?",
        "Де я можу знайти станцію",
        "Як купити квиток на потяг",
        "Я маю йти до центру",
        "Ви знаєте, скільки часу потрібно, щоб дістатися до центру?",
        "Скільки коштує квиток?",
        "Ідеально, моїх грошей майже вистачить",
        "Дозвольте запитати, звідки вони",
        "Де тут добре поїсти?",
        "Я хотів би з’їсти щось типово іспанське",
        "Не могли б ви допомогти мені забронювати там столик",
        "Як місцевий житель, чи є у вас інсайдерські поради щодо красивих місць, які не надто відвідують туристи?",
        "Я тут 2 тижні і хотів би побачити деякі пам'ятки",
        "Увечері планую потрапити в той чи інший клуб",
        "Мій готель досить центральний",
        "Насправді я можу пішки до всього",
        "Хочете прийти і пограти в City Guide сьогодні ввечері?",
        "Зрозумів! звучить весело",
        "Зустрічаємось о 20:00 перед готелем",
        "побачимося пізніше",
        "Давайте поміняємо числа, якщо щось не виходить",
        "Отже, 8 вечора готель"
    ]
};
var sortedKeys = Object.keys(languages).sort();
// tslint:disable-next-line: typedef
var sounds = [
    new Audio("../exam/Assets/Audio/629020__kolombooo__button-click.ogg"),
    new Audio("../exam/Assets/Audio/575731__iceofdoom__yeah-that-s-right-deep-voice-male.wav"),
    new Audio("../exam/Assets/Audio/131657__bertrof__game-sound-wrong.wav")
];
function refresh() {
    window.location.reload();
}
function playSample(i) {
    sounds[i].volume = 0.2;
    sounds[i].play();
}
// Array mit Länderkürzeln für Sprachauswahl 
// tslint:disable-next-line: typedef
var countries = ["de", "es", "ua", "gb", "us", "se", "nl", "fr"];
var countries2 = ["german", "spanish", "ukrainian", "gb", "us", "se", "nl", "fr"];
var startCountry = countries[0];
// tslint:disable-next-line: typedef
var endCountry = countries[0];
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
var counter = 0;
// Counter Zielübersetzung
var counter2 = 0;
var counter3 = 0;
// letztendlichr Coutner Status
var countryStartCounter = 0;
var countryEndCounter = 0;
let difficulty;
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
        startCountry = countries[counter];
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
        //console.log("add event");
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
        startCountry = countries[counter];
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
        //console.log("add event");
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
        endCountry = countries[counter2];
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
            //console.log("add event");
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
        endCountry = countries[counter];
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
            //console.log("add event");
        }
    }
}
//nimmt sich Wert von geklickter Schwierigkeit
function addDifficulty() {
    difficulty = this.value;
    // prüfe ob richtige Schwierigkeit ausgewählt wurde
    //console.log(difficulty);
    playSample(0);
    return difficulty;
}
var storeArrStart = [];
var storeArrEnd = [];
var randomInt;
var k = 0;
// tslint:disable-next-line: typedef
var buffer = [];
var x = 0;
var score;
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
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
        //console.log(difficulty + countries[countryStartCounter] + countries[countryEndCounter]);
        document.querySelector(".container").remove();
        //lese script ein damit es im DOM nach dem Container und am Ende des Bodys bleibt
        let script = document.querySelector("#script");
        // erstelle Container in diesem kommt die Fortschrittsbar 
        var conDiv = document.createElement("div");
        var startContainer = document.createElement("div");
        var zielContainer = document.createElement("div");
        var transContainer = document.createElement("div");
        var progressText = document.createElement("p");
        var progressWrapper = document.createElement("div");
        var progressBar = document.createElement("div");
        progressText.innerText = "0";
        //Container style
        conDiv.classList.add("container");
        conDiv.style.height = "450px";
        conDiv.style.padding = "0 0 0 0";
        conDiv.style.width = "100%";
        //Start Sprache Area
        startContainer.style.height = "225px";
        //startContainer.classList.add("container");
        startContainer.classList.add("languageContainer");
        startContainer.style.width = "90%";
        // Ziel Sprache Area
        zielContainer.style.height = "225px";
        //zielContainer.classList.add("container");
        zielContainer.classList.add("languageContainer");
        zielContainer.style.width = "90%";
        transContainer.style.height = "225px";
        //transContainer.classList.add("container");
        transContainer.classList.add("languageContainer");
        transContainer.style.width = "90%";
        // Progress
        progressWrapper.classList.add("progresswrapper");
        progressBar.classList.add("progress");
        progressWrapper.appendChild(progressBar);
        progressText.setAttribute("id", "progresstext");
        //Elemente aappenden
        conDiv.appendChild(startContainer);
        conDiv.appendChild(transContainer);
        conDiv.appendChild(zielContainer);
        document.body.insertBefore(conDiv, script);
        document.body.insertBefore(progressWrapper, conDiv);
        progressWrapper.appendChild(progressText);
        //conDiv.appendChild();
        startGame();
    }
    function selectStartParams() {
        switch (difficulty) {
            //light
            case "light":
                if (startCountry == Object.keys(languages)[0] && endCountry == Object.keys(languages)[1]) {
                    dees(5);
                }
                else if (startCountry == Object.keys(languages)[0] && endCountry == Object.keys(languages)[2]) {
                    deua(5);
                }
                break;
            case "medium":
                if (startCountry == Object.keys(languages)[0] && endCountry == Object.keys(languages)[1]) {
                    dees(10);
                }
                else if (startCountry == Object.keys(languages)[0] && endCountry == Object.keys(languages)[2]) {
                    deua(10);
                }
                break;
            case "hard":
                if (startCountry == Object.keys(languages)[0] && endCountry == Object.keys(languages)[1]) {
                    dees(15);
                }
                else if (startCountry == Object.keys(languages)[0] && endCountry == Object.keys(languages)[2]) {
                    deua(15);
                }
                console.log("hs");
                break;
        }
    }
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    function dees(l) {
        let bufferbuffer = [];
        let bufferbuffersplitted = [];
        let splitted = [];
        let gameBtn = [];
        let source;
        var clickCounter = 0;
        let scoreBuffer = 0;
        for (let i = 0; i < l; i++) {
            randomInt = Math.floor(Math.random() * languages.de.length);
            let count = storeArrStart.push(languages.de[randomInt]);
            let count2 = storeArrEnd.push(languages.es[randomInt]);
            languages.de.splice(randomInt, 1);
            languages.es.splice(randomInt, 1);
        }
        let count2 = buffer.push(storeArrEnd[k].split(" "));
        for (let i = 0; i < buffer[k].length; i++) {
            let count = splitted.push(storeArrEnd[k].split(" "));
        }
        bufferbuffer = storeArrEnd;
        for (let i = 0; i < l; i++) {
            let count3 = bufferbuffersplitted.push(bufferbuffer[i].split(" "));
        }
        console.log(bufferbuffersplitted);
        for (let i = 0; i < l; i++) {
            scoreBuffer += bufferbuffersplitted[i].length;
        }
        score = scoreBuffer;
        console.log(score);
        for (let i = 0; i < splitted.length; i++) {
            gameBtn[i] = document.createElement("button");
            gameBtn[i].classList.add("gameBtn");
            gameBtn[i].setAttribute("id", [i]);
            gameBtn[i].innerText = buffer[k][i];
            gameBtn[i].value = buffer[k][i];
        }
        shuffle(gameBtn);
        console.log(gameBtn);
        for (let i = 0; i < splitted.length; i++) {
            zielContainer.appendChild(gameBtn[i]);
            document.getElementsByClassName("gameBtn")[i].addEventListener("click", (checkFunction));
        }
        source = document.createElement("p");
        source.innerText = storeArrStart[k];
        startContainer.appendChild(source);
        function checkFunction() {
            if (this.value == buffer[k][clickCounter]) {
                x++;
                progressText.innerText = JSON.stringify(x);
                progressWrapper.appendChild(progressText);
                playSample(1);
                console.log(x);
                console.log(this.id);
                transContainer.style.gap = "10px";
                transContainer.style.paddingBottom = "50px";
                transContainer.style.flexDirection = "row";
                let clonedNode = this.cloneNode(true);
                clonedNode.style.backgroundColor = "green";
                transContainer.appendChild(clonedNode);
                gameBtn.splice(clickCounter, 1);
                this.remove();
                console.log(gameBtn);
                clickCounter++;
                if (zielContainer.childElementCount == 0) {
                    k++;
                    removeAllChildNodes(startContainer);
                    removeAllChildNodes(transContainer);
                    counter3++;
                    if (counter3 < l) {
                        dees(l);
                    }
                    else {
                        let finalscore = document.createElement("p");
                        finalscore.innerText = JSON.stringify(x) + " von " + JSON.stringify(score);
                        startContainer.classList.add("container");
                        startContainer.appendChild(finalscore);
                        window.setInterval("refresh()", 6000);
                    }
                }
            }
            else {
                x--;
                progressText.innerText = JSON.stringify(x);
                progressWrapper.appendChild(progressText);
                playSample(2);
                if (x == 0) {
                    progressText.innerText = "final stand";
                    progressWrapper.appendChild(progressText);
                    progressText.style.color = "red";
                }
                if (x < 0) {
                    removeAllChildNodes(startContainer);
                    removeAllChildNodes(zielContainer);
                    removeAllChildNodes(transContainer);
                    progressText.innerText = ("Game Over");
                    progressText.style.color = "red";
                    progressWrapper.appendChild(progressText);
                    if (x == -1) {
                        x = 0;
                    }
                    let finalscore = document.createElement("p");
                    finalscore.innerText = JSON.stringify(x) + " von " + JSON.stringify(score);
                    finalscore.style.backgroundColor = "red";
                    startContainer.classList.add("container");
                    startContainer.appendChild(finalscore);
                    window.setInterval("refresh()", 4000);
                }
            }
        }
        if (zielContainer.childElementCount == 0) {
            if (k == l) {
                console.log("ende");
                console.log("k");
            }
        }
    }
    function deua(l) {
        let bufferbuffer = [];
        let bufferbuffersplitted = [];
        let splitted = [];
        let gameBtn = [];
        let source;
        var clickCounter = 0;
        let scoreBuffer = 0;
        for (let i = 0; i < l; i++) {
            randomInt = Math.floor(Math.random() * languages.de.length);
            let count = storeArrStart.push(languages.de[randomInt]);
            let count2 = storeArrEnd.push(languages.ua[randomInt]);
            languages.de.splice(randomInt, 1);
            languages.ua.splice(randomInt, 1);
        }
        let count2 = buffer.push(storeArrEnd[k].split(" "));
        for (let i = 0; i < buffer[k].length; i++) {
            let count = splitted.push(storeArrEnd[k].split(" "));
        }
        bufferbuffer = storeArrEnd;
        for (let i = 0; i < l; i++) {
            let count3 = bufferbuffersplitted.push(bufferbuffer[i].split(" "));
        }
        console.log(bufferbuffersplitted);
        for (let i = 0; i < l; i++) {
            scoreBuffer += bufferbuffersplitted[i].length;
        }
        score = scoreBuffer;
        console.log(score);
        for (let i = 0; i < splitted.length; i++) {
            gameBtn[i] = document.createElement("button");
            gameBtn[i].classList.add("gameBtn");
            gameBtn[i].setAttribute("id", [i]);
            gameBtn[i].innerText = buffer[k][i];
            gameBtn[i].value = buffer[k][i];
        }
        shuffle(gameBtn);
        console.log(gameBtn);
        for (let i = 0; i < splitted.length; i++) {
            zielContainer.appendChild(gameBtn[i]);
            document.getElementsByClassName("gameBtn")[i].addEventListener("click", (checkFunction));
        }
        source = document.createElement("p");
        source.innerText = storeArrStart[k];
        startContainer.appendChild(source);
        function checkFunction() {
            if (this.value == buffer[k][clickCounter]) {
                x++;
                progressText.innerText = JSON.stringify(x);
                progressWrapper.appendChild(progressText);
                playSample(1);
                console.log(x);
                console.log(this.id);
                transContainer.style.gap = "10px";
                transContainer.style.paddingBottom = "50px";
                transContainer.style.flexDirection = "row";
                let clonedNode = this.cloneNode(true);
                clonedNode.style.backgroundColor = "green";
                transContainer.appendChild(clonedNode);
                gameBtn.splice(clickCounter, 1);
                this.remove();
                console.log(gameBtn);
                clickCounter++;
                if (zielContainer.childElementCount == 0) {
                    k++;
                    removeAllChildNodes(startContainer);
                    removeAllChildNodes(transContainer);
                    counter3++;
                    if (counter3 < l) {
                        deua(l);
                    }
                    else {
                        let finalscore = document.createElement("p");
                        finalscore.innerText = JSON.stringify(x) + " von " + JSON.stringify(score);
                        startContainer.classList.add("container");
                        startContainer.appendChild(finalscore);
                        window.setInterval("refresh()", 6000);
                    }
                }
            }
            else {
                x--;
                progressText.innerText = JSON.stringify(x);
                progressWrapper.appendChild(progressText);
                playSample(2);
                if (x == 0) {
                    progressText.innerText = "final stand";
                    progressWrapper.appendChild(progressText);
                    progressText.style.color = "red";
                }
                if (x < 0) {
                    removeAllChildNodes(startContainer);
                    removeAllChildNodes(zielContainer);
                    removeAllChildNodes(transContainer);
                    progressText.innerText = ("Game Over");
                    progressText.style.color = "red";
                    progressWrapper.appendChild(progressText);
                    if (x == -1) {
                        x = 0;
                    }
                    let finalscore = document.createElement("p");
                    finalscore.innerText = JSON.stringify(x) + " von " + JSON.stringify(score);
                    finalscore.style.backgroundColor = "red";
                    startContainer.classList.add("container");
                    startContainer.appendChild(finalscore);
                    window.setInterval("refresh()", 4000);
                }
            }
        }
        if (zielContainer.childElementCount == 0) {
            if (k == l) {
                console.log("ende");
                console.log("k");
            }
        }
        if (zielContainer.childElementCount == 0) {
            if (k == l) {
                console.log("ende");
                console.log("k");
            }
        }
    }
    function startGame() {
        conDiv.style.gap = "10px";
        selectStartParams();
    }
}
//# sourceMappingURL=script.js.map