var speed = 30, 
    n, 
    newText = prompt("You can fast travel if you write a number.\nYou can track the story if you right click, inspect the element and select the console"), 
    currentText = 0, 
    mc = {
    name: "Name of the character",
    text: "this is the first text of the character"
    };
function nextText() {
    n = 1;
    if (currentText == n) {
        mc.text = "this is the second text";
    }
    // for more text just add if (currentText == n++) { /*your text*/ }
}
