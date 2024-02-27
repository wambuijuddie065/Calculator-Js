const display=document.getElementById("display")

function appendToDisplay(input){
    display.value+=input
}
function calculate(){
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value="ERR"
    }
}
function clearDisplay(){
    display.value=""
}
function deleteInput(){
    display.value=display.value.toString().slice(0,-1)
}