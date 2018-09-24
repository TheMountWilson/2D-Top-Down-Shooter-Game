var CanvasWidth = window.innerWidth -100;
var CanvasHeight = window.innerHeight-50;

function Main(){
    
    calculateMouseDirection();
    movePlayer();
    drawEverything();
    checkHealth ();
}