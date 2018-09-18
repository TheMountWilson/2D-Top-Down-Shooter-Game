var rectPosX = 100;
var rectPosY = 100;
var rectSpeedX = 5;
var rectSpeedY = 5;
var ReloadFramesSkipped = 0;
var Reloading = false;
var deadscreen = false;
var playerHealth = 100;
var deathnextframe = false;

function Reload () {
    if (ReloadFramesSkipped==0){
        ReloadFramesSkipped++;
    }
    else if(ReloadFramesSkipped>0 && ReloadFramesSkipped< 5){
        ReloadFramesSkipped++;
    }
    else if (ReloadFramesSkipped == 5){
        Reloading = false;
        ReloadFramesSkipped = 0;
    }
}

function checkHealth (){
    if(deathnextframe)deadscreen = true;
    if(playerHealth<=0)deathnextframe = true;
}

function calculateMouseDirection(){
    a = mouseX - rectPosX;
    b = mouseY - rectPosY;
    c = Math.sqrt((a*a)+ (b*b));
}

function drawScope(X,Y,color){
    canvasContext.fillStyle = color;
    colorRect(X-1,Y-1,2,2);
    colorLine(X-5,Y,X-13,Y,color,1);
    colorLine(X+5,Y,X+13,Y,color,1);
    colorLine(X,Y-5,X,Y-13,color,1);
    colorLine(X,Y+5,X,Y+13,color,1);
}