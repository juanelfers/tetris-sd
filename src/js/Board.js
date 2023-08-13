class Board {
    #width;
    #height;
    #pieces = [];

    constructor (container, width, height) {
        // type: square, line, L
        this.container = container;
        this.#width = width;
        this.#height = height;
    }

    draw() {
        const cells = this.#width * this.#height;
        this.container.innerHTML = '<div class="cell"></div>'.repeat(cells);

        console.log(this.#pieces)
    }

    addPiece(piece) {
        this.#pieces.push(piece);
    }

}

export default Board;
