let bulletArray  = [];
let EnemyArray = [];
let MedkitArray = [];

var MapTiles = new Array(100);

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
