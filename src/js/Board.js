class Board {
    #width;
    #height;
    #pieces = [];

    constructor(container, width, height) {
        // type: square, line, L
        this.container = container;
        this.#width = width;
        this.#height = height;
    }

    draw() {
        this.container.innerHTML = '';

        console.log(this.#pieces.map(p => p.getCoordinates()))

        for (let y = 1; y <= this.#height; y++) {
            for (let x = 1; x <= this.#width; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                this.container.appendChild(cell);

                for (const piece of this.#pieces) {
                    const { coordinates, color } = piece.getCoordinates();
                    console.log({coordinates})
                    for (const { x: xPos, y: yPos } of coordinates) {
                        if (x === xPos && y === yPos) {
                            console.log('MATCH')
                            cell.style.background = color;
                        }
                    }
                }
            }
        }
    }

    addPiece(piece) {
        this.#pieces.push(piece);
    }

}

export default Board;
