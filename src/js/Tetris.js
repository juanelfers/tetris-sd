import Board from "./Board.js";

class Tetris {
    #boardWidth = 8;
    #boardHeight = 20;

    constructor (board) {
        this.board = new Board(board, this.#boardWidth, this.#boardHeight);
        this.board.draw();
    }


}

export default Tetris;
