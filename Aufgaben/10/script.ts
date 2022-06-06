var task: HTMLInputElement = <HTMLInputElement>document.getElementById("addTask");
let display: HTMLElement = <HTMLElement>document.querySelector(".display");

var arrayIGotFromLocalStorage: any[];

window.addEventListener("load", function (): void {

    document.getElementById("addTask").addEventListener("keypress", function (event) {
        if (event.key === "Enter" && task.value != "") {
            event.preventDefault();
            document.getElementById("addTask").click();
            mybuttonHandler();
            clearInput();
        }


    });


});

function clearInput() {
    task.value = null;
};


function mybuttonHandler() {

    let inputValue: string = String(task.value);
    var conDiv = document.createElement("div");
    var textDiv = document.createElement("div");
    var del = document.createElement("i")
    var circ = document.createElement("i");

    var t = document.createTextNode(inputValue);

    textDiv.classList.add("text");

    circ.classList.add("fa-solid");
    circ.classList.add("fa-circle-notch");
    //circ.classList.add("delAppend");

    del.classList.add("fa-solid");
    del.classList.add("fa-trash");
    del.classList.add("delAppend");

    conDiv.classList.add("input");
    conDiv.classList.add("container");

    for (let i: number = 0; i < display.childElementCount; i++) {
        conDiv.setAttribute("id", JSON.stringify(i));
    }


    textDiv.appendChild(t);

    conDiv.appendChild(circ);
    conDiv.appendChild(textDiv);
    conDiv.appendChild(del);


    document.querySelector(".display").appendChild(conDiv);


    del.addEventListener("click", function (): void {
        deleteEvent(conDiv);
    });

    let listLength: number = display.childElementCount;
    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));

    function deleteEvent(parentElement: HTMLElement): void {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
        listLength--;
        document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
    }



}