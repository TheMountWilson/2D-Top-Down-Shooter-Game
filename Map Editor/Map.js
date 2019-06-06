function LoadSavedLevel(){
    MAP = GetSavedLevel();
}
function DrawMap(){
    var useImg;
    DrawRect(0,0,canvas.width,canvas.height,"#eafffc");
    for (let i = 0;i<200;i++){
        for (let j = 0;j<200;j++){
            if(MAP[i*200+j]!=0){
                useImg = MapLayoutImages[MAP[i*200+j]];
                canvasContext.drawImage(useImg,j*10,i*10,10,10);
            }
        }
    }
}
