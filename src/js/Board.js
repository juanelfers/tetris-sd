class Board {
    #width;
    #height;
    
    constructor (container, width, height) {

        // type: square, line, L
        this.container = container;
        this.#width = width;
        this.#height = height;
    }

    draw() {
        const cells = this.#width * this.#height;
        this.container.innerHTML = '<div class="cell"></div>'.repeat(cells);
    }
}

export default Board;
