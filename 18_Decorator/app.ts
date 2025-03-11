interface Coffee {
    cost(): number

    description(): string
}

class SimpleCoffee implements Coffee {
    cost(): number {
        return 4.36
    }

    description(): string {
        return "Simple Coffee";
    }
}

class CoffeeDecorator implements Coffee {
    constructor(protected readonly coffee: Coffee) {
    }

    cost(): number {
        return this.coffee.cost()
    }

    description(): string {
        return this.coffee.description()
    }
}

class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 1.63;
    }

    description(): string {
        return super.description() + " + Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 1;
    }

    description(): string {
        return super.description() + ", Sugar";
    }
}

(() => {
        let coffee = new SimpleCoffee();

        coffee = new MilkDecorator(coffee)
        coffee = new SugarDecorator(coffee)

        console.log(
            coffee.description()
        )
    }
)()
