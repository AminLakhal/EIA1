var pad = [];
pad[0] = new Audio("../Assets/Audio/A.mp3");
pad[1] = new Audio("../Assets/Audio/C.mp3");
pad[2] = new Audio("../Assets/Audio/F.mp3");
pad[3] = new Audio("../Assets/Audio/G.mp3");
pad[4] = new Audio("../Assets/Audio/hihat.mp3");
pad[5] = new Audio("../Assets/Audio/kick.mp3");
pad[6] = new Audio("../Assets/Audio/laugh-1.mp3");
pad[7] = new Audio("../Assets/Audio/laugh-2.mp3");
pad[8] = new Audio("../Assets/Audio/snare.mp3");

function playSample(i: number) {
    console.log("click pad " + [i + 1]);
    pad[i].play();
};




window.addEventListener("load", function () {
    document.querySelector(".pad:nth-child(1)").addEventListener("click", function () {
        playSample(0);
    });

    document.querySelector(".pad:nth-child(2)").addEventListener("click", function () {
        playSample(1);
    });
    document.querySelector(".pad:nth-child(3)").addEventListener("click", function () {
        playSample(2);
    });
    document.querySelector(".pad:nth-child(4)").addEventListener("click", function () {
        playSample(3);
    });
    document.querySelector(".pad:nth-child(5)").addEventListener("click", function () {
        playSample(4);
    });
    document.querySelector(".pad:nth-child(6)").addEventListener("click", function () {
        playSample(5);
    });
    document.querySelector(".pad:nth-child(7)").addEventListener("click", function () {
        playSample(6);
    });
    document.querySelector(".pad:nth-child(8)").addEventListener("click", function () {
        playSample(7);
    });

    document.querySelector(".pad:nth-child(9)").addEventListener("click", function () {
        playSample(8);
    });

    document.querySelector(".play").addEventListener("click", function () {
        setInterval(function playBeat() {
            // Anweisungen
            pad[5].play();
        }, 333);
    });

    document.querySelector(".play").addEventListener("click", function () {
        setInterval(function playBeat() {
            // Anweisungen
            pad[4].play();
        }, 333 * 16);
    });

    document.querySelector(".play").addEventListener("click", function () {
        setInterval(function playBeat() {
            // Anweisungen
            pad[8].play();
        }, 666);

    });






});


