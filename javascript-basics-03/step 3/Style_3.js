var greenColor = document.querySelector(".green"),
    redColor = document.querySelector(".red"),
    blueColor = document.querySelector(".blue"),
    text = document.querySelector("#text");

function switchText() {
    greenColor.onclick = function() {
        text.style.color = "green"
    };
    redColor.onclick = function() {
        text.style.color = "red"
    };
    blueColor.onclick = function() {
        text.style.color = "blue"
    };
};
switchText()