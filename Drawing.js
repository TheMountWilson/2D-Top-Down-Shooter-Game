function drawEverything() {
    if (deadscreen == false){
    colorRect(0,0,canvas.width,canvas.height,"#d3fff6");
    colorRect(rectPosX,rectPosY,10,10,"#000000");
    drawMap();
    if (keyLMouse){
        if (Reloading == false){
            bulletArray.push(new Bullet(rectPosX,rectPosY,(a/c)*20,(b/c)*20,"#000000","Player"));
            Reloading = true;
        }
    }
    if (Reloading) Reload();

    drawPlayerHealth();
    drawScope(mouseX,mouseY,"#000000");
    
    animateBullets();
    animateEnemies();
    animateMedkits();


    drawDebugText();
    
    }
    else if (deadscreen){
        drawDeadScreen();
    }
}

function drawDeadScreen(){
    colorText("You Died",canvas.width/2,canvas.height/2,"#000000","30px Arial","center");
    colorText("Press Ctrl+R to reset",canvas.width/2,(canvas.height/2)+35,"#000000","30px Arial","center");
}
function drawDebugText(){
    colorText (ReloadFramesSkipped,10,10,"#000000","10px");
    colorText (bulletArray.length,10,20,"#000000","10px");
    colorText (EnemyArray.length,10,30,"#000000","10px");
}

// BASIC DRAWING ELEMENTS
function colorRect(topLeftX,topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect (topLeftX,topLeftY, boxWidth,boxHeight);
}
function colorText(showWords, textX, textY, fillColor,font,align = "start"){
    canvasContext.fillStyle = fillColor;
    canvasContext.font = font;
    canvasContext.textAlign=align;
    canvasContext.fillText(showWords,textX,textY);
}
function colorCircle(centerX,centerY,radius,fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}
function colorLine (startX,startY,endX,endY,strokeColor,strokeWidth){
    canvasContext.strokeStyle = strokeColor;
    canvasContext.lineWidth = strokeWidth;
    canvasContext.beginPath();
    canvasContext.moveTo(startX,startY);
    canvasContext.lineTo(endX,endY);
    canvasContext.stroke();
}