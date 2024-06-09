class Cell {
    constructor(col, row, width, height, grid) {
        this.col = col;
        this.row = row;
        this.minLeft = (width / grid) * this.row;
        this.maxLeft = (width / grid) * (this.row + 1);
        this.minRight = (height / grid) * col;
        this.maxRight = (height / grid) * (this.col + 1);
        this.state = "white";
    }

    show(playerTurn) {
        push();
        translate(width / (grid * 2), height / (grid * 2));

        if (
            mouseX > this.minLeft &&
            mouseX < this.maxLeft &&
            mouseY > this.minRight &&
            mouseY < this.maxRight &&
            this.state === "white"
        ) {
            stroke(playerTurn);
            fill(color(255 / 2));
        } else {
            noStroke();
            fill(color(this.state));
        }
        ellipse(
            (width / grid) * this.row,
            (height / grid) * this.col,
            (width / grid) * 0.85,
            (height / grid) * 0.85
        );
        pop();
    }
}
