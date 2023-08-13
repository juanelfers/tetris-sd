import Board from "./Board.js";
import Piece from "./Piece.js";

class Tetris {
    #boardWidth = 8;
    #boardHeight = 20;
    // #pieces = [];
    #currentPiece;

    constructor (board) {
        this.board = new Board(board, this.#boardWidth, this.#boardHeight);
        this.board.draw();

        setInterval(() => this.continue(), 1000);
    }

    continue () {
        console.log('continue')
        if (!this.#currentPiece || this.#currentPiece.atBottom()) {
            const newPiece = new Piece(this.#boardWidth, this.#boardHeight);
            this.#currentPiece = newPiece;
            // this.#pieces.push(newPiece);
            this.board.addPiece(newPiece);
        }

        this.#currentPiece.move('down');
        this.board.draw();
    }
}

export default Tetris;
