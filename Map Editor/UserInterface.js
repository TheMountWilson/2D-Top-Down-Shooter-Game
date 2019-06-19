function DrawUserInterface(){
    
    DrawEmptyRect(0,0,canvas.width,canvas.height-200,"#000000",3);

    if(MouseIsOnTiles){
        if(passable){
            DrawRect(mouseX-5,mouseY-5,10,10,"#4286f4");
        }
        else if (passable == false){
            DrawRect(mouseX-5,mouseY-5,10,10,"#ff0000");
        }
        
        DrawText(Math.floor(mouseX) + "," + Math.floor(mouseY),mouseX+20,mouseY+50,"#000000","30px Arial ");
    }
    DrawText ("Height Levels",10,canvas.height-170,"#000000","30px Arial");

    DrawText ("0",25,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(10,canvas.height-125,50,50,"#000000",2);

    DrawText ("1",85,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(70,canvas.height-125,50,50,"#000000",2);

    DrawText ("2",145,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(130,canvas.height-125,50,50,"#000000",2);

    DrawText ("3",205,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(190,canvas.height-125,50,50,"#000000",2);

    DrawText ("4",265,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(250,canvas.height-125,50,50,"#000000",2);

    DrawText ("5",325,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(310,canvas.height-125,50,50,"#000000",2);

    DrawText ("6",385,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(370,canvas.height-125,50,50,"#000000",2);

    DrawText ("7",445,canvas.height-90,"#000000","30px Arial");
    DrawEmptyRect(430,canvas.height-125,50,50,"#000000",2);

    DrawLine(520,canvas.height-200,520,canvas.height,"#000000",3);

    DrawText ("Pass",530,canvas.height-170,"#000000","30px Arial");

    if (passable) DrawRect (540,canvas.height-125,50,50,"#4286f4");
    else if(passable == false) DrawRect (540,canvas.height-125,50,50,"#ff0000");
    DrawLine(620,canvas.height-200,620,canvas.height,"#000000",3);

    DrawText("Textures",630,canvas.height-170,"#000000","30px Arial");

    DrawRect(650,canvas.height-150,50,50,"#ff0000");
    DrawEmptyRect(645,canvas.height-155,60,60,"#000000",2);
    DrawRect(650,canvas.height-80,50,50,"#ff0000");
    DrawRect(720,canvas.height-150,50,50,"#ff0000");
    DrawRect(720,canvas.height-80,50,50,"#ff0000");
    DrawRect(790,canvas.height-150,50,50,"#ff0000");
    DrawRect(790,canvas.height-80,50,50,"#ff0000");

}

function HandleUserInterfaceClickEvent (){
    if(((mouseX>10)&&(mouseX<10+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 0;
    }
    if(((mouseX>70)&&(mouseX<70+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 1;
    }
    if(((mouseX>130)&&(mouseX<130+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 2;
    }
    if(((mouseX>190)&&(mouseX<190+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 3;
    }
    if(((mouseX>250)&&(mouseX<250+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 4;
    }
    if(((mouseX>310)&&(mouseX<310+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 5;
    }
    if(((mouseX>370)&&(mouseX<370+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 6;
    }
    if(((mouseX>430)&&(mouseX<430+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedHeightLevel = 7;
    }
    
    if(((mouseX>550)&&(mouseX<550+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedTexture = 0;
    }
    if(((mouseX>610)&&(mouseX<610+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedTexture = 1;
    }
    if(((mouseX>670)&&(mouseX<670+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedTexture = 2;
    }
    if(((mouseX>730)&&(mouseX<730+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        selectedTexture = 3;
    }

    if(((mouseX>825)&&(mouseX<825+50))&&((mouseY>canvas.height-125)&&(mouseY<canvas.height-125+50))){
        if(passable){
            passable = false;
        } 
        else if(passable == false){
            passable = true;
        } 
    }
}
