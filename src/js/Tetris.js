class Tetris {
    #boardWidth = 8;
    #boardHEight = 20;

    constructor (board) {
        this.board = board;
        this.draw();
    }

    draw() {
        this.board.innerHTML = 1;
    }
}

export default Tetris;
