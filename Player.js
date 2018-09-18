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

function checkHealth(){
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
function drawPlayerHealth(){
    colorRect(rectPosX-5,rectPosY-8,20,4,"#5c6fb2");
    colorRect(rectPosX-5,rectPosY-8,20*(playerHealth/100),4,"#a30101");
    colorText(playerHealth,rectPosX,rectPosY-10,"#000000","15px arial");
}
function movePlayer(){
    switch (keyCombination){
        case "1000":
        case "1001":
            if(rectPosX>0){rectPosX-=rectSpeedX;}
        break;

        case "1100":
        case "1101":
            if (rectPosX>0 && rectPosY>0){
                    rectPosX-=rectSpeedX*0.7;
                    rectPosY-=rectSpeedY*0.7;
            }else if(rectPosX>0){
                rectPosX-=rectSpeedX;
            }else if (rectPosY>0){
                rectPosY-=rectSpeedY;
            }
        break;

        case "0100":
            if(rectPosY>0){
                rectPosY-=rectSpeedY;
            }
        break;
        case "0101":
            if (rectPosX<(canvas.width-10) && rectPosY>0){
                rectPosX+=rectSpeedX*0.7;
                rectPosY-=rectSpeedY*0.7;
            }else if (rectPosX<(canvas.width-10)){
                rectPosX+=rectSpeedX;
            }else if (rectPosY>0){
                rectPosY-=rectSpeedY;
            }
        break;    

        case "0001":
            if(rectPosX<(canvas.width-10)){
                rectPosX+=rectSpeedX;
            }
        break;

        case "0011":
            if (rectPosX<(canvas.width-10) && rectPosY<(canvas.height-10)){
                rectPosX+=rectSpeedX*0.7;
                    rectPosY+=rectSpeedY*0.7;
            }else if (rectPosY<(canvas.height-10)){
                rectPosY+=rectSpeedY;
            }else if (rectPosX<(canvas.width-10)){
                rectPosX+=rectSpeedX;
            }
        break;

        case "0010":
            if(rectPosY<(canvas.height-10)){
                rectPosY+=rectSpeedY;
            }
        break;

        case "1010":
        case "1011":
            if (rectPosX>0 && rectPosY<(canvas.height-10)){
                rectPosX-=rectSpeedX*0.7;
                rectPosY+=rectSpeedY*0.7;
            }else if(rectPosX>0){
                rectPosX-=rectSpeedX;
            }else if(rectPosY<(canvas.height-10)){
                rectPosY+=rectSpeedY;
            }
        break;
    }
}