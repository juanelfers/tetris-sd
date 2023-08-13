class Shape {
    constructor(boardWidth, boardHeight) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.color = ['red', 'green', 'blue', 'yellow'][Math.floor(Math.random() * 4)];
        this.type = ['square', 'line'/*, 'L'*/][Math.floor(Math.random() * 2)];
        this.position = {
            x: Math.floor(Math.random() * boardWidth) - 1,
            y: 0
        };
    }

    move(direction) {
        // if (this.atBottom()) return;

        if (direction === 'down') {
            this.position.y += 1;
        } else if (direction === 'right') {
            this.position.x = Math.min(this.boardWidth, this.position.x + 1);
        } else if (direction === 'left') {
            this.position.x = Math.max(0, this.position.x - 1);
        }
    }
}

export default Shape;
