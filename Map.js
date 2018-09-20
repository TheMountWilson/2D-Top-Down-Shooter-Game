let MapTiles = [];

let bulletArray  = [];
let EnemyArray = [];
let MedkitArray = [];



var rectLocX = 0;
var rectLocY = 0;

function CreateMapTiles (){
    for (let i = 0; i<600;i+=10){
        for(let j = 0;j<800;j+=10){
            MapTiles.push(new MapTile (j,i,0,true,"#d3fff6"));
        }
    }
    MapTiles[(90)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(92)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(93)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(94)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(95)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(96)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(97)+(3*80)].setMapTile_Level_Texture(1,"#2c93a5");

    MapTiles[(90)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(92)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(93)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(94)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(95)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(96)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(97)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");

    MapTiles[(90)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(90)+(5*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(90)+(6*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(90)+(7*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(90)+(8*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(90)+(9*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(90)+(10*80)].setMapTile_Level_Texture(1,"#2c93a5");

    MapTiles[(91)+(4*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(5*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(6*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(7*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(8*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(9*80)].setMapTile_Level_Texture(1,"#2c93a5");
    MapTiles[(91)+(10*80)].setMapTile_Level_Texture(1,"#2c93a5");

    /*
    MapTiles.push(new MapTile (200,200,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (200,210,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (200,220,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (200,230,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,200,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,210,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,220,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,230,0,true,"#2c93a5"));

    MapTiles.push(new MapTile (210,240,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,250,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,260,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,270,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,280,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (210,290,0,true,"#2c93a5"));

    MapTiles.push(new MapTile (210,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (220,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (230,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (240,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (250,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (260,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (270,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (280,290,0,true,"#2c93a5"));
    MapTiles.push(new MapTile (290,290,0,true,"#2c93a5"));
    */
}
function drawMap(){
    for (let i = 0; i < MapTiles.length; i++){
        MapTiles[i].draw();
    }
}
function DetectBulletCollision (bulletX,bulletY){
    
    var tile = MapTiles.find(MapTile => {
        return (MapTile.x < bulletX-2 && MapTile.x+10 >= bulletX-2)&&(MapTile.y < bulletY-2 && MapTile.y+10 >= bulletY-2);
    })
    if (tile != undefined){
        if(tile.level == 1) return true;
    }
    else return false;
    

}

function loadMap(){
    CreateMapTiles();

    EnemyArray.push(new Enemy(612,200,true,2,2,100,100,3));
    EnemyArray.push(new Enemy(123,254,true,2,2,100,120,4));
    EnemyArray.push(new Enemy(235,25,true,2,2,100,120,4));

    MedkitArray.push(new Medkit(400,200,true,30));
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

