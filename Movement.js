var rectPosX = 100;
var rectPosY = 100;
var rectSpeedX = 5;
var rectSpeedY = 5;

function  moveEverything(){
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