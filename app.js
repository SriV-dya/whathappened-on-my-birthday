var btnTellme = document.querySelector("#btn-tellme");
var txtInputm = document.querySelector("#txt-inputm");
var txtInputd = document.querySelector("#txt-inputd");
var outputDiv = document.querySelector("#output");

var serverURL = "https://byabbe.se/on-this-day/8/27/events.json";


function getEventURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    var inputTextm = txtInputm.value;
    var inputTextd = txtInputd.value;

    fetch(getEventURL(inputTextm))
        .then(response => response.json());
        then(json => {
            var eventText = json.data.events;
            outputDiv.innerText = eventText;         
            });

    fetch(getEventURL(inputTextd))
        .then(response => response.json());
        then(json => {
            var eventText = json.data.events;
            outputDiv.innerText = eventText;         
            })
            .catch(errorHandler);
        };

btnTellme.addEventListener("click", clickHandler);


