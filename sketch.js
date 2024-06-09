let cnv;
let grid = 3;
let cells = [];

let player = ["green", "red"];
let playerTurn = 0;
let turns = [];

let currentTurn = player[playerTurn];

function setup() {
    cnv = createCanvas(800, 800);

    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            cells.push(new Cell(i, j, width, height, grid));
        }
    }
    background(0);

    for (let i = 0; i < grid; i++) {
        cells.push([]);
    }

    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            cells[i][j] = [
                (width / grid) * j,
                (width / grid) * (j + 1),
                (height / grid) * i,
                (height / grid) * (i + 1),
            ];
        }
    }

    stroke(255);
    for (let i = 1; i < grid; i++) {
        line(0, (height / grid) * i, width, (height / grid) * i);
        line((width / grid) * i, 0, (width / grid) * i, height);
    }
}

function draw() {
    strokeWeight(3);

    for (let i = 0; i < Math.pow(grid, 2); i++) {
        cells[i].show(currentTurn);
    }
    cnv.mouseClicked(decision);
}

function decision() {
    index = 0;
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            if (
                mouseX > cells[i][j][0] &&
                mouseX < cells[i][j][1] &&
                mouseY > cells[i][j][2] &&
                mouseY < cells[i][j][3]
            ) {
                turns.push(index);
                cells[index].state = currentTurn;
                playerTurn = (playerTurn + 1) % 2;
                currentTurn = player[playerTurn];
                unLite();
                console.log(turns);
            }
            index++;
        }
    }
}

function unLite() {
    if (turns.length > 6) {
        cells[turns[0]].state = "white";
        turns.shift();
    }
}
