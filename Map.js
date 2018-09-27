let bulletArray  = [];
let enemyArray = [];
let medkitArray = [];

var rectLocX = 0;
var rectLocY = 0;

const BRICK_W = 20;
const BRICK_H = 20;
const BRICK_COLS = 200;
const BRICK_ROWS = 200;
const MAP_WIDTH = BRICK_W * BRICK_COLS;
const MAP_HEIGHT = BRICK_H * BRICK_ROWS;

var camPanX = 0.0;
var camPanY = 0.0;


/** START CAMERA CODE **/

function CalculateTileToIndex(tileCol, tileRow) {
    return (tileCol + BRICK_COLS*tileRow);
  }

  function isBrickAtTileCoord(brickTileCol, brickTileRow) {
    var brickIndex = CalculateTileToIndex(brickTileCol, brickTileRow);
    return (MAP[brickIndex] == 1);
  }
  
  function isBrickAtPixelCoord(hitPixelX, hitPixelY) {
    var tileCol = hitPixelX / BRICK_W;
    var tileRow = hitPixelY / BRICK_H;
    
    // using Math.floor to round down to the nearest whole number
    tileCol = Math.floor( tileCol );
    tileRow = Math.floor( tileRow );

    // first check whether the slider is within any part of the brick wall
    if(tileCol < 0 || tileCol >= BRICK_COLS ||
       tileRow < 0 || tileRow >= BRICK_ROWS) {
       return false;
    }
    
    var brickIndex = CalculateTileToIndex(tileCol, tileRow);
    return (MAP[brickIndex] == 1);
  }
  function InstantCamFollow() {
    camPanX = rectPosX - canvas.width/2;
    camPanY = rectPosY - canvas.height/2;
  }

  function DrawOnlyBricksOnScreen() {
    // what are the top-left most col and row visible on canvas?
    var cameraLeftMostCol = Math.floor(camPanX / BRICK_W)-5;
    var cameraTopMostRow = Math.floor(camPanY / BRICK_H)-5;

    // how many columns and rows of tiles fit on one screenful of area?
    var colsThatFitOnScreen = Math.floor(canvas.width / BRICK_W);
    var rowsThatFitOnScreen = Math.floor(canvas.height / BRICK_H);

    // finding the rightmost and bottommost tiles to draw.
    // the +1 and + 2 on each pushes the new tile popping in off visible area
    // +2 for columns since BRICK_W doesn't divide evenly into canvas.width
    var cameraRightMostCol = cameraLeftMostCol + colsThatFitOnScreen + 11;
    var cameraBottomMostRow = cameraTopMostRow + rowsThatFitOnScreen + 10;
    
    for(var eachCol=cameraLeftMostCol; eachCol<cameraRightMostCol; eachCol++) {
      for(var eachRow=cameraTopMostRow; eachRow<cameraBottomMostRow; eachRow++) {
      
        if( isBrickAtTileCoord(eachCol, eachRow) ) {
          var brickLeftEdgeX = eachCol * BRICK_W;
          var brickTopEdgeY = eachRow * BRICK_H;
          DrawRect(brickLeftEdgeX, brickTopEdgeY,
                   BRICK_W, BRICK_H, 'blue' );
        }
      }
    }
  }
  function DrawEverythingCamera() {
    // drawing black to erase previous frame, doing before .translate() since
    // its coordinates are not supposed to scroll when the camera view does
    DrawRect(0, 0, canvas.width, canvas.height, '#d3fff6');

    canvasContext.save(); // needed to undo this .translate() used for scroll

    // this next line is like subtracting camPanX and camPanY from every
    // canvasContext draw operation up until we call canvasContext.restore
    // this way we can just draw them at their "actual" position coordinates
    canvasContext.translate(-camPanX - (mouseX-(CanvasWidth/2))/10,-camPanY - (mouseY-(CanvasHeight/2))/10);

    //drawBricks();
    DrawOnlyBricksOnScreen();
    
    DrawRect(rectPosX, rectPosY, 10,10, 'black');
    DrawPlayerHealth();
    

    canvasContext.restore(); // undoes the .translate() used for cam scroll

    // doing this after .restore() so it won't scroll with the camera pan
    DrawScope(mouseX,mouseY,"#000000");
    DrawDebugText();
    
  }

