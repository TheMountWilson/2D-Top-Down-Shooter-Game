function ShowOutput(){
    var OutStrToScreen = "[";
    OutStrToClipBoard = "[";
    var counter = 0;

    for (let i = 0;i<MAP.length;i++){
        if (counter == 200){
            OutStrToScreen += "\n";
            counter = 0;
        }
        if(MAP[i]){
            OutStrToScreen += "1,";
            OutStrToClipBoard += "1,";
        }
        else {
            OutStrToScreen += "0,";
            OutStrToClipBoard += "0,";
        }
        counter++;
    }
    OutStrToScreen += "]"
    OutStrToClipBoard += "]"
    document.getElementById('output').innerHTML = OutStrToScreen;
    console.log("MAP.length = "+MAP.length);
}
function CopyOutputToClipboard(){
    if(OutStrToClipBoard == ""){
        window.alert("Output string is empty");
    }
    else if(OutStrToClipBoard != ""){
        navigator.clipboard.writeText(OutStrToClipBoard);
        window.alert("Copied to Clipboard");
    }
}
function editTile(setto){
    var MouseIsOnTiles = CheckIfMouseIsOnTiles();
    if(MouseIsOnTiles){
        MAP[(Math.floor(mouseY/10))*200+(Math.floor(mouseX/10))] = setto;
        console.log("MAP["+(Math.floor(mouseX/10))+","+Math.floor(mouseY/10)*200+"] set to: "+setto);
    }
}