function DrawEverything() {
    if (deadscreen == false){
        DrawRect(0,0,canvas.width,canvas.height,"#d3fff6");
        DrawMap();
        DrawRect(rectPosX-5,rectPosY-5,10,10,"#000000");
        
        if (keyLMouse){
            if (reloading == false){
                bulletArray.push(new Bullet(rectPosX,rectPosY,true,(a/c)*20,(b/c)*20,"#000000","Player"));
                reloading = true;
            }
        }
        if (reloading) Reload();

        DrawPlayerHealth();
        DrawScope(mouseX,mouseY,"#000000");
        
        UpdateBullets();
        UpdateEnemies();
        UpdateMedkits();


        DrawDebugText();
    
    }
    else if (deadscreen){
        DrawDeadScreen();
    }
}

function DrawDeadScreen(){
    DrawText("You Died",canvas.width/2,canvas.height/2,"#000000","30px Arial","center");
    DrawText("Press Ctrl+R to reset",canvas.width/2,(canvas.height/2)+35,"#000000","30px Arial","center");
}
function DrawDebugText(){
    DrawText (reloadFramesSkipped,10,10,"#000000","10px");
    DrawText (bulletArray.length,10,20,"#000000","10px");
    DrawText (enemyArray.length,10,30,"#000000","10px");
}

/* BASIC ELEMENTS */

function DrawRect(topLeftX,topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect (topLeftX,topLeftY, boxWidth,boxHeight);
}
function DrawText(showWords, textX, textY, fillColor,font,align = "start"){
    canvasContext.fillStyle = fillColor;
    canvasContext.font = font;
    canvasContext.textAlign=align;
    canvasContext.fillText(showWords,textX,textY);
}
function DrawCircle(centerX,centerY,radius,fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}
function DrawLine (startX,startY,endX,endY,strokeColor,strokeWidth){
    canvasContext.strokeStyle = strokeColor;
    canvasContext.lineWidth = strokeWidth;
    canvasContext.beginPath();
    canvasContext.moveTo(startX,startY);
    canvasContext.lineTo(endX,endY);
    canvasContext.stroke();
}