/** END CAMERA CODE **/ 

var MAP = LoadLevel_01();

function LoadMap(){
    enemyArray.push(new Enemy(612,200,true,2,2,100,100,3));
    enemyArray.push(new Enemy(123,254,true,2,2,100,120,4));
    enemyArray.push(new Enemy(235,25,true,2,2,100,120,4));
    medkitArray.push(new Medkit(400,200,true,30));
    console.log(MAP.length);
}

function DrawMap(){
    for (let i = 0;i<200;i++){
        for (let j = 0;j<200;j++){
            if (MAP[i*200+j]==1)DrawRect(j*10,i*10,10,10,"#4286f4");
        }
    }
}

function DetectRectangleCollisions(){

    /*********** NOT USED FOR NOW ************/
    if(rectLocX>=1 && rectLocY>=1){
        // WEST
        if(((MapTiles[rectLocX-1][rectLocY-1])&&(MapTiles[rectLocX-1][rectLocY])&&(MapTiles[rectLocX-1][rectLocY+1]))||
            ((MapTiles[rectLocX-1][rectLocY-1])&&(MapTiles[rectLocX-1][rectLocY]))||
            ((MapTiles[rectLocX-1][rectLocY])&&(MapTiles[rectLocX-1][rectLocY+1]))||
            ((MapTiles[rectLocX-1][rectLocY]))
            //((MapTiles[rectLocX-1][rectLocY+1])&&(MapTiles[rectLocX-1][rectLocY]==false))
           
        )rectWESTIsNotBlocked = false;
        else rectWESTIsNotBlocked = true;
        
        //NORTH
        if(((MapTiles[rectLocX-1][rectLocY-1])&&(MapTiles[rectLocX][rectLocY-1])&&(MapTiles[rectLocX+1][rectLocY-1]))||
            ((MapTiles[rectLocX-1][rectLocY-1])&&(MapTiles[rectLocX][rectLocY-1]))||
            ((MapTiles[rectLocX][rectLocY-1])&&(MapTiles[rectLocX+1][rectLocY-1]))||
            ((MapTiles[rectLocX][rectLocY-1]))
            //((MapTiles[rectLocX+1][rectLocY-1])&&(MapTiles[rectLocX][rectLocY-1]==false))

        )rectNORTHIsNotBlocked = false;
        else rectNORTHIsNotBlocked = true;

        //EAST
        if(((MapTiles[rectLocX+1][rectLocY-1])&&(MapTiles[rectLocX+1][rectLocY])&&(MapTiles[rectLocX+1][rectLocY+1]))||
            ((MapTiles[rectLocX+1][rectLocY-1])&&(MapTiles[rectLocX+1][rectLocY]))||
            ((MapTiles[rectLocX+1][rectLocY])&&(MapTiles[rectLocX+1][rectLocY+1]))||
            ((MapTiles[rectLocX+1][rectLocY]))
            //((MapTiles[rectLocX+1][rectLocY+1])&&(MapTiles[rectLocX+1][rectLocY]==false))

        )rectEASTIsNotBlocked = false;
        else rectEASTIsNotBlocked = true;

        //SOUTH
        if(((MapTiles[rectLocX-1][rectLocY+1])&&(MapTiles[rectLocX][rectLocY+1])&&(MapTiles[rectLocX+1][rectLocY+1]))||
            ((MapTiles[rectLocX-1][rectLocY+1])&&(MapTiles[rectLocX][rectLocY+1]))||
            ((MapTiles[rectLocX][rectLocY+1])&&(MapTiles[rectLocX+1][rectLocY+1]))||
            ((MapTiles[rectLocX][rectLocY+1]))
            //((MapTiles[rectLocX+1][rectLocY+1])&&(MapTiles[rectLocX][rectLocY+1]==false))
            
        )rectSOUTHIsNotBlocked = false;
        else rectSOUTHIsNotBlocked = true;
    }
}