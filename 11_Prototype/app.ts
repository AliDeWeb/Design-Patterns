interface Prototype<T> {
    clone(): T;
}

class CircleShape implements Prototype<CircleShape> {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea() {
        return this.radius ** 2 * Math.PI
    }

    clone(): CircleShape {
        return new CircleShape(this.radius);
    }
}

(() => {
    const circleShape = new CircleShape(10);

    console.log(circleShape.calculateArea());

    const circleShapeDuplicate = circleShape.clone();
    console.log(circleShapeDuplicate.calculateArea());
})()
