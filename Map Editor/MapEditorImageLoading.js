var MapLayoutImages = [];
var MapLayoutSymbols = [];

var imagesToLoad = 0; // set automatically based on imageList in loadImages()

function CountLoadedImages(){
    imagesToLoad--;
    console.log(imagesToLoad);
    if(imagesToLoad == 0) {
        Launch();
    }
}

function LoadMapLayoutImage(index,fileName){
    MapLayoutImages[index] = document.createElement("img");
    MapLayoutImages[index].onload = CountLoadedImages;
    MapLayoutImages[index].src = "../Images/"+ fileName;
}

function loadImages(){
    var imageList = [
        {name: "A", theFile: "0_0_0.png"},
        {name: "C", theFile: "0_0_2.png"},

        {name: "k", theFile: "1_1_0.png"},
        {name: "l", theFile: "1_1_1.png"},
        {name: "m", theFile: "1_1_2.png"},
        {name: "n", theFile: "1_1_3.png"},

        {name: "I", theFile: "0_2_0.png"},
        {name: "o", theFile: "1_2_0.png"},

        {name: "s", theFile: "1_3_0.png"},
        {name: "t", theFile: "1_3_1.png"},
        {name: "u", theFile: "1_3_2.png"},
        {name: "v", theFile: "1_3_3.png"}
    ];

    imagesToLoad = imageList.length;

    for (let i = 0;i<imageList.length;i++){
        LoadMapLayoutImage(i,imageList[i].theFile);
        MapLayoutSymbols[i] = imageList[i].name;
    }
}