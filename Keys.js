String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
var CanvasWidth = window.innerWidth -100;
var CanvasHeight = window.innerHeight-50;

const KEY_LEFT_ARROW = 65;      // A
const KEY_UP_ARROW = 87;        // W
const KEY_DOWN_ARROW = 83;      // S
const KEY_RIGHT_ARROW = 68;     // D
var keyCombination = "0000";    // AWSD

var keyLMouse = false;
var keyRMouse = true;
var mouseX = CanvasWidth/2;
var mouseY = CanvasHeight/2;

var a = 0;
var b = 0;
var c = 0;

function InitializeInputEventHandlers() {
    document.addEventListener("keydown", SetKeyboardButton);
    document.addEventListener("keyup", ResetKeyboardButton);
    document.addEventListener('mousedown', SetMouseButton);
    document.addEventListener('mouseup', ResetMouseButton);
    document.addEventListener('mousemove', UpdateMousePosition);
}

/* KEYBOARD */

function SetKeyHoldState(pressedKey, indicator) {
    if(pressedKey == KEY_LEFT_ARROW) {
        keyCombination = keyCombination.replaceAt(0,indicator);
    }
    if(pressedKey == KEY_RIGHT_ARROW) {
        keyCombination = keyCombination.replaceAt(3,indicator);
    }
    if(pressedKey == KEY_UP_ARROW) {
        keyCombination = keyCombination.replaceAt(1,indicator);
    }
    if(pressedKey == KEY_DOWN_ARROW) {
        keyCombination = keyCombination.replaceAt(2,indicator);
    }
}

function SetKeyboardButton(event) {
    SetKeyHoldState(event.keyCode, "1");
}

function ResetKeyboardButton(event) {
    SetKeyHoldState(event.keyCode, "0");
}



/* MOUSE */

function SetMouseButton (event){
    if (event.button == 0) {
        keyLMouse = true;
    }
    else if(event.button == 2) {
        keyRMouse = true;
    }
}

function ResetMouseButton (event){
    if(event.button == 0){
        keyLMouse = false;
    }
    else if(event.button == 2){
        keyRMouse = false;
    }
}

function UpdateMousePosition (event){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = event.clientX - rect.left - root.scrollLeft;
    mouseY = event.clientY - rect.top - root.scrollTop;
}