import Shape from "./Shape.js";

class ShapeL extends Shape {
    getCoordinates() {
        const { color } = this;

        return { ...coordinates, color }
    }

    atBottom() {

    }
}

export default ShapeL;
