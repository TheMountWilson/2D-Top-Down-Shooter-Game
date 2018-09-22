function DetectBulletCollision (bulletX,bulletY,bulletDX,bulletDY){
    
    var tile;
   
    tile = MapTiles.find(MapTile => {
        return (MapTile.x < bulletX-2 && MapTile.x+10 >= bulletX-2)&&(MapTile.y < bulletY-2 && MapTile.y+10 >= bulletY-2);
    })
    if (tile != undefined){
        if(tile.level == 1) return true;
    }
    tile = MapTiles.find(MapTile => {
        return (MapTile.x <= bulletX+2 && MapTile.x+10 > bulletX+2)&&(MapTile.y < bulletY-2 && MapTile.y+10 >= bulletY-2);
    })
    if (tile != undefined){
        if(tile.level == 1) return true;
    }
    tile = MapTiles.find(MapTile => {
        return (MapTile.x <= bulletX+2 && MapTile.x+10 > bulletX+2)&&(MapTile.y <= bulletY+2 && MapTile.y+10 > bulletY+2);
    })
    if (tile != undefined){
        if(tile.level == 1) return true;
    }
    tile = MapTiles.find(MapTile => {
        return (MapTile.x < bulletX-2 && MapTile.x+10 >= bulletX-2)&&(MapTile.y <= bulletY+2 && MapTile.y+10 > bulletY+2);
    })
    if (tile != undefined){
        if(tile.level == 1) return true;
    }
    else return false;
    

}
function calculateDeterminant (x1a,x2a,y1a,y2a,x1b,x2b,y1b,y2b){
    return ((y2a-y1a)*(x1b-x2b))-((y2b-y1b)*(x1a-x2a));
}