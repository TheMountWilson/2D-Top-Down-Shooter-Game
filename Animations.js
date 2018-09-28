function UpdateEnemies(){
    for (let i = 0; i < enemyArray.length; i++){
        enemyArray[i].Update();
        if(enemyArray[i].status == false)enemyArray.splice(i,1);
    }
}
function UpdateBullets(){
    for (let i = 0; i < bulletArray.length; i++){
      bulletArray[i].Update();
      for (let j = 0; j < enemyArray.length; j++){
        // PLAYER'S BULLET HITS ENEMY
        if  (((bulletArray[i].x >= enemyArray[j].x-2)&&(bulletArray[i].x <= enemyArray[j].x+12))&&
            ((bulletArray[i].y >= enemyArray[j].y-2)&&(bulletArray[i].y <= enemyArray[j].y+12))){
            if(bulletArray[i].owner == "Player"){
                enemyArray[j].health -=5;
                bulletArray[i].status = false;
            }
        }
        // ENEMY'S BULLET HITS PLAYER
        if  (((bulletArray[i].x >= rectPosX-2)&&(bulletArray[i].x <= rectPosX+12))&&
            ((bulletArray[i].y >= rectPosY-2)&&(bulletArray[i].y <= rectPosY+12))){
            if(bulletArray[i].owner == "Enemy"){
                playerHealth -=1;
                bulletArray[i].status = false;
            }
        }
      }
      if(bulletArray[i].status == false)bulletArray.splice(i,1);
    }
}
function UpdateMedkits(){
    for (let i = 0; i < medkitArray.length; i++){
        medkitArray[i].Update();
        if(((medkitArray[i].x >= rectPosX-5)&&(medkitArray[i].x <= rectPosX+10))&&
            ((medkitArray[i].y>=rectPosY-5)&&(medkitArray[i].y<=rectPosY+10))){
            medkitArray[i].RemoveMedkitFromMap();
        }
        if(medkitArray[i].status == false)medkitArray.splice(i,1);
    }
}