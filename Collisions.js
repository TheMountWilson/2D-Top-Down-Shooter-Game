/*********** NOT USED FOR NOW ************/
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