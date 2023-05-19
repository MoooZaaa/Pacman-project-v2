const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrames = document.getElementById("animations");
const ghostFrames = document.getElementById("ghost");

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};

let fps = 30;
let oneBlockSize = 20;
let wallColor = "#342DCA";
let wallSpaceWidth = oneBlockSize / 1.5;
let wallOffset = (oneBlockSize - wallSpaceWidth) / 2;
let wallInnerColor = "black";

const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_DOWN = 1;

// [ CARTE ]

let map = [
    [1,1,1,1,1 ,1,1,1,1,1 , 1,1,1,1,1 ,1,1,1,1,1 ,1],
    [1,2,2,2,2 ,2,2,2,2,2 , 1,2,2,2,2 ,2,2,2,2,2 ,1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1 ,2,1,1,1,2 ,1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1 ,2,1,1,1,2 ,1],
    [1,2,2,2,2 ,2,2,2,2,2 , 2,2,2,2,2 ,2,2,2,2,2 ,1],
    [1,2,1,1,1 ,2,1,2,1,1 , 1,1,1,2,1 ,2,1,1,1,2 ,1],
    [1,2,2,2,2 ,2,1,2,2,2 , 1,2,2,2,1 ,2,2,2,2,2 ,1],
    [1,1,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1 ,2,1,1,1,1 ,1],
    [0,0,0,0,1 ,2,1,2,2,2 , 2,2,2,2,1 ,2,1,0,0,0 ,0],
    [1,1,1,1,1 ,2,1,2,1,1 , 2,1,1,2,1 ,2,1,1,1,1 ,1],
    [2,2,2,2,2 ,2,2,2,1,2 , 2,2,1,2,2 ,2,2,2,2,2 ,1], // [ <== CHANGEMENT PROBABLE ]
    [1,1,1,1,1 ,2,1,2,1,2 , 2,2,1,2,1 ,2,1,1,1,1 ,1],
    [0,0,0,0,1 ,2,1,2,1,1 , 1,1,1,2,1 ,2,1,0,0,0 ,0],
    [0,0,0,0,1 ,2,1,2,2,2 , 2,2,2,2,1 ,2,1,0,0,0 ,0],
    [1,1,1,1,1 ,2,2,2,1,1 , 1,1,1,2,2 ,2,1,1,1,1 ,1],
    [1,2,2,2,2 ,2,2,2,2,2 , 1,2,2,2,2 ,2,2,2,2,2 ,1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1 ,2,1,1,1,2 ,1],
    [1,2,2,2,1 ,2,2,2,2,2 , 2,2,2,2,2 ,2,1,2,2,2 ,1],
    [1,1,2,2,1 ,2,1,2,1,1 , 1,1,1,2,1 ,2,1,2,2,1 ,1],
    [1,2,2,2,2 ,2,1,2,2,2 , 1,2,2,2,1 ,2,2,2,2,2 ,1],
    [1,2,1,1,1 ,1,1,1,1,2 , 1,2,1,1,1 ,1,1,1,1,2 ,1],   
    [1,2,2,2,2 ,2,2,2,2,2 , 2,2,2,2,2 ,2,2,2,2,2 ,1],
    [1,1,1,1,1 ,1,1,1,1,1 , 1,1,1,1,1 ,1,1,1,1,1 ,1],
];

let gameLoop = () => {
    update()
    draw() 
};

let update = () => {
    // todo
};

let draw = () => {
    createRect(0, 0, canvas.width, canvas.height, "black");
    // todo
    drawWalls()
};

let gameInterval = setInterval(gameLoop, 1000 / fps);

// [ CREATION DES MURS ]

let drawWalls = () => {
    for (let i = 0 ; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 1) { 
                // [ CONDITIONS POUR LES MURS ]
                createRect(
                    j * oneBlockSize, 
                    i * oneBlockSize, 
                    oneBlockSize, 
                    oneBlockSize, 
                    wallColor
                );

                if (j > 0 && map[i][j - 1] == 1) {
                    createRect(
                        j * oneBlockSize,
                        i * oneBlockSize + wallOffset,
                        wallSpaceWidth + wallOffset,
                        wallSpaceWidth, 
                        wallInnerColor
                    );
                }
                if (j < map[0].length - 1 && map[i][j + 1] == 1) {
                    createRect(
                        j * oneBlockSize + wallOffset,
                        i * oneBlockSize + wallOffset,
                        wallSpaceWidth + wallOffset,
                        wallSpaceWidth, 
                        wallInnerColor
                    );
                }
                
                if (i > 0 && map[i - 1][j] == 1) {
                    createRect(
                        j * oneBlockSize + wallOffset,
                        i * oneBlockSize,
                        wallSpaceWidth,
                        wallSpaceWidth + wallOffset, 
                        wallInnerColor
                    );
                }
                if (i < map.length - 1 && map[i + 1][j] == 1) {
                    createRect(
                        j * oneBlockSize + wallOffset,
                        i * oneBlockSize + wallOffset,
                        wallSpaceWidth,
                        wallSpaceWidth + wallOffset, 
                        wallInnerColor
                    );
                } 
            }
        }
    }
}