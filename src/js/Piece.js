class Piece {
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
        if (direction === 'down') {
            this.position.y += 1;
        } else if (direction === 'right') {
            this.position.x = Math.min(this.boardWidth, this.position.x + 1);
        } else if (direction === 'left') {
            this.position.x = Math.max(0, this.position.x - 1);
        }
    }

    atBottom() {
        return false;
    }

    getCoordinates() {
        let coordinates;
        const { color } = this;

        switch (this.type) {
            case 'square':
                coordinates = [{
                    x: this.position.x,
                    y: this.position.y,
                }, {
                    x: this.position.x + 1,
                    y: this.position.y,
                }, {
                    x: this.position.x + this.boardWidth,
                    y: this.position.y + 1,
                }, {
                    x: this.position.x + this.boardWidth + 1,
                    y: this.position.y + 1,
                }]
                break;
            case 'line':
                coordinates = [{
                    x: this.position.x,
                    y: this.position.y,
                }, {
                    x: this.position.x,
                    y: this.position.y + 1,
                }, {
                    x: this.position.x,
                    y: this.position.y + 2,
                }, {
                    x: this.position.x,
                    y: this.position.y + 3,
                }]
                break;
            case 'L':
                break;
        }

        return { ...coordinates, color }
    }
}

export default Piece;
