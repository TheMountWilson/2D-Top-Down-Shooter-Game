function animateEnemies(){
    for (let i = 0; i < EnemyArray.length; i++){
        EnemyArray[i].update();
        if(EnemyArray[i].status == false)EnemyArray.splice(i,1);
    }
}
function animateBullets(){

    for (let i = 0; i < bulletArray.length; i++){
      bulletArray[i].update();
      for (let j = 0; j < EnemyArray.length; j++){
        // PLAYER'S BULLET HITS ENEMY
        if  (((bulletArray[i].x >= EnemyArray[j].x-2)&&(bulletArray[i].x <= EnemyArray[j].x+12))&&((bulletArray[i].y >= EnemyArray[j].y-2)&&(bulletArray[i].y <= EnemyArray[j].y+12))){
            if(bulletArray[i].owner == "Player"){
                EnemyArray[j].health -=5;
                bulletArray[i].status = false;
            }
        }
        // ENEMY'S BULLET HITS PLAYER
        if  (((bulletArray[i].x >= rectPosX-2)&&(bulletArray[i].x <= rectPosX+12))&&((bulletArray[i].y >= rectPosY-2)&&(bulletArray[i].y <= rectPosY+12))){
            if(bulletArray[i].owner == "Enemy"){
                playerHealth -=1;
                bulletArray[i].status = false;
            }
        }
      }
      if(bulletArray[i].status == false)bulletArray.splice(i,1);
    }
}
function animateMedkits(){
    for (let i = 0; i < MedkitArray.length; i++){
        MedkitArray[i].update();

        if(((MedkitArray[i].x >= rectPosX-5)&&(MedkitArray[i].x <= rectPosX+10))&&((MedkitArray[i].y>=rectPosY-5)&&(MedkitArray[i].y<=rectPosY+10))){
            MedkitArray[i].pickedUp();
        }
        if(MedkitArray[i].status == false)MedkitArray.splice(i,1);
    }
}