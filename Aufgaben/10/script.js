var task = document.getElementById("addTask");
let display = document.querySelector(".display");
var arrayIGotFromLocalStorage;
window.addEventListener("load", function () {
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
}
;
function mybuttonHandler() {
    let inputValue = String(task.value);
    var conDiv = document.createElement("div");
    var textDiv = document.createElement("div");
    var del = document.createElement("i");
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
    for (let i = 0; i < display.childElementCount; i++) {
        conDiv.setAttribute("id", JSON.stringify(i));
    }
    textDiv.appendChild(t);
    conDiv.appendChild(circ);
    conDiv.appendChild(textDiv);
    conDiv.appendChild(del);
    document.querySelector(".display").appendChild(conDiv);
    del.addEventListener("click", function () {
        deleteEvent(conDiv);
    });
    let listLength = display.childElementCount;
    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
    function deleteEvent(parentElement) {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
        listLength--;
        document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
    }
}
//# sourceMappingURL=script.js.map