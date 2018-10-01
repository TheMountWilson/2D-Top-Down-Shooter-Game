function CheckIfMouseIsOnTiles(){
    if( (mouseX>0&&mouseX<2000)&&
        (mouseY>0&&mouseY<2000))return true;
    else return false;
}
function DrawUserInterface(){
    DrawRect(mouseX-5,mouseY-5,10,10,"#4286f4");
    DrawLine(0,0,0,canvas.height-200,"#000000",3);
    DrawLine(0,canvas.height-200,canvas.width,canvas.height-200,"#000000",3);
    DrawLine(canvas.width,canvas.height-200,canvas.width,0,"#000000",3);
    DrawLine(canvas.width,0,0,0,"#000000",3);

    DrawText(Math.floor(mouseX) + "," + Math.floor(mouseY),mouseX+20,mouseY+50,"#000000","30px Arial ");
    //DrawText(Math.floor(mouseX) + "," + Math.floor(mouseY),100,canvas.height-100,"#000000","40px Arial ");
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

    DrawText ("Textures",550,canvas.height-170,"#000000","30px Arial");

    DrawRect (550,canvas.height-125,50,50,"#4286f4");
    DrawRect (610,canvas.height-125,50,50,"#4286f4");
    DrawRect (670,canvas.height-125,50,50,"#4286f4");
    DrawRect (730,canvas.height-125,50,50,"#4286f4");

    DrawEmptyRect(5+(60*selectedHeightLevel),canvas.height-130,60,60,"#000000",3);
    DrawEmptyRect(545+(60*selectedTexture),canvas.height-130,60,60,"#000000",3);

    DrawLine(800,canvas.height-200,800,canvas.height,"#000000",3);
    DrawText("Pass",820,canvas.height-170,"#000000","30px Arial");
    DrawRect (825,canvas.height-125,50,50,"#4286f4");
    DrawLine(900,canvas.height-200,900,canvas.height,"#000000",3);

    DrawText("Output",920,canvas.height-170,"#000000","30px Arial");

    DrawText("000000",920,canvas.height-85,"#000000","50px Arial");
    DrawText("A",1150,canvas.height-85,"#000000","50px Arial");
    DrawLine(1225,canvas.height-200,1225,canvas.height,"#000000",3);
 
}