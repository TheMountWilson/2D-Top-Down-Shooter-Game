function ShowOutput(){
    var OutStrToScreen = "[";
    OutStrToClipBoard = "[";
    var counter = 0;

    for (let i = 0;i<MAP.length;i++){
        if (counter == 200){
            OutStrToScreen += "\n";
            counter = 0;
        }
            OutStrToScreen += MAP[i];
            OutStrToClipBoard += "'"+MAP[i]+"',";
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
