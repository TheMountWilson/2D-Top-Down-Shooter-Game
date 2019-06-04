// TODO:    
//      Link Map loading and drawing to Camera code

let bulletArray  = [];
let enemyArray = [];
let medkitArray = [];

var MAP_Passable = [];
var MAP_HeightLevel = [];
var MAP_Texture = [];
var MAP = LoadLevel_01();

var rectLocX = 0;
var rectLocY = 0;

function LoadMapElements(){
    enemyArray.push(new Enemy(612,200,true,2,2,100,100,3));
    enemyArray.push(new Enemy(200,300,true,2,2,100,120,4));
    enemyArray.push(new Enemy(235,150,true,2,2,100,120,4));
    medkitArray.push(new Medkit(400,200,true,30));
    console.log(MAP.length);
}

function DrawMap(){
    for (let i = 0;i<200;i++){
        for (let j = 0;j<200;j++){
            if (MAP[i*200+j]==1)DrawRect(j*10,i*10,10,10,"#4286f4");
        }
    }
}

function LoadMapLayout (){
    var bitset;
    var heightLevel;
    var texture;
    for (let i = 0;i<MAP.length;i++){

        bitset = ConvertBase64ToBinary (MAP[i]);
        if(bitset[0]=='1')MAP_Passable[i]=true;
        else if(bitset[0]=='0')MAP_Passable[i]=false;
        heightLevel = bitset[1] + bitset[2] + bitset[3];
        texture = bitset[4] + bitset[5];
        MAP_HeightLevel[i] = ConvertToIntMapHeightLevel(heightLevel);
        MAP_Texture[i] = ConvertToIntMapTexture(texture);
    }
}