let bulletArray  = [];
let EnemyArray = [];

function loadMap(){
    EnemyArray.push(new Enemy(612,200,2,2,100,100,3));
    EnemyArray.push(new Enemy(46,100,2,2,100,120,4));
}

function drawEverything() {
    colorRect(0,0,canvas.width,canvas.height,"#d3fff6");
    colorRect(rectPosX,rectPosY,10,10,"#000000");
    if (keyLMouse){
        //colorCircle(mouseX,mouseY,5,"#ffffff");
        //colorLine(rectPosX+5,rectPosY+5,mouseX,mouseY,"#ffffff",3);
        if (Reloading == false){
            bulletArray.push(new Bullet(rectPosX,rectPosY,(a/c)*30,(b/c)*30));
            Reloading = true;
        }
    }
    if (Reloading) Reload();
    drawScope(mouseX,mouseY,"#000000");
    animateBullets();
    animateEnemies();

    // DEBUG TEXT
    colorText (ReloadFramesSkipped,10,10,"#000000");
    colorText (bulletArray.length,10,20,"#000000");
    colorText (EnemyArray.length,10,30,"#000000");
}

function drawScope(X,Y,color){
    canvasContext.fillStyle = color;
    colorRect(X-1,Y-1,2,2);
    colorLine(X-5,Y,X-13,Y,color,1);
    colorLine(X+5,Y,X+13,Y,color,1);
    colorLine(X,Y-5,X,Y-13,color,1);
    colorLine(X,Y+5,X,Y+13,color,1);
}

function animateEnemies(){
    for (let i = 0; i < EnemyArray.length; i++){
        EnemyArray[i].update();
        if(EnemyArray[i].status == false)EnemyArray.splice(i,1);
      }
}
function animateBullets(){
    for (let i = 0; i < bulletArray.length; i++){
      bulletArray[i].update();
      if(bulletArray[i].status == false)bulletArray.splice(i,1);

      for (let j = 0; j < EnemyArray.length; j++){
        if  (((bulletArray[i].x >= EnemyArray[j].x-2)&&(bulletArray[i].x <= EnemyArray[j].x+12))&&
            ((bulletArray[i].y >= EnemyArray[j].y-2)&&(bulletArray[i].y <= EnemyArray[j].y+12))){
                EnemyArray[j].health -=5;
                bulletArray[i].status = false;
        }
      }
    }
}



function colorRect(topLeftX,topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect (topLeftX,topLeftY, boxWidth,boxHeight);
}
function colorText(showWords, textX, textY, fillColor){
    canvasContext.fillStyle = fillColor;
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