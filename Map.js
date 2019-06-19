let bulletArray  = [];
let enemyArray = [];
let medkitArray = [];

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
