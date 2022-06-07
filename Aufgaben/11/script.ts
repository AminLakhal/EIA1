var task: HTMLInputElement = <HTMLInputElement>document.getElementById("addTask");
let display: HTMLElement = <HTMLElement>document.querySelector(".display");
let k: number;
let listLength: number = display.childElementCount;

const artyom = new Artyom();
window.addEventListener("load", function (): void {

    // tslint:disable-next-line: typedef
    document.getElementById("addTask").addEventListener("keypress", function (event) {
        if (event.key === "Enter" && task.value != "") {
            event.preventDefault();
            document.getElementById("addTask").click();
            mybuttonHandler();
            clearInput();
        }


    });


});

// tslint:disable-next-line: typedef
function clearInput() {
    task.value = null;
}


// tslint:disable-next-line: typedef
function mybuttonHandler() {

    let inputValue: string = String(task.value);
    // tslint:disable-next-line: typedef
    var conDiv = document.createElement("div");
    // tslint:disable-next-line: typedef
    var textDiv = document.createElement("div");
    // tslint:disable-next-line: typedef
    var del = document.createElement("i");
    // tslint:disable-next-line: typedef
    var check = document.createElement("i");

    // tslint:disable-next-line: typedef
    var t = document.createTextNode(inputValue);

    textDiv.classList.add("text");

    check.classList.add("fa-solid");
    check.classList.add("fa-check");
    del.classList.add("fa-solid");
    del.classList.add("fa-trash");
    del.classList.add("delAppend");
    conDiv.classList.add("input");
    conDiv.classList.add("container");

    // tslint:disable-next-line: typedef
    for (let i = 0; i <= display.childElementCount; i++) {
        conDiv.setAttribute("id", JSON.stringify(i));
    }


    textDiv.appendChild(t);

    conDiv.appendChild(check);
    conDiv.appendChild(textDiv);
    conDiv.appendChild(del);


    document.querySelector(".display").appendChild(conDiv);


    del.addEventListener("click", function (): void {
        deleteEvent(conDiv);
    });

    check.addEventListener("click", function (): void {
        k = JSON.parse(conDiv.getAttribute("id"));

        checkEvent();
    });


    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
}



function checkEvent(): void {
    artyom.say("And this after the previous spoken text.");

    if (document.getElementById(JSON.stringify(k)).style.borderColor == "black") {

        document.getElementById(JSON.stringify(k)).style.borderColor = "green";
    }

    else {
        document.getElementById(JSON.stringify(k)).style.borderColor = "black";
    }

   

}

function deleteEvent(parentElement: HTMLElement): void {
    console.log("deleteEvent wurde aufgerufen!");
    display.removeChild(parentElement);
    listLength--;
    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));


}




var UserDictation = artyom.newDictation({
    continuous:true, // Enable continuous if HTTPS connection
    onResult:function(text){
        // Do something with the text
        console.log(text);
    },
    onStart:function(){
        console.log("Dictation started by the user");
    },
    onEnd:function(){
        alert("Dictation stopped by the user");
    }
});

UserDictation.start();

let test:string = UserDictation;
console.log(test)



// Stop whenever you want
// UserDictation.stop();