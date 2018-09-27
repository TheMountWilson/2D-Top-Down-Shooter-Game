var rectPosX = 1000;
var rectPosY = 1000;
var rectSpeedX = 5;
var rectSpeedY = 5;
var reloadFramesSkipped = 0;
var reloading = false;
var deadscreen = false;
var playerHealth = 100;
var deathnextframe = false;
var reloadPeriod = 5;

var rectNORTHIsNotBlocked = true;
var rectEASTIsNotBlocked = true;
var rectSOUTHIsNotBlocked = true;
var rectWESTIsNotBlocked = true;

function Reload () {
    if (reloadFramesSkipped==0){
        reloadFramesSkipped++;
    }
    else if(reloadFramesSkipped>0 && reloadFramesSkipped< 5){
        reloadFramesSkipped++;
    }
    else if (reloadFramesSkipped == reloadPeriod){
        reloading = false;
        reloadFramesSkipped = 0;
    }
}
function CheckHealth(){
    if(deathnextframe)deadscreen = true;
    if(playerHealth<=0)deathnextframe = true;
}
function CalculateMouseDirection(){
    a = mouseX - rectPosX;
    b = mouseY - rectPosY;
    c = Math.sqrt((a*a)+ (b*b));
}
function DrawScope(X,Y,color){
    canvasContext.fillStyle = color;
    DrawRect(X-1,Y-1,2,2);
    DrawLine(X-5,Y,X-13,Y,color,1);
    DrawLine(X+5,Y,X+13,Y,color,1);
    DrawLine(X,Y-5,X,Y-13,color,1);
    DrawLine(X,Y+5,X,Y+13,color,1);
}
function DrawPlayerHealth(){
    DrawRect(rectPosX-10,rectPosY-15,20,4,"#5c6fb2");
    DrawRect(rectPosX-10,rectPosY-15,20*(playerHealth/100),4,"#a30101");
    DrawText(playerHealth,rectPosX-5,rectPosY-15,"#000000","15px arial");
}
function MovePlayer(){
    rectLocX = Math.floor(rectPosX/10);
    rectLocY = Math.floor(rectPosY/10);
    //DetectRectangleCollisions();

    switch (keyCombination){
        case "1000":
        case "1001":
            if(rectPosX>5){
                if(rectWESTIsNotBlocked){
                    rectPosX-=rectSpeedX;
                }
                else if(rectWESTIsNotBlocked == false){
                    rectPosX = (rectLocX-1)*10+10;
                }
            }
            break;

        case "1100":
        case "1101":
            if (rectPosX>5 && rectPosY>5){

                if(rectWESTIsNotBlocked && rectNORTHIsNotBlocked){
                    rectPosX-=rectSpeedX*0.7;
                    rectPosY-=rectSpeedY*0.7;
                }
                else if (rectWESTIsNotBlocked && rectNORTHIsNotBlocked == false){
                    rectPosX-=rectSpeedX;
                    rectPosY = (rectLocY-1)*10+10;
                }   
                else if (rectNORTHIsNotBlocked && rectWESTIsNotBlocked == false){
                    rectPosY-=rectSpeedY;
                    rectPosX = (rectLocX-1)*10+10;  
                }

            }else if(rectPosX>5){
                rectPosX-=rectSpeedX;
            }else if (rectPosY>5){
                rectPosY-=rectSpeedY;
            }
            break;

        case "0100":
            if(rectPosY>5){
                if(rectNORTHIsNotBlocked){
                    rectPosY-=rectSpeedY;
                }
                else if (rectNORTHIsNotBlocked == false){
                    rectPosY = (rectLocY-1)*10+10;
                }
            }
            break;

        case "0101":
            if (rectPosX<(MAP_WIDTH-5) && rectPosY>5){
                if(rectEASTIsNotBlocked && rectNORTHIsNotBlocked){
                    rectPosX+=rectSpeedX*0.7;
                    rectPosY-=rectSpeedY*0.7;
                }
                else if(rectEASTIsNotBlocked && rectNORTHIsNotBlocked == false){
                    rectPosX+=rectSpeedX;
                    rectPosY = (rectLocY-1)*10+10;
                }
                else if(rectNORTHIsNotBlocked && rectEASTIsNotBlocked == false){
                    rectPosY-=rectSpeedY*0.7;
                    rectPosX = (rectLocX-1)*10+10;
                }
            }else if (rectPosX<(MAP_WIDTH-5)){
                rectPosX+=rectSpeedX;
            }else if (rectPosY>5){
                rectPosY-=rectSpeedY;
            }
            break;

        case "0001":
            if(rectPosX<(MAP_WIDTH-5)){
                if(rectEASTIsNotBlocked){
                    rectPosX+=rectSpeedX;
                }else if(rectEASTIsNotBlocked == false){
                    rectPosX = (rectLocX+1)*10-10;
                }
            }
            break;
        
        case "0011":
            if (rectPosX<(MAP_WIDTH-5) && rectPosY<(MAP_HEIGHT-5)){
                if(rectEASTIsNotBlocked && rectSOUTHIsNotBlocked) {
                    rectPosX+=rectSpeedX*0.7;
                    rectPosY+=rectSpeedY*0.7;
                }
                else if (rectEASTIsNotBlocked && rectSOUTHIsNotBlocked == false){
                    rectPosX+=rectSpeedX;
                    rectPosY = (rectLocY-1)*10+10;
                }
                else if (rectSOUTHIsNotBlocked && rectEASTIsNotBlocked == false){
                    rectPosY+=rectSpeedY;
                    rectPosX = (rectLocX-1)*10+10;
                }

            }else if (rectPosY<(MAP_HEIGHT-5)){
                rectPosY+=rectSpeedY;
            }else if (rectPosX<(MAP_WIDTH-5)){
                rectPosX+=rectSpeedX;
            }
            break;

        case "0010":
            if(rectPosY<(MAP_HEIGHT-5)){
                if(rectSOUTHIsNotBlocked){
                    rectPosY+=rectSpeedY;
                }
                else if (rectSOUTHIsNotBlocked == false){
                    rectPosY = (rectLocY+1)*10-10;
                }
            }
            break;
        
        case "1010":
        case "1011":
            if (rectPosX>5 && rectPosY<(MAP_HEIGHT-5)){
                if (rectWESTIsNotBlocked && rectSOUTHIsNotBlocked){
                    rectPosX-=rectSpeedX*0.7;
                    rectPosY+=rectSpeedY*0.7;
                }
                else if (rectWESTIsNotBlocked && rectSOUTHIsNotBlocked  == false){
                    rectPosX-=rectSpeedX;
                    rectPosY = (rectLocY-1)*10+10;
                }
                else if (rectSOUTHIsNotBlocked && rectWESTIsNotBlocked == false){
                    rectPosY+=rectSpeedY;
                    rectPosX = (rectLocX-1)*10+10;
                }

            }else if(rectPosX>5){
                rectPosX-=rectSpeedX;
            }else if(rectPosY<(MAP_HEIGHT-5)){
                rectPosY+=rectSpeedY;
            }
            break;
    }
}