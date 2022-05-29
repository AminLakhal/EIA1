// tslint:disable-next-line: typedef
let pad = [
    new Audio("../Assets/Audio/A.mp3"),
    new Audio("../Assets/Audio/C.mp3"),
    new Audio("../Assets/Audio/F.mp3"),
    new Audio("../Assets/Audio/G.mp3"),
    new Audio("../Assets/Audio/hihat.mp3"),
    new Audio("../Assets/Audio/kick.mp3"),
    new Audio("../Assets/Audio/laugh-1.mp3"),
    new Audio("../Assets/Audio/laugh-2.mp3"),
    new Audio("../Assets/Audio/snare.mp3")
];
var myInterval;
var randomInt;
var mix = [];
function playSample(i) {
    console.log("click pad " + [i + 1]);
    pad[i].play();
}
function playBeat() {
    if (document.getElementById("playBtn").classList.contains("fa-play")) {
        document.getElementById("playBtn").classList.remove("fa-play");
        document.getElementById("playBtn").classList.add("fa-pause");
        myInterval = setInterval(myBeat, 300);
    }
    else {
        document.getElementById("playBtn").classList.remove("fa-pause");
        document.getElementById("playBtn").classList.add("fa-play");
        clearInterval(myInterval);
    }
}
function myBeat() {
    playSample(5);
    playSample(8);
}
function shuffleBeat() {
    if (document.getElementById("shuffleBtn").classList.contains("fa-shuffle")) {
        document.getElementById("shuffleBtn").classList.remove("fa-shuffle");
        document.getElementById("shuffleBtn").classList.add("fa-pause");
        myInterval = setInterval(randomBeat, 300);
    }
    else {
        document.getElementById("shuffleBtn").classList.remove("fa-pause");
        document.getElementById("shuffleBtn").classList.add("fa-shuffle");
        clearInterval(myInterval);
    }
}
function randomBeat() {
    for (let i = 0; i < 4; i++) {
        randomInt = Math.floor(Math.random() * 9);
        playSample(randomInt);
    }
}
window.addEventListener("load", function () {
    document.querySelector(".pad:nth-child(1)").addEventListener("click", () => {
        playSample(0);
    });
    document.querySelector(".pad:nth-child(2)").addEventListener("click", () => {
        playSample(1);
    });
    document.querySelector(".pad:nth-child(3)").addEventListener("click", () => {
        playSample(2);
    });
    document.querySelector(".pad:nth-child(4)").addEventListener("click", () => {
        playSample(3);
    });
    document.querySelector(".pad:nth-child(5)").addEventListener("click", () => {
        playSample(4);
    });
    document.querySelector(".pad:nth-child(6)").addEventListener("click", () => {
        playSample(5);
    });
    document.querySelector(".pad:nth-child(7)").addEventListener("click", () => {
        playSample(6);
    });
    document.querySelector(".pad:nth-child(8)").addEventListener("click", () => {
        playSample(7);
    });
    document.querySelector(".pad:nth-child(9)").addEventListener("click", () => {
        playSample(8);
    });
    document.querySelector("#playBtn").addEventListener("click", (playBeat));
    document.querySelector("#shuffleBtn").addEventListener("click", (shuffleBeat));
});
//# sourceMappingURL=script.js.map