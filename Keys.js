String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const KEY_LEFT_ARROW = 65;
const KEY_UP_ARROW = 87;
const KEY_RIGHT_ARROW = 68;
const KEY_DOWN_ARROW = 83;
var keyCombination = "0000"; // AWSD

var keyLMouse = false;
var keyRMouse = true;
var mouseX = 0;
var mouseY = 0;

var a = 0;
var b = 0;
var c = 0;


/* INITIALIZE INPUT EVENT LISTENERS */
function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    document.addEventListener('mousedown', MouseDownHandler);
    document.addEventListener('mouseup', MouseUpHandler);
    document.addEventListener('mousemove', updateMousePos);
}

/* KEYBOARD EVENT LISTENERS */
function setKeyHoldState(thisKey, indicator) {
    if(thisKey == KEY_LEFT_ARROW) {
        keyCombination = keyCombination.replaceAt(0,indicator);
    }
    if(thisKey == KEY_RIGHT_ARROW) {
        keyCombination = keyCombination.replaceAt(3,indicator);
    }
    if(thisKey == KEY_UP_ARROW) {
        keyCombination = keyCombination.replaceAt(1,indicator);
    }
    if(thisKey == KEY_DOWN_ARROW) {
        keyCombination = keyCombination.replaceAt(2,indicator);
    }
}

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, "1");
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, "0");
}



/* MOUSE EVENT LISTENERS */
function MouseDownHandler (evt){
    if (evt.button == 0) {
        keyLMouse = true;
    }
    else if(evt.button == 2) {
        keyRMouse = true;
    }
}

function MouseUpHandler (evt){
    if(evt.button == 0){
        keyLMouse = false;
    }
    else if(evt.button == 2){
        keyRMouse = false;
    }
}

function updateMousePos (evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}