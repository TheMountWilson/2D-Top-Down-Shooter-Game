var ReloadFramesSkipped = 0;
var Reloading = false;
var deadscreen = false;
var playerHealth = 100;
var deathnextframe = false;

function Reload () {
    if (ReloadFramesSkipped==0){
        ReloadFramesSkipped++;
    }
    else if(ReloadFramesSkipped>0 && ReloadFramesSkipped< 5){
        ReloadFramesSkipped++;
    }
    else if (ReloadFramesSkipped == 5){
        Reloading = false;
        ReloadFramesSkipped = 0;
    }
}

function checkHealth (){
    if(deathnextframe)deadscreen = true;
    if(playerHealth<=0)deathnextframe = true;
}
