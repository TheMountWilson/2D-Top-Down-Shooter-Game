var MapLayoutImages = [];

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
    MapLayoutImages[index].onload = CountLoadedImages();
    MapLayoutImages[index].src = "Images/"+ fileName;
}

function loadImages(){
    var imageList = [
        // TODO: Use numbers 1,2,3... instead of Base64
        {number: 1, theFile: "0_0_0.png"},
        {number: 2, theFile: "0_0_2.png"},

        {number: 3, theFile: "1_1_0.png"},
        {number: 4, theFile: "1_1_1.png"},
        {number: 5, theFile: "1_1_2.png"},
        {number: 6, theFile: "1_1_3.png"},

        {number: 7, theFile: "0_2_0.png"},
        {number: 8, theFile: "1_2_0.png"},

        {number: 9, theFile: "1_3_0.png"},
        {number: 10, theFile: "1_3_1.png"},
        {number: 11, theFile: "1_3_2.png"},
        {number: 12, theFile: "1_3_3.png"}
    ];

    imagesToLoad = imageList.length;

    for (let i = 0;i<imageList.length;i++){
        LoadMapLayoutImage(i,imageList[i].theFile);
    }
}