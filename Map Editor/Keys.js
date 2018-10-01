/* MOUSE EVENT LISTENERS */
var keyLMouse = false;
var keyRMouse = false;
var mouseX = 0;
var mouseY = 0;

function MouseDownHandler (evt){
    if (evt.button == 0) {
        keyLMouse = true;
        editTile(true);
    }
    else if(evt.button == 2) {
        keyRMouse = true;
        editTile(false);
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
    mouseX = evt.clientX - rect.left ;
    mouseY = evt.clientY - rect.top;

    
    if (keyLMouse){
        editTile(true);
    }
    if(keyRMouse){
        editTile(false);
    }
      
}