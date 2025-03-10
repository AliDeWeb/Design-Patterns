interface Shape {
    accept(visitor: ShapeVisitor): void
}

interface ShapeVisitor {
    visitCircle(circle: Circle): unknown

    visitRectangle(rectangle: Rectangle): unknown
}

class Circle implements Shape {
    constructor(public r: number) {
        this.r = r;
    }

    accept(visitor: ShapeVisitor) {
        return visitor.visitCircle(this)
    }
}

class Rectangle implements Shape {
    constructor(public w: number, public h: number) {
        this.w = w;
        this.h = h;
    }

    accept(visitor: ShapeVisitor) {
        return visitor.visitRectangle(this)
    }
}

class AreaCalculator implements ShapeVisitor {
    visitCircle(circle: Circle): number {
        return circle.r ** 2 * Math.PI
    }

    visitRectangle(rectangle: Rectangle): number {
        return rectangle.h * rectangle.w
    }
}

(() => {
    const shapes: Shape[] = [
        new Circle(10),
        new Rectangle(5, 2)
    ]

    const areaCalculator = new AreaCalculator();

    shapes.forEach(shape => {
        console.log(shape.accept(areaCalculator))
    })
})()
