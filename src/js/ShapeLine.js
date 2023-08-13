import Shape from "./Shape.js";

class ShapeLine extends Shape {
    getCoordinates() {
        const { color } = this;

        const coordinates = [{
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
        }];

        return { ...coordinates, color }
    }

    atBottom() {

    }
}

export default ShapeLine;
