function LoadSavedLevel(){
    MAP = GetSavedLevel();
}
function DrawMap(){
    for (let i = 0;i<200;i++){
        for (let j = 0;j<200;j++){
            if (MAP[i*200+j])DrawRect(j*10,i*10,10,10,"#4286f4");
        }
    }
}