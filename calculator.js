function clearScreen(){
document.getElementById("displayScreen").value = "";
}

function display(value){
document.getElementById("displayScreen").value += value
}

function calculate(){
var calculations = document.getElementById("displayScreen").value
var results = eval(calculations)
document.getElementById("displayScreen").value = results
}