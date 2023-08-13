import Shape from "./Shape.js";

class ShapeSquare extends Shape {
    getCoordinates() {
        const { color } = this;
        const { x, y } = this.position;

        const coordinates = [
            { x, y },
            { x: x + 1, y },
            { x, y: y + 1 },
            { x: x + 1, y: y + 1 }
        ];

        return { coordinates, color }
    }

    atBottom() {
        return this.position.y + 1 === this.boardHeight;
    }
}

export default ShapeSquare;
