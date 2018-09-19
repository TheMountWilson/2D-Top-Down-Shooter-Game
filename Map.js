let bulletArray  = [];
let EnemyArray = [];
let MedkitArray = [];

var MapTiles = new Array(100);

var rectLocX = 0;
var rectLocY = 0;

function CreateMapTiles (){
    for (var i = 0; i < MapTiles.length; i++) {
        MapTiles[i] = new Array(80);
        for (var j = 0;j<=80;j++){
            MapTiles[i][j] = false;
        }
    }
}
function loadMap(){
    CreateMapTiles();

    EnemyArray.push(new Enemy(612,200,2,2,100,100,3));
    EnemyArray.push(new Enemy(46,100,2,2,100,120,4));
    EnemyArray.push(new Enemy(123,254,2,2,100,120,4));
    EnemyArray.push(new Enemy(235,25,2,2,100,120,4));

    MedkitArray.push(new Medkit(400,200,30));

    MapTiles[20][20] = true;
    MapTiles[20][21] = true;
    MapTiles[20][22] = true;
    MapTiles[20][23] = true;
    MapTiles[20][24] = true;
    MapTiles[20][25] = true;
    MapTiles[21][25] = true;
    MapTiles[22][25] = true;
    MapTiles[23][25] = true;
    MapTiles[24][25] = true;
    MapTiles[25][25] = true;
}

function drawMap(){
    for (var i = 0; i<(80); i++){
        for (var j = 0; j<(100); j++){
            if(MapTiles[i][j])colorRect(i*10,j*10,10,10,"#2c93a5");
        }
    }
}

function DetectRectangleCollisions(){
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

function DetectBulletCollision (bulletX,bulletY){
    let status = true;
    if (MapTiles[Math.floor(bulletX/10)][Math.floor(bulletY/10)])status = false;
    return status;
}