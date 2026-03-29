var display = document.getElementById("display");
var equals = document.getElementById("equals");
var buttons = document.getElementsByClassName("button");
var clearDisplay = document.getElementById("clear")
var answer = document.getElementById("answer")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonValue = this.innerText;
        addToDisplay(buttonValue);
    });
}


function addToDisplay(value) {
    display.value += value;
    console.log("Tlačítko " + value + " bylo stisknuto!");
}

equals.addEventListener("click", function(){
    var calculationString = display.value;  
    try {
        answer.value = eval(calculationString);
    } catch (error) {
        answer.value = "error";
    }
})

clearDisplay.addEventListener("click", function(){
    display.value="";
    answer.value="";
})
