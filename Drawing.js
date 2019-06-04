//  TODO: 
//      Refactor Camera code

const BRICK_W = 32;
const BRICK_H = 32;
const BRICK_COLS = 200;
const BRICK_ROWS = 200;
const MAP_WIDTH = BRICK_W * BRICK_COLS;
const MAP_HEIGHT = BRICK_H * BRICK_ROWS;

var camPanX = 0.0;
var camPanY = 0.0;
var tileSymbol = 0;

/** START of CAMERA CODE**/
function CalculateTileToIndex(tileCol, tileRow) {
    return (tileCol + BRICK_COLS*tileRow);
}
function isBrickAtTileCoord(brickTileCol, brickTileRow) {
    var brickIndex = CalculateTileToIndex(brickTileCol, brickTileRow);
    tileSymbol = MAP[brickIndex];
    return (MAP[brickIndex] != 0);
}
function isBrickAtPixelCoord(hitPixelX, hitPixelY) {
    var tileCol = hitPixelX / BRICK_W;
    var tileRow = hitPixelY / BRICK_H;

    tileCol = Math.floor( tileCol );
    tileRow = Math.floor( tileRow );

    if(tileCol < 0 || tileCol >= BRICK_COLS || tileRow < 0 || tileRow >= BRICK_ROWS) {
        return false;
    }
    var brickIndex = CalculateTileToIndex(tileCol, tileRow);
    return (MAP[brickIndex] != 0);
}
function InstantCamFollow() {
    camPanX = rectPosX - canvas.width/2;
    camPanY = rectPosY - canvas.height/2;
}

function DrawOnlyBricksOnScreen() {
    var cameraLeftMostCol = Math.floor(camPanX / BRICK_W)-5;
    if (cameraLeftMostCol<0) cameraLeftMostCol = 0;
    var cameraTopMostRow = Math.floor(camPanY / BRICK_H)-5;
    if (cameraTopMostRow <0) cameraTopMostRow = 0;

    var colsThatFitOnScreen = Math.floor(canvas.width / BRICK_W);
    var rowsThatFitOnScreen = Math.floor(canvas.height / BRICK_H);

    var cameraRightMostCol = cameraLeftMostCol + colsThatFitOnScreen + 11;
    if (cameraRightMostCol > BRICK_COLS) cameraRightMostCol = BRICK_COLS;
    var cameraBottomMostRow = cameraTopMostRow + rowsThatFitOnScreen + 10;
    if (cameraBottomMostRow> BRICK_ROWS) cameraBottomMostRow = BRICK_ROWS;

    for(var eachCol=cameraLeftMostCol; eachCol<cameraRightMostCol; eachCol++) {
        for(var eachRow=cameraTopMostRow; eachRow<cameraBottomMostRow; eachRow++) {
        if( isBrickAtTileCoord(eachCol, eachRow) ) {
            var brickLeftEdgeX = eachCol * BRICK_W;
            var brickTopEdgeY = eachRow * BRICK_H;
            var useImg = MapLayoutImages[tileSymbol];
            canvasContext.drawImage(useImg,brickLeftEdgeX,brickTopEdgeY,BRICK_W, BRICK_H);
            console.log("tileSymbol "+tileSymbol+" MAP[tileSymbol] "+MAP[tileSymbol]);
            }
        }
    }
}
/** END of CAMERA CODE**/

function DrawEverything() {
    if (deadscreen == false){
        DrawRect(0, 0, canvas.width, canvas.height, '#d3fff6');

        canvasContext.save(); 
        canvasContext.translate(-camPanX - (mouseX-(CanvasWidth/2))/25,-camPanY - (mouseY-(CanvasHeight/2))/25);

        DrawOnlyBricksOnScreen();
        DrawRect(rectPosX, rectPosY, 10,10, 'black');
        DrawPlayerHealth();
        UpdateBullets();
        UpdateEnemies();
        UpdateMedkits();

        canvasContext.restore(); 

        if (keyLMouse){
            if (reloading == false){
                CalculateAimingDirection();
                bulletArray.push(new Bullet(rectPosX+5,rectPosY+5,true,(a/c)*20,(b/c)*20,"#000000","Player"));
                reloading = true;
            }
        }
        if (reloading) Reload();

        DrawScope(mouseX,mouseY,"#000000");
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
    DrawText("mouseX = " + Math.floor(mouseX) + " mouseY = " + Math.floor(mouseY),10,canvas.height-100,"#000000","14px Arial ");
    DrawText("rectPosX = " + rectPosX + " rectPosY = " + rectPosY,10,canvas.height-80,"#000000","14px Arial ");
    DrawText("a = " + a + " b = "+ b,10,canvas.height-60,"#000000","14px Arial ")
    DrawText("CanvasWidth = "+ CanvasWidth + " CanvasHeight = " + CanvasHeight,10,canvas.height-40,"#000000","14px Arial ")
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

function DrawEmptyRect (topLeftX,topLeftY, boxWidth, boxHeight, strokeColor, strokeWidth){
    canvasContext.strokeStyle = strokeColor;
    canvasContext.lineWidth = strokeWidth;
    canvasContext.beginPath();
    canvasContext.moveTo(topLeftX,topLeftY);
    canvasContext.lineTo(topLeftX+boxWidth,topLeftY);
    canvasContext.lineTo(topLeftX+boxWidth,topLeftY+boxHeight);
    canvasContext.lineTo(topLeftX,topLeftY+boxHeight);
    canvasContext.lineTo(topLeftX,topLeftY);
    canvasContext.stroke();
}