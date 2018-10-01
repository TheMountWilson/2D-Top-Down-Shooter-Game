String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var keyLMouse = false;
var keyRMouse = false;
var mouseX = 0;
var mouseY = 0;
var MouseIsOnTiles = CheckIfMouseIsOnTiles();
var MouseIsOnUserInterface = CheckIfMouseIsOnUserInterface();

function CheckIfMouseIsOnTiles(){
    if( (mouseX>0&&mouseX<2000) && (mouseY>0&&mouseY<2000) )return true;
    else return false;
}
function CheckIfMouseIsOnUserInterface(){
    if( (mouseX>0&&mouseX<2000) && (mouseY>2000&&mouseY<canvas.height) )return true;
    else return false;
}

function InitializeInputEventHandlers(){
    document.addEventListener('mousedown', MouseDownHandler);
    document.addEventListener('mouseup', MouseUpHandler);
    document.addEventListener('mousemove', updateMousePos);
}
function MouseDownHandler (evt){
    if (evt.button == 0) {
        keyLMouse = true;
        if(MouseIsOnTiles){
            editTile(true);
        } 
        else if (MouseIsOnUserInterface){ 
            HandleUserInterfaceClickEvent();
        }
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
    mouseX = evt.clientX - rect.left ;
    mouseY = evt.clientY - rect.top;
    if (keyLMouse){
        if(MouseIsOnTiles){
            editTile(true);
        } 
    }
    if(keyRMouse){
        if(MouseIsOnTiles){
            editTile(false);
        } 
    }
}
function editTile(setto){
    MAP[(Math.floor(mouseY/10))*200+(Math.floor(mouseX/10))] = setto;
    console.log("MAP["+(Math.floor(mouseX/10))+","+Math.floor(mouseY/10)*200+"] set to: "+setto);
}
