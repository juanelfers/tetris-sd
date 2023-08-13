import Board from "./Board.js";
import ShapeL from "./ShapeL.js";
import ShapeLine from "./ShapeLine.js";
import ShapeSquare from "./ShapeSquare.js";

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
            const Shape = [/*ShapeL, ShapeLine,*/ ShapeSquare][Math.floor(Math.random() * 1)];
            const newPiece = new Shape(this.#boardWidth, this.#boardHeight);
            this.#currentPiece = newPiece;
            // this.#pieces.push(newPiece);
            this.board.addPiece(newPiece);
        }

        this.#currentPiece.move('down');
        this.board.draw();
    }
}

export default Tetris;